

const generateCards = function (arrayOfItems) {

  arrayOfItems.forEach((product) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col', 'col-12', 'col-md-4', 'col-lg-3')
    newCol.innerHTML = `
        <div id="card1" class="card h-100">
            <img src="https://i.ebayimg.com/images/g/dLUAAOSw-S1kAr9k/s-l1200.jpg" class="card-img-top img-fluid" alt="...">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text flex-grow-1">${product.description}</p>
                <p class="card-text flex-grow-1">${product.brand}</p>
                <p class="card-text flex-grow-1">${product.imageUrl}</p>
                
                
                <a href="#" class="btn btn-primary"><i class="bi bi-cart-check me-2"></i>${
                  product.price || '?'
                }€</a>
                <a href="./details.html?shopId=${
                  product._id
                }" class="btn btn-success mt-2"><i class="bi bi-caret-right"></i></i>
                 VAI AI DETTAGLI 
                </a>
            </div>
        </div>
        `
    
    const eventsRow = document.getElementById('events-row')
    eventsRow.appendChild(newCol)
  })
}



const getItemsShop = function () {
  const myURL = 'https://striveschool-api.herokuapp.com/api/product/'

  fetch('https://striveschool-api.herokuapp.com/api/product/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2Y5ZTE4N2U1YzAwMTgxNGM2MWIiLCJpYXQiOjE3MDU2NTYyMjIsImV4cCI6MTcwNjg2NTgyMn0.-TQ9mZ33BE6SZaO5Gn9b7xM-mFE4-eme8NCzwDJ8pgA',
    },
  })
    .then((response) => {

      console.log('response', response)
      if (response.ok) {

        return response.json()
      } else {
       
        throw new Error('errore nella chiamata')
      }
    })
    .then((data) => {
      console.log('DATA', data)
      
      
      generateCards(data)
    })
    .catch((err) => {
    
      console.log(err)
    })
}

getItemsShop()
