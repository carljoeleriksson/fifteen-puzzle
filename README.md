# 15 PUZZLE
## NOTES
- Run `npm run dev` to start app.
- To alter number of rows and/or columns, go to src/utils/constants.js.

## OM ARBETET
När jag fick uppgiften såg den enkel ut, men jag insåg snart att den var rätt svår med mina mått mätt. Jag har inte gjort jättemycket "matematiskt-inriktad" programmering, som jag tyckte att detta var. Så det tog ganska lång tid att fundera ut hur jag skulle lägga upp appen. Jag researchade och testade olika sätt ungefär en eftermiddag innan jag kände att jag hade hittat rätt. 

**Mest nöjd** är jag med att jag fick till funktionen för att kunna flytta flera brickor med ett click, för det var inget jag hittade i något annat likvärdigt projekt i min research.

**Svårast**, och det som jag lagt mest tid på var överlägset funktionen 
moveTiles() och de matematiska uträkningarna för att beräkna positioner i arrayen. Så här fick jag researcha mycket och testa mig fram. 

Det var även lite klurigt hålla ordning på att; om man t.ex. vill flytta en bricka sidleds i en rad så måste man kolla hur många kolumn-steg jag ska flytta och vice versa.

I min dev-branch på GitHub har jag kommenterat upp väldigt mycket för att hålla koll på vad var sak gör för att hålla ordning i mitt huvud:)

**En brist** som jag vet finns är att det iaf i ett vanligt 15-pussel finns en olöslig start-position, och detta har jag inte checkat för.


CSS har jag enl. instruktionen inte fokuserat nämnvärt på, och med tanke på att det är ett såpass litet projekt så höll jag all CSS i en vanlig CSS-fil.

