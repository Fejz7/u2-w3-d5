
const nameInput = document.getElementById('name')
const descriptionInput = document.getElementById('description')
const brandInput = document.getElementById('brand')
const imageUrlInput = document.getElementById('imageUrl')

const priceInput = document.getElementById('price')

const form = document.getElementById('product-form')
const myURL = 'https://striveschool-api.herokuapp.com/api/product/'


const addressBarContent = new URLSearchParams(location.search)
console.log(addressBarContent)

const shopId = addressBarContent.get('shopId')
console.log(shopId)

if (shopId) {

  document.getElementById('form-title').innerText = 'Form di modifica'

  fetch(myURL + shopId)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(
          "non sono riuscito a trovare il prodotto"
        )
      }
    })
    .then((singleProduct) => {

      nameInput.value = singleProduct.name
      descriptionInput.value = singleProduct.description
      brandInput.value = singleProduct.brand
      imageUrlInput.value = singleProduct.imageUrl

      priceInput.value = singleProduct.price
    })
    .catch((err) => {
      console.log(err)
    })
}


form.addEventListener('submit', function (e) {
  e.preventDefault()







  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageUrlInput.value,
    price: priceInput.value,

  }

  console.log('ecco i dati raccolti dal form che sto per inviare:', newProduct)



  let URLToUse
  let methodToUse

  if (shopId) {
    methodToUse = 'PUT'
    URLToUse = myURL + shopId
  } else {
    methodToUse = 'POST'
    URLToUse = myURL
  }

  fetch(URLToUse, {
    method: methodToUse,

    body: JSON.stringify(newProduct), 
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2Y5ZTE4N2U1YzAwMTgxNGM2MWIiLCJpYXQiOjE3MDU2NTYyMjIsImV4cCI6MTcwNjg2NTgyMn0.-TQ9mZ33BE6SZaO5Gn9b7xM-mFE4-eme8NCzwDJ8pgA",

      'Content-Type': 'application/json', 
    },
  })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        
        alert('prodotto salvato')
        
        nameInput.value = ''
        descriptionInput.value = ''
        brandInput.value = ''
        imageUrlInput.value = ''
        priceInput.value = ''

      } else {
        alert('PROBLEMA NEL SALVATAGGIO!')
        
      }
    })
    .catch((err) => {
      console.log(err)
    })
})
