const Main = document.getElementById("main");

fetch('src/data/data.json') //all the 'fetch' part is to use the data.json data
  .then(risposta => risposta.json()) 
  .then(dati => {
    console.log(dati); 

    function CreateMainPage() {

      const main = document.createElement('div')
      main.setAttribute('id', 'Main')
      main.classList.add('Main')
      Main.appendChild(main)
      
    for(let i = 0; i < Object.keys(dati.Lombardia).length; i++) {
      

      
      const DataDiv = document.createElement('div');
      DataDiv.setAttribute('id', `${i + 1}`)
      DataDiv.classList.add('DivDati')
      main.appendChild(DataDiv) 

      const DataDivTitle = document.createElement('h2')
      DataDivTitle.setAttribute('id', `Titolo${i + 1}`)
      DataDivTitle.classList.add('TitoloDivDati')
      DataDiv.appendChild(DataDivTitle)

      const City = dati.Lombardia[i + 1];
      DataDivTitle.innerText = City.nome;

      const DataDivSubTitle = document.createElement('p');
      DataDivSubTitle.setAttribute('id', `SottoTitolo${i + 1}`)
      DataDivSubTitle.classList.add('SottoTitoloDivDati')
      DataDiv.appendChild(DataDivSubTitle)

      DataDivSubTitle.innerText = 'pop.' + City.abitanti
    }
    }

    CreateMainPage()

    document.querySelectorAll(".DivDati").forEach(DivDati => {
      
      DivDati.addEventListener('click', function PopUp(event) {
        let id = event.target.id
        const City = dati.Lombardia[id];
        
        const MainConst = document.querySelector(".Main");
        MainConst.remove();

        const NewPopUp = document.createElement('div')
        
      })
    }) 
      
  })

    
  

