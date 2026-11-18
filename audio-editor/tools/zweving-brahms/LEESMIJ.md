# Zwevingscorrectie C5 – Brahms, Ein deutsches Requiem nr. 1, take X5

Vastgelegd op 18 november 2026: precies zoals de gekozen versie gemaakt is, zodat het te herhalen is op de definitieve WAV voor de cd.

## Het probleem
In de bovenste melodie zweeft de C5 (ongeveer 517 Hz). De snaren van die toon staan onderling iets uit elkaar: ongeveer 515,5 tegen 519 Hz. Daardoor gaat de klank 3 à 4 keer per seconde op en neer. De zweving verschilt per microfoon (links en rechts), dus elk kanaal wordt apart behandeld.

## Wat de correctie doet
Per boventoon en per kanaal wordt de toon in een smalle band (±14 Hz) gevolgd.
- **Dalen vullen** (`ontzweef.py`): waar de klank door de zweving wegzakt, wordt hij opgetild tot vlak onder de lijn door de toppen. Elders blijft de klank origineel. In de dalen wordt de fase gladgestreken, zodat er geen toonhoogtehikje ontstaat. Overgangen hebben een zachte rand van 10 ms, zodat er geen tik ontstaat. Elke noot blijft even luid, op een eventuele gekozen noot-gain na.
- **Extra decrescendo** (`afloop.py`): de toon wordt geleidelijk iets zachter, nooit luider.

## De gekozen instellingen
Tijden gelden voor de uitsnede `Brahms_Requiem_No1_X5.wav` (61 s, gemaakt uit de MP3).

| Stap | Wat | Tijd (s) | Toon | Instelling |
|---|---|---|---|---|
| 1 | eerste C5, "sterk", 1,5 dB zachter | 21,11–21,62 | 516,5 Hz | dalen tot 1,5 dB onder de toppen, max 9 dB optillen, boventonen 1–4, noot −1,5 dB |
| 2 | tweede C5, "matig" (één lange toon, aanslag 22,33) | 22,35–23,88 | 517 Hz | dalen tot 3 dB onder de toppen, max 24 dB optillen, boventonen 1–4 |
| 3 | tweede C5, extra decrescendo | 22,35–23,88 | 517 Hz | vanaf 0,35 s na het begin geleidelijk tot −3 dB aan het eind, boventonen 1–6 |

Afgewezen en waarom:
- dalen helemaal vullen klonk te statisch en "elektronisch";
- zwelling na de aanslag maakte de toon te luid;
- het originele volumeverloop overnemen maakte de toon juist strak;
- de valse snaar wegfilteren werkte niet betrouwbaar.

## Opnieuw uitvoeren
Je hebt Python 3 nodig met `numpy`, `scipy` en `soundfile`:

    pip install numpy scipy soundfile

**Dezelfde uitsnede:**

    sh maak_correctie.sh Brahms_Requiem_No1_X5.wav uit.wav

Dit levert exact (bit voor bit) de gekozen versie op. Dat is gecontroleerd.

**Definitieve WAV (andere, langere opname):**
1. Zoek waar de uitsnede in de nieuwe opname staat:

       python3 zoek_positie.py Brahms_Requiem_No1_X5.wav definitief.wav

   De uitkomst is de verschuiving in seconden. Is de correlatie lager dan ongeveer 0,9, dan is het een andere mix of master. Controleer de tijden dan op het oor of in de golfvorm.
2. Voer de correctie uit met die verschuiving:

       sh maak_correctie.sh definitief.wav definitief_gecorrigeerd.wav 1234.567

3. Controleer het resultaat:

       python3 meet.py definitief.wav definitief_gecorrigeerd.wav 1256.92 1258.45 517

   (tijden van de tweede C5: 22,35 en 23,88 plus de verschuiving)

   De golving moet duidelijk lager worden en de luidheid moet gelijk blijven. Luister altijd na.

## Aandachtspunten voor de definitieve versie
- **Komt de definitieve WAV uit de oorspronkelijke opname** (niet uit de MP3) **en is hij anders gemixt of gemasterd?** Dan kunnen de diepte van de zweving en de exacte toonhoogte iets anders zijn. Controleer met `meet.py`. Wijkt de C5 af van ongeveer 517 Hz (bijvoorbeeld door een andere samplefrequentie)? Pas dan het getal in `maak_correctie.sh` aan.
- **Masteren:** pas de correctie toe vóór limiter, compressie of EQ, of op de eindmaster, maar niet tussen twee bewerkingen die het niveau van die noten veranderen.
- **Samplefrequentie en bitdiepte:** de scripts werken op elke samplefrequentie. Ze schrijven 24-bit WAV.
- **Bewaar altijd het origineel.** De scripts overschrijven niets.

## Bestanden
- `maak_correctie.sh` – de drie stappen met de gekozen instellingen
- `ontzweef.py` – dalen vullen
- `afloop.py` – extra decrescendo
- `zoek_positie.py` – plek van de uitsnede in een andere opname vinden
- `meet.py` – controle voor en na
