const main = document.getElementById("main");

fetch('src/data/data.json') //all the 'fetch' part is to use the data.json data
  .then(risposta => risposta.json()) 
  .then(dati => {
    console.log(dati); 
    for(let i = 0; i < Object.keys(dati.Lombardia).length; i++) {
      
      const DataDiv = document.createElement('div');
      DataDiv.setAttribute('id', `DivDati${i + 1}`)
      DataDiv.classList.add('DivDati')
      main.appendChild(DataDiv) 

      const DataDivTitle = document.createElement('h2')
      DataDivTitle.setAttribute('id', `Titolo${i + 1}`)
      DataDivTitle.classList.add('TitoloDivDati')
      DataDiv.appendChild(DataDivTitle)

      DataDiv.innerText = (dati.Lombardia)
    }
  });

