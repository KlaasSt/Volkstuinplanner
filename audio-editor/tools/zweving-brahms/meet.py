"""Controle: golving (zweving) per kanaal en boventoon, voor en na.
Gebruik: python3 meet.py origineel.wav gecorrigeerd.wav begin eind grondtoon_Hz
Lager getal = minder zweving. Luidheid moet (vrijwel) gelijk blijven."""
import sys, numpy as np, soundfile as sf, scipy.signal as ss
fa, fb = sys.argv[1], sys.argv[2]; a, b, f0 = map(float, sys.argv[3:6])
A, sr = sf.read(fa); B, _ = sf.read(fb); sos = ss.butter(6, 14 / (sr / 2), output='sos')
def golf(x, ch, fp):
    s = x[int((a - .3) * sr):int((b + .3) * sr), ch]; n = np.arange(len(s))
    z = ss.sosfiltfilt(sos, s * np.exp(-2j * np.pi * fp * n / sr))[int(.3 * sr):-int(.3 * sr)]
    t = np.arange(len(z)) / sr; E = 20 * np.log10(np.abs(z) + 1e-12); c = (t > .05) & (t < t[-1] - .05)
    return np.std(E[c] - np.polyval(np.polyfit(t[c], E[c], 2), t[c]))
for ch in range(A.shape[1]):
    for h in (1, 2, 3):
        print(f'kanaal {"LR"[ch]}  boventoon {h} ({f0*h:.0f} Hz): golving {golf(A, ch, f0*h):.2f} -> {golf(B, ch, f0*h):.2f} dB')
lv = lambda x: 20 * np.log10(np.sqrt(np.mean(x[int(a * sr):int(b * sr)] ** 2)))
print(f'luidheid in dit stuk: {lv(A):.2f} -> {lv(B):.2f} dB')
