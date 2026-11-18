"""Zoek waar een fragment (bijv. de MP3-uitsnede) in een andere, langere opname staat.
Gebruik: python3 zoek_positie.py fragment.wav volledige_opname.wav
Geeft de verschuiving in seconden: tijd_in_volledig = tijd_in_fragment + verschuiving."""
import sys, numpy as np, soundfile as sf, scipy.signal as ss
a, sra = sf.read(sys.argv[1]); b, srb = sf.read(sys.argv[2])
a = a.mean(1) if a.ndim > 1 else a; b = b.mean(1) if b.ndim > 1 else b
if sra != srb: a = ss.resample_poly(a, srb, sra)
sr = srb; d = 8                                    # grof op 1/8 samplefrequentie, daarna fijn
ga, gb = ss.decimate(a, d), ss.decimate(b, d)
c = ss.fftconvolve(gb, ga[::-1], 'valid'); k = int(np.argmax(np.abs(c))) * d
lo = max(0, k - 4 * d); seg = b[lo:lo + len(a) + 8 * d]
cf = ss.fftconvolve(seg, a[::-1], 'valid'); k2 = lo + int(np.argmax(np.abs(cf)))
r = np.corrcoef(a, b[k2:k2 + len(a)])[0, 1]
print(f'verschuiving: {k2 / sr:.4f} s  (correlatie {r:.3f}; dicht bij 1 = zelfde opname)')
