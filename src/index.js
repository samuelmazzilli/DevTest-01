import { CreateMainPage } from "./MainPage.js";
fetch('src/data/data.json')
  .then(risposta => risposta.json()) 
  .then(dati => {
    const Main = document.getElementById("main");
    console.log(dati); 
    CreateMainPage(dati);

    document.getElementById("SearchBtn").addEventListener("click", function search() {
      let Removed = 0
      for(let i2 = 0; i2 < Object.keys(dati.Lombardia).length; i2++) {
        let query = document.getElementById("SearchBar").value
        let r = query.toLowerCase()

        if(document.getElementById(`Titolo${i2+1}`).innerText.toLowerCase().includes(r)) {
          document.getElementById(`${i2+1}`).style.display = "block"
          
      } else {
          document.getElementById(`${i2+1}`).style.display = "none"
          Removed = Removed + 1

      }

      const NoContent = document.createElement('p')
      if(Removed >= Object.keys(dati.Lombardia).length) {
        NoContent.innerText = "Nessun contenuto corrispondente alla tua ricerca"
        NoContent.setAttribute("id", "NoContent")
        Main.appendChild(NoContent)
        Removed = 0
      } else {
        if(document.getElementById("NoContent")) {
          document.getElementById("NoContent").remove()
        }
      }
      }
      
    })
  });