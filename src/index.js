import { CreateMainPage } from "./MainPage.js";
fetch('src/data/data.json')
  .then(risposta => risposta.json()) 
  .then(dati => {
    console.log(dati); 
    CreateMainPage(dati);

    document.getElementById("SearchBtn").addEventListener("click", function search() {
      for(let i2 = 0; i2 < Object.keys(dati.Lombardia).length; i2++) {
        let query = document.getElementById("SearchBar").value
        if(document.getElementById(`Titolo${i2+1}`).innerText.includes(query)) {
          document.getElementById(`${i2+1}`).style.display = "block"
          
      } else {
          document.getElementById(`${i2+1}`).style.display = "none"
      }
      }
    })
  });