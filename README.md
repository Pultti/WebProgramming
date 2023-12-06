# Web_Portfolio
Toni Isopoussu

## Usage Guidelines

Hello and thanks for your interest in this repository! I encourage you to **fork this repository** rather than cloning it directly.
 Forking allows for better tracking of changes and collaboration. Your understanding and cooperation are much appreciated!

Web-sovellusten perusteet kurssi:

Moi, Listaan tähän järjestyksessä mistä arviointi kriteerit löytyvät, samanlainen lista alhaalla "lisätehtäville".
Toimintoja on yleensä useampikin sivulla mikä täyttää kriteerit, mutta mainitsen ainakin yhden.

Nettisivulla on Navigointti palkki ylälaidassa. HTML, CSS ja Javascript tiedostot on nimetty sivujen mukaan.

Arvioita osuus: 

---------------------------

HTML - Kaikki löytyy index.html - eli etusivulta.
1/5. Basic HTML structure is present. - 
    Tämä löytyy Index.html eli etusivulta.

2/5. HTML structure with clear content differentiation (headings, paragraphs, lists). -
    Tämä löytyy Index.html eli etusivulta.

3/5. Use of forms, links, and media.
   Tämä löytyy Index.html eli etusivulta.

4/5. Tables are effectively used.
   Tämä löytyy Index.html eli etusivulta
   
5/5. Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.
   Tämä löytyy Index.html eli etusivulta sekä about.me html eli About me sivulta.

   ------------------------------

CSS - 
1/5: Basic CSS styling (colors, fonts). -
    style.css määrittää melkein kaikille sivuille värit.
    
2/5. Use of classes and IDs to style specific elements. -
   AboutMe.css ja PenTesting.css , sivut ovat samannimisiä Nav palkissa

3/5. Implementation of responsive design elements.
   AboutMe.css sekä style.css - About me sivu reagoi kun vaihdat sivun kokoa.

4/5 Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
   AboutMe.css, PenTesting.css ja Testing.css - sivut ovat samannimisiä Nav palkissa (testing.css = test box)

5. Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.
   AboutMe.css, StockTracker.css, Index.css. Näitä sivuja kun selaa niin tulee vastaan.


-------------------------

Javascript - 
1/5. Simple interactions (like alerts on button click).
    index.html, Etusivu - Contact form -> Send nappi ja stockTrackeris alert jos yrittää ostaa kirjaimia.

2/5. Multiple event listeners and basic DOM manipulations.
    Jokaisessa JS kansiossa on yksi tai useampi, mutta eniten on Stocks.js. Tarkemmin ajastimessa, se tyhjentää osakkeet ja jos et ole tallentanut osakkeita "save" napilla niin et saa niitä takas. Mutta, se ei koske fetch toimintoon.

3/5. Use of arrays, objects, and functions.
   Stocks.j, Objects.js ja game.js . Esimerkiksi "Arrays" osakelista stock tracker sivulla, 
   "objects" on käytössä stock tracker sivulla,
      Investment class: This is a custom object you've defined to encapsulate investment information.
      Methods: display()
      Properties: name, amount

    portfolio: An array that stores instances of the Investment object.

    stockList: An array of stock information objects. Each object has a symbol and name.

    DOM Elements: You're using DOM objects like those returned from document.getElementById().

    JSON Response: You're parsing a JSON object when fetching data from the API.

    Local Storage: You're using localStorage which involves saving and fetching JSON objects.
    
      - "Functions" game.js, showmessage hyvä esimerkki, 1 functio tulostaa 3 erilaista viestiä, object.js liitteessä on monta functiota mitä objectit käyttävät.

4/5. Advanced logic, looping through data, and dynamic DOM updates.
   Stocks.js ja game.js ja Vielä varmistus esimerkki loopista Testing.js pohjalla. 
   Stock tracker sivua kun selaat niin löydät nämä kaikki.

5/5 Consistent use of Object-Oriented JavaScript principles.
   Stocks.js ja Objects.js(Objects, heritance and polyformism, tämä näkyy etusivulla grade & project linkeissä. Parent(Grades) tekee suuren osan ominaisuuksista jotka child(schoolProjects) ja grandchild(myProjects) perivät - Kuitenkin polyformismi esiintyy Child(schoolProject) kohdassa, jossa lapsi lisää togglecolor toimintoon oliivi värin palkkeihin.)


-----------------------

Asynchronous Operations - Stock Tracker sivu - Stocks.js
1/5. Use of timers.
    Stocks.js - Stock tracker sivulla Kello(Aika loppuu poistaa kaikki osakkeet mitä ei ole tallennettu) ja FetchPrice (hakee 5 minuutin välein dataa.)  ja Testing sivulla ihan alussa kellon ja päivämäärän hakeminen.

2/5. Successful implementation of an AJAX call or Fetch.
    Stocks.js - Hakee valitun pörssi osakkeen hinnan 

3/5. Data from the asynchronous call is displayed on the webpage.
    Kirjoittaa haetun osakkeen arvon nettisivulle.

4/5. Error handling is implemented (for failed API calls, etc.).
     Jos rajapinnan 5 hakua minuutissa tulee täyteen niin tulee Error kutsu tai jos ei ole nettiyhteyttä. Lisäksi Testing.js sivulla on jakoLaskuri, joka ilmoittaa kaikesta virheellisestä laskutoimituksista.

5/5 Effective use of asynchronous data to enhance user experience (like filtering, sorting).
    Haku toiminto osakkeille ja fetch toiminnon jatkaminen "Asyncilla"
    lisäksi toiminnot save, load, clear investments.

---------------------------


  Valinnaiset lisätehtävät:
HTML:
  1. Etusivu
  2. Etusivu
  3. Etusivu, Pen testing ja Mini game
  4. Etusivu
  5. Etusivu

CSS:
 1. Etusivu
 2. Erityisesti AboutMe sivu
 3. TestBox sivu
 4. AboutMe, PenTesting sivut, Stock tracker, Mini game ja Etusivu
 5. Kaikki sivut, teeman vaihtaja myös tallentaa valinnan välimuistiin

Javascript: 
  1. Test box sivulla Quizz form mut event listereitä varmaan eniten stock tracker sivulla.
  2. Text box sivulla toi kuva
  3. Etusivulla
  4. Stock tracker sivulla
  5. Etusivu ja Stock tracker
    
