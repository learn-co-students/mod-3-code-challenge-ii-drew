const Beer = (function() {
  return class Beer {
    constructor(json) {
      this.id = json.id,
      this.name = json.name,
      this.tagline = json.tagline,
      this.description = json.description,
      this.url = json.image_url
    }

    renderTitle() {
      let li = document.createElement('li')
      li.setAttribute("class", "list-group-item")
      li.setAttribute("onclick", `App.beerDetails(event, ${this.id})`)
      li.innerText = this.name
      return li
    }

    renderFullDetails() {
      let div = document.createElement("div")
      let h1 = document.createElement('h1')
      h1.innerText = this.name
      let img = document.createElement('img')
      img.setAttribute("src", this.url)
      let h3 = document.createElement('h3')
      h3.innerText = this.tagline
      let textarea = document.createElement('textarea')
      textarea.setAttribute("id", "updateInfo")
      textarea.setAttribute("placeholder", this.description)
      let button = document.createElement('button')
      button.setAttribute("id", "edit-beer")
      button.setAttribute("class", "btn btn-info")
      button.setAttribute("onclick", `App.updateDescription(event, ${this.id})`)
      button.innerText = "Save"
      div.append(h1)
      div.append(img)
      div.append(h3)
      div.append(textarea)
      div.append(button)
      return div
    }
  }
})();
