class PokemonElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const nameLabel = document.createElement('h1');
    nameLabel.innerText = this.getAttribute('name');
    const image = document.createElement('img');
    image.alt = this.getAttribute('name');
    image.src = this.getAttribute('image');
    this.shadowRoot.append(nameLabel, image)
  }
}

customElements.define('pokemon-element', PokemonElement)
