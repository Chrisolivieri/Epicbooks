

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    response.json()
      .then((books) => {
        console.log(books)

        let allBooks = ""

        books.forEach((item) => {
          
          let stringaJSON = JSON.stringify(item)
          let nuovaStringa = stringaJSON.replace(/'/g, "");
          
         
          allBooks += ` <div class="card" id = ` + item.asin + ` style="width: 18rem;">
                <img src= ${item.img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <button class= "btn btn-warning" onclick='aggiungiAlCarrello(${nuovaStringa})'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg> Aggiungi al carrello</button>
                  <button class= "btn btn-danger" onclick="nascondiLibro(\`` + item.asin + `\`)">Nascondi libro</button>
                  <a href="./details.html?id=${item.asin}&img=${item.img}&title=${item.title}&ctg=${item.category}&price=${item.price}"> Vedi dettagli</a>
                </div>
              </div>`
        })

        document.getElementById("books").innerHTML = allBooks

      })
  }
  )

function filtraLibri() {

  let valoreRicerca = document.getElementById("ricerca").value.toUpperCase()

  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      response.json()
        .then((books) => {
          console.log(books)

          let allBooks = ""

          books.forEach((item) => {
            let titoloUpperCase = item.title.toUpperCase()
            let includes = titoloUpperCase.includes(valoreRicerca)

            if (includes === true) {
              allBooks += ` <div class="card" id = ` + item.asin + ` style="width: 18rem;">
                  <img src= ${item.img} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <button class= "btn btn-warning" onclick='aggiungiAlCarrello(${JSON.stringify(item)})'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg> Aggiungi al carrello</button>
                    <button class= "btn btn-danger" onclick="nascondiLibro(\`` + item.asin + `\`)">Nascondi libro</button>
                    <a href="./details.html?id=${item.asin}&img=${item.img}&title=${item.title}&ctg=${item.category}&price=${item.price}">Vedi dettagli</a>
                  </div>
                </div>`
            }

            document.getElementById("books").innerHTML = allBooks

          })



        })
    }
    )

}


let carrello = []
let libriNelCarrello = 0

function aggiungiAlCarrello(libro) {
  console.log(libro)
 libro.title = libro.title.replace(/'/g, "\\'");
  carrello.push(libro)
  alert("Libro aggiunto al carrello")
  libriNelCarrello++
  aggiornaCarrello()

}
function aggiornaCarrello() {
  let div = document.getElementById("carrello")
  div.innerHTML = ""
  div.innerHTML = `<span class='badge bg-secondary'>Libri nel carrello: ${libriNelCarrello}  </span>`

  carrello.map((item) => {
    div.innerHTML += `<div class="card2" style="width: 10rem;">
    <p><b> ${item.title} </b></p>
    <img src= ${item.img} class="card-img-top" alt="...">
    <a style="text-align: center;" onclick="rimuoviDalCarrello(\`` + item.asin + `\`)"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 900.5 900.5" style="enable-background:new 0 0 900.5 900.5;" xml:space="preserve"><g><path d="M176.415,880.5c0,11.046,8.954,20,20,20h507.67c11.046,0,20-8.954,20-20V232.487h-547.67V880.5L176.415,880.5z M562.75,342.766h75v436.029h-75V342.766z M412.75,342.766h75v436.029h-75V342.766z M262.75,342.766h75v436.029h-75V342.766z" fill="#000000" style="fill: rgb(18, 150, 171);"></path><path d="M618.825,91.911V20c0-11.046-8.954-20-20-20h-297.15c-11.046,0-20,8.954-20,20v71.911v12.5v12.5H141.874 c-11.046,0-20,8.954-20,20v50.576c0,11.045,8.954,20,20,20h34.541h547.67h34.541c11.046,0,20-8.955,20-20v-50.576 c0-11.046-8.954-20-20-20H618.825v-12.5V91.911z M543.825,112.799h-187.15v-8.389v-12.5V75h187.15v16.911v12.5V112.799z" fill="#000000" style="fill: rgb(18, 150, 171);"></path></g></svg></a>
    
    </div>`
  })

}

function svuotaCarrello() {
  carrello = []
  libriNelCarrello = 0
  let div = document.getElementById("carrello")
  div.innerHTML = ""

}

function nascondiLibro(asin){
  document.getElementById(asin).style.display = "none"
}

function rimuoviDalCarrello(asin){
  let index = carrello.findIndex((item) => item.asin === asin)
  carrello.splice(index, 1)
  libriNelCarrello--
  aggiornaCarrello()

}