const App = (function() {
  return class App {
    static init() {
      console.log("I'm in the app")
      App.getBeerTitles()
    }

    static getBeerTitles() {
      let beerTitleContainer = document.getElementById('list-group')
      Adapter.getBeer()
      .then(data => {
        data.forEach(beer => {
          let newBeerTitle = new Beer(beer)
          beerTitleContainer.append(newBeerTitle.renderTitle())
        })
      })
    }

    static beerDetails(event, id) {
      event.preventDefault()
      let beerDetailsContainer = document.getElementById('beer-detail')
      beerDetailsContainer.innerHTML = " "
      Adapter.getBeer()
      .then(data => {
        let requestedBeer = data.find(beer => {return beer.id === id})
        let requestedBeerInstance = new Beer(requestedBeer)
        beerDetailsContainer.append(requestedBeerInstance.renderFullDetails())
      })
    }

    static updateDescription(event, id) {
      event.preventDefault()
      let beerDetailsContainer = document.getElementById('beer-detail')
      let update = document.getElementById('updateInfo').value
      Adapter.updateBeer(id, update)
      .then(data => {
        let updatedBeer = new Beer(data)
        beerDetailsContainer.innerHTML = " "
        beerDetailsContainer.append(updatedBeer.renderFullDetails())

      })
    }
  }
})();
