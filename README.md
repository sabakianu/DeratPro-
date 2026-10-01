# DeratPro-

## Cum rulezi

### Docker

Creare mediu: 

```bash
   docker-compose up --build
```

Pentru a opri mediul:

```bash
   docker-compose down
```

### Clasic

```bash
   npm install
```

```bash
   npm run dev
```

Aplicatia va fi desponibila la: http://localhost:3000

## Deploy

Link Vercel: https://derat-pro-seven.vercel.app/

## Tool de design AI folosit

stitch.withgoogle.com

## Prompt folosit

Create a modern landing page with the name DeratPro. It is a proffesional pest control company. The colour palleye will use #166534 #f3f4f6 #84cc16 and #CCFF00 #8A9A5B. The UI will be simple and clean.

The components:

- Navbar with buttons and a logo
- Hero page with Three.js animation (the name and CTA button)
- Services (deratizare, dezinsecție, dezinfecție) with title , short description icon
- why to choose DeratPro (ex: intervenție rapidă, substanțe avizate, personal autorizat, garanție)
- Why it works (ex: Ne suni → Evaluare → Intervenție)
- Contact (form with nume, telefon, mesaj and email)
- Footer

## Decizii/Compromisuri

- La navbar pt ecranele mici am adăugat un buton "Dropdown" pentru a economisi spațiu și a arăta mai frumos;
- Am testat extensia dark-theme de pe browser și arată chiar decent, așa că nu am mai adăugat un dark-toggle custom;
- La formular secțiunea dropdown nu am mai folosit `<select>` nativ ci am pus unul custom deoarece la ecranele mici ieșea din ecran;
- Pentru modularizarea codului pe lângă fiecare secțiune am creat carduri custom și alte componente deoarece se repetau în design cu customizări mici, așa că e mult mai modular acum codul;
- La numere de telefon și email am pus dacă apasă utilizatorul să poată apela/ scrie email automat;
- Am creat un fișier unde centralizează datele precum emailul, nr de telefon normal/urgențe și programele în caz dacă utilizatorul le schimbă, se va face automat peste tot;
- Am adăugat "Waypoints" locale pt navigare rapidă și eficientă;
- Am adăugat un modal pt termeni și condiții;
- Pt servicii dacă utilizatorul dă click îl duce la contact și completează automat tipul serviciului;
- Pt estetică la modelul 3d de pe Three.js am pus un tub de gândaci (e în temă :) ) am făcut să se rotească automat și utilizatorul prin drag îl rotește până la un moment dat și își revine inițial pe axa y, dar pe x rămâne cum l-a modificat;
- Dacă apăs pe logo de pe navbar mă duce înapoi sus;
