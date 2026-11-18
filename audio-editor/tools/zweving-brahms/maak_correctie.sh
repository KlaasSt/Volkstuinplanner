#!/bin/sh
# Zwevingscorrectie C5, Brahms Requiem nr. 1, take X5 (versie gekozen op 18-11-2026).
# Gebruik: sh maak_correctie.sh invoer.wav uitvoer.wav [verschuiving_s]
# Tijden hieronder gelden voor de uitsnede Brahms_Requiem_No1_X5.wav; geef voor een andere/langere
# opname de verschuiving op (zie zoek_positie.py).
set -e
IN="$1"; OUT="$2"; S="${3:-0}"
t() { python3 -c "print(round($1 + $S, 4))"; }
DIR=$(dirname "$0"); TMP1="$OUT.stap1.wav"; TMP2="$OUT.stap2.wav"
# 1. Eerste C5: dalen vullen (diep 1,5 dB, max 9 dB optillen), boventonen 1-4, noot 1,5 dB zachter
python3 -I "$DIR/ontzweef.py" "$IN" "$TMP1" "[[$(t 21.11),$(t 21.62),516.5,-1.5]]" 1.5 4 9
# 2. Tweede C5 (één lange toon, aanslag 22,33): 'matig' = dalen tot 3 dB onder de toppen, max 24 dB optillen
python3 -I "$DIR/ontzweef.py" "$TMP1" "$TMP2" "[[$(t 22.35),$(t 23.88),517]]" 3 4 24
# 3. Tweede C5: extra decrescendo, vanaf 0,35 s na het begin geleidelijk tot -3 dB aan het eind (boventonen 1-6)
python3 -I "$DIR/afloop.py" "$TMP2" "$OUT" "[$(t 22.35),$(t 23.88),517]" 3 0.35 6
rm -f "$TMP1" "$TMP2"
echo "klaar: $OUT"
