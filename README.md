
# 🌙 Profile card
<!-- Geef je project een titel en schrijf in één zin wat het is -->
<img width="100px" src="https://i.makeagif.com/media/6-03-2023/-gfk8W.gif">

## 📚Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## 📝Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Net als het eerste jaar is het de bedoeling om het jaar te beginnen met het maken van een profile card. De Profilecard is bedoeld om en wat over jezelf te vertellen en dat te laten zien met front-end code

<img width="600px" src="https://github.com/user-attachments/assets/dd3c4e40-9f05-4f43-8737-b8ffb0043807">
<img width="200px" src="https://github.com/user-attachments/assets/dfc76737-a276-4fa9-a227-0608bd18e48c">



## 🔎 Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
Sinds deze opdracht voor mezelf is kan alles in de Dlc varieëren met hoeveel aandacht ik er aan heb besteed aan elke lifecycle.

**__analyse__**

Om zeker van te zijn wat ik moet maken lees ik eerst de instructies van de opdracht. De opdracht was snel duidelijk, het enige wat ik moest doen is mij verdiepen in de basis van svelte-kit.

**__ontwerp__**
De schets heb ik gemaakt in figma en was normaal bedoeld voor de person page in de squad page. Ik heb hem zo gemaakt dat hij ook geschikt is als profile card. Tijdens het maken van het ontwerp zat ik ook na te denken welke data ik precies wil ophalen vanuit de directus api en verwerk dat vervolgens in mijn figma ontwerp.<br>
https://www.figma.com/design/KSV5vp3Hrs5BufeIzKiYQC/person?node-id=0-1&node-type=canvas&t=Ww8wGagkskEqf7fj-0

**__bouwen__**

Heb gewerkt met verschillende soorten code (.svelte, html, css en javascript)


* de package die erbij hoort is @directus die ervoor zorgt dat ik data kan fetchen uit de directus api en @sveltejs die ervoor zorgt dat je gebruik kan maken van het Svelte-Kit framework

* .svelte: is een file naam waar je alle html css en client-side Javascript in verwerkt voor een specifieke pagina. In de routes folder maak je steeds meer andere folders. Elke folder is een andere pagina die zijn eigen page.svelte bevat
* css: hier is niet veel bijzonders. 
* serverside-JS: In de fetch-json.js heb ik een kleine functie die ervoor zorgt dat ik uiteindelijk in elke pagina iets kan fetchen. Deze file kan ik in +page.server.js file van elke pagina importeren en vervolgens filteren 
* clientside-JS: tot nu toe werk ik hier alleen met interacties

**__integreren__**

Bij het intergreren maak ik nu gebruik van vercel om mijn github repo's live te zetten. Vercel is geschikt voor svelte-kit projects.

**__testen__**

Bij het testen kijk ik of alles in de live versie overeen komt als in de lokale versie. 

* klopt alle styling
* en werkt het opgehaalde data nog. (niet dat alles undefined heeft als output)

## 📲Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
1. clone het project of download het als zip. dat kan je doen bij de groenebutton waarop code staat
2. open de folder in je code editor. zorg ervoor dat je met cd .svelte-kit in de terminal vervolgens op de juiste directorie zit
3. Daanra type je npm install. deze command zorgt ervoor dat binnen de .svetle-kit folder alle node package worden gedownload.
4. als laatst doe je npm run dev in de terminal om het project te starten. (onthou als je je vs code opnieuw opstart, hou er dan rekening met dat je met cd .svelte-kit weer op in de juiste directorie komt.

## 📗Bronnen

link van mijn site: 

## 🖋️Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
