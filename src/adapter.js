const Adapter = (function() {
  const BASEURL = 'http://localhost:3000/beers'
  return class Adapter {
    static getBeer() {
      return fetch(BASEURL)
      .then(res => res.json())
    }

    static updateBeer(id, update){
      return fetch(`${BASEURL}/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          description: update
        })
      }).then(res => res.json())
    }
  }
})();
