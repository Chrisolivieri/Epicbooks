

fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) =>{
        response.json()
        .then((books) =>{
            console.log(books)

            let allBooks = ""

            books.forEach((item)=>{
                allBooks += ` <div class="card" style="width: 18rem;">
                <img src= ${item.img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">Category: ${item.category}</p>
                  <a href="#" class="btn btn-primary">Aggiungi al carrello</a>
                </div>
              </div>  `
            })

            document.getElementById("books").innerHTML = allBooks
            
        })
    }
)

function filtraLibri(){

  let valoreRicerca = document.getElementById("ricerca").value.toUpperCase()

  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) =>{
        response.json()
        .then((books) =>{
            console.log(books)

            let allBooks = ""

            books.forEach((item)=>{
               let titoloUpperCase = item.title.toUpperCase()
                let includes = titoloUpperCase.includes(valoreRicerca)
                
                if(includes === true){
                  allBooks += ` <div class="card" style="width: 18rem;">
                  <img src= ${item.img} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Category: ${item.category}</p>
                    <a href="#" class="btn btn-primary">Aggiungi al carrello</a>
                  </div>
                </div>  `
                }

                document.getElementById("books").innerHTML = allBooks
                
            })

            
            
        })
    }
)
  
}

