

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    response.json()
      .then((books) => {
        console.log(books)

        let allBooks = ""

        books.forEach((item) => {
          allBooks += ` <div class="card" style="width: 18rem;">
                <img src= ${item.img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">Category: ${item.category}</p>
                  <a href="#" class= "btn btn-warning" onclick='aggiungiAlCarrello(${JSON.stringify(item)})'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg> Aggiungi al carrello</a>
                </div>
              </div>  `
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
              allBooks += ` <div class="card" style="width: 18rem;">
                  <img src= ${item.img} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Category: ${item.category}</p>
                    <a href="#" class= "btn btn-warning" onclick='aggiungiAlCarrello(${JSON.stringify(item)})'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg> Aggiungi al carrello</a>
                  </div>
                </div>  `
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
  carrello.push(libro)
  alert("Libro aggiunto al carrello")
  aggiornaCarrello()

}
function aggiornaCarrello() {
  let div = document.getElementById("carrello")
  div.innerHTML = ""
  libriNelCarrello++
  div.innerHTML = `<span class='badge bg-secondary'>Libri nel carrello: ${libriNelCarrello}  </span>`


  carrello.map((item) => {
    div.innerHTML += `<div class="card2" style="width: 10rem;">
    <p><b> ${item.title} </b></p>
    <img src= ${item.img} class="card-img-top" alt="...">
    </div>`
  })

}

function svuotaCarrello() {
  carrello = []
  libriNelCarrello = 0
  let div = document.getElementById("carrello")
  div.innerHTML = ""

}