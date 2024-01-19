




const addressBarContent = new URLSearchParams(location.search)
console.log(addressBarContent)

const shopId = addressBarContent.get('shopId')
console.log(shopId)



const myURL = 'https://striveschool-api.herokuapp.com/api/product/'
fetch("https://striveschool-api.herokuapp.com/api/product/" + shopId, {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2Y5ZTE4N2U1YzAwMTgxNGM2MWIiLCJpYXQiOjE3MDU2NTYyMjIsImV4cCI6MTcwNjg2NTgyMn0.-TQ9mZ33BE6SZaO5Gn9b7xM-mFE4-eme8NCzwDJ8pgA"
}
})

  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore nella chiamata')
    }
  })
  .then((singleProduct) => {
    console.log(singleProduct)

    document.getElementById('name').innerText = singleProduct.name
    document.getElementById('description').innerText = singleProduct.description
    document.getElementById('brand').innerText = singleProduct.brand
    document.getElementById('imageUrl').innerText = singleProduct.imageUrl
    document.getElementById('price').innerText = singleProduct.price + '€' //TypeError: Cannot set properties of null (setting 'innerText')


    document.getElementById('delete').addEventListener('click', function () {

      fetch("https://striveschool-api.herokuapp.com/api/product/" + shopId, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2Y5ZTE4N2U1YzAwMTgxNGM2MWIiLCJpYXQiOjE3MDU2NTYyMjIsImV4cCI6MTcwNjg2NTgyMn0.-TQ9mZ33BE6SZaO5Gn9b7xM-mFE4-eme8NCzwDJ8pgA"
        }
        , 
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {

            alert('cancellato!')
            const cardToRemove = document.getElementById('card-');
      if (cardToRemove) {
        cardToRemove.remove();}
        card.id = 'card-' + singleProduct._id;
            location.assign('./index.html') 
          } else {
            alert('problema nella cancellazione')
            throw new Error('errore nella cancellazione')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    })


    document
      .getElementById('edit')
      .setAttribute('href', './backoffice.html?shopId=' + singleProduct._id)
  })
  .catch((err) => {
    console.log(err)
  })


