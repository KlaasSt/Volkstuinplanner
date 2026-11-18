"""Alleen zachter, nooit luider: geleidelijk extra decrescendo op de boventonen van een toon (0 dB tot t0, dan lineair in dB naar -D aan het eind)."""
import sys, json, numpy as np, soundfile as sf, scipy.signal as ss
src, dst = sys.argv[1], sys.argv[2]; a, b, f0 = json.loads(sys.argv[3]); Dd = float(sys.argv[4]); t0 = float(sys.argv[5]); H = int(sys.argv[6])
x, sr = sf.read(src); y = x.copy(); sos = ss.butter(6, 14 / (sr / 2), output='sos')
n0, n1 = int(a * sr), int(b * sr); pad = int(0.3 * sr); L = n1 - n0; t = np.arange(L) / sr
gdb = -Dd * np.clip((t - t0) / (t[-1] - t0), 0, 1); F = int(0.05 * sr); w = np.ones(L); w[-F:] = np.linspace(1, 0, F)
g = 10 ** (gdb * w / 20)
for h in range(1, H + 1):
    fp = f0 * h * (1 + 0.0004 * (h * h - 1))
    for ch in range(x.shape[1]):
        s = x[n0 - pad:n1 + pad, ch]; n = np.arange(len(s))
        z = ss.sosfiltfilt(sos, s * np.exp(-2j * np.pi * fp * n / sr))[pad:pad + L]
        y[n0:n1, ch] += 2 * np.real(z * (g - 1) * np.exp(2j * np.pi * fp * n[pad:pad + L] / sr))
sf.write(dst, y, sr, subtype='PCM_24')
