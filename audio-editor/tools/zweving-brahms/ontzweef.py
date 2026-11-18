"""Alleen de zwevingsdalen vullen; het natuurlijke verloop van de toon blijft.
Per boventoon en kanaal: basisband z(t). De bovenomhullende U(t) loopt door de toppen van |z| (in dB, vloeiend
verbonden): dat is het natuurlijke uitsterven zonder de dalen. Waar |z| meer dan 'diep' dB onder U zakt, wordt het
niveau opgetild tot U - diep; elders blijft |z| precies zoals het was. De fase blijft origineel, behalve in de dalen
(waar de zweving de fase snel laat draaien): daar wordt hij plaatselijk gladgestreken."""
import sys, json, numpy as np, soundfile as sf, scipy.signal as ss
from scipy.interpolate import PchipInterpolator
src, dst = sys.argv[1], sys.argv[2]; notes = json.loads(sys.argv[3]); deep = float(sys.argv[4]); H = int(sys.argv[5]); CAP = float(sys.argv[6]) if len(sys.argv) > 6 else 9.0
x, sr = sf.read(src, dtype='float64'); y = x.copy(); PAD = 0.3; sos = ss.butter(6, 14 / (sr / 2), output='sos')
for nt in notes:
    a, b, f0 = nt[:3]; ng = 10 ** ((nt[3] if len(nt) > 3 else 0) / 20)   # optioneel: noot zachter/luider (dB)
    n0, n1 = int((a + 0.02) * sr), int(b * sr); pad = int(PAD * sr); L = n1 - n0; t = np.arange(L) / sr
    m = x[n0:n1].mean(1); N = 1 << 21; ff = np.fft.rfftfreq(N, 1 / sr); X = np.abs(np.fft.rfft(m * np.hanning(L), N)); ref = None
    F = int(0.03 * sr); fade = np.ones(L); fade[:F] = np.linspace(0, 1, F); fade[-F:] = np.linspace(1, 0, F)
    for h in range(1, H + 1):
        fe = f0 * h * (1 + 0.0004 * (h * h - 1)); k = (ff > fe - 10) & (ff < fe + 10); fp = ff[k][np.argmax(X[k])]
        lvl = 20 * np.log10(X[k].max()); ref = lvl if ref is None else ref
        if lvl < ref - 36: continue
        zs, cars = [], []
        for ch in range(x.shape[1]):
            seg = x[n0 - pad:n1 + pad, ch]; n = np.arange(len(seg))
            cars.append(np.exp(2j * np.pi * fp * n / sr)[pad:pad + L])
            zs.append(ss.sosfiltfilt(sos, seg * np.exp(-2j * np.pi * fp * n / sr))[pad:pad + L])
        for ch in range(x.shape[1]):                                     # elk kanaal zijn eigen zwevingsdalen
            z = zs[ch]; db = 20 * np.log10(np.abs(z) + 1e-12)
            pk = list(np.unique(np.r_[0, ss.find_peaks(db, distance=int(0.12 * sr))[0], L - 1]))
            changed = True
            while changed and len(pk) > 2:
                changed = False
                for i in range(1, len(pk) - 1):
                    l, c_, r = pk[i - 1], pk[i], pk[i + 1]
                    if db[c_] < db[l] + (db[r] - db[l]) * (c_ - l) / (r - l) - 2.0: pk.pop(i); changed = True; break
            U = np.maximum(PchipInterpolator(t[pk], db[pk])(t), db)
            lift = np.clip(U - deep - db, 0, CAP) * fade
            mg = int(0.015 * sr); mask = np.convolve((lift > 0.05).astype(float), np.ones(2 * mg + 1), 'same') > 0
            edges = np.flatnonzero(np.diff(np.r_[0, mask.astype(int), 0])); segs = list(zip(edges[::2], edges[1::2]))
            w = int(0.02 * sr); ph = np.unwrap(np.angle(z)); newph = ph.copy()
            for s0, s1 in segs:
                s1 = min(s1, L - 1)
                w0 = min(w, s0); w1 = min(w, L - 1 - s1)
                if w0 < 8 and w1 < 8:                                   # geen houvast: dit dal niet optillen
                    mask[s0:s1 + 1] = False; continue
                k0 = (ph[s0] - ph[s0 - w0]) / w0 if w0 >= 8 else None
                k1 = (ph[s1 + w1] - ph[s1]) / w1 if w1 >= 8 else None
                k0 = k1 if k0 is None else k0; k1 = k0 if k1 is None else k1; n = s1 - s0
                if n < 2: continue
                d = ph[s1] - ph[s0]; d += 2 * np.pi * np.round((0.5 * (k0 + k1) * n - d) / (2 * np.pi))
                u = np.arange(n + 1) / n
                newph[s0:s1 + 1] = ph[s0] * (2*u**3 - 3*u**2 + 1) + k0 * n * (u**3 - 2*u**2 + u) + (ph[s0] + d) * (-2*u**3 + 3*u**2) + k1 * n * (u**3 - u**2)
            R = int(0.010 * sr); win = np.hanning(2 * R + 1); win /= win.sum()
            blend = np.clip(np.convolve(mask.astype(float), win, 'same'), 0, 1) * fade
            mag = np.abs(z); M = np.minimum(mag * 10 ** (lift / 20), 10 ** (U / 20))
            Mo = (1 - blend) * mag + blend * M; Po = ph + blend * np.angle(np.exp(1j * (newph - ph)))
            res = Mo * np.exp(1j * Po)
            c = np.sqrt(np.mean(np.abs(z) ** 2) / np.mean(np.abs(res) ** 2)) * ng; sc = 1 + fade * (c - 1)   # even luid (x noot-gain)
            y[n0:n1, ch] += 2 * np.real((res * sc - z) * cars[ch])
        lifted = [0]
        print(f'{a:.2f}s h{h} {fp:.1f} Hz ({lvl - ref:+.0f} dB): {lifted[0]:.0f}% van de tijd opgetild')
sf.write(dst, y, sr, subtype='PCM_24'); print('verschil max %.4f' % np.abs(y - x).max())
