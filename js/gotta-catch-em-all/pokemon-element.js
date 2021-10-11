class PokemonElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const nameLabel = document.createElement('h1');
    nameLabel.innerText = this.getAttribute('name');
    const image = document.createElement('img');
    image.alt = this.getAttribute('name');
    image.src = this.getAttribute('image');
    const container = document.createElement('div');
    container.appendChild(image);
    container.appendChild(nameLabel);
    const style = document.createElement('style');
    style.innerText = `
    div{
      background-image: url("template.png");
      width: 200px;
      height: 280px;
      display: block;
      position: relative;
    }

    div img{
      position: absolute;
      top: 50px;
      left: 50px;
    }
    
    div h1{
      font-size: 20px;
      font-weight: 400;
      width: 200px;
      bottom: 80px;
      position: absolute;
      text-align: center;
      color: white;
      text-transform: uppercase;
    }
    `
    this.shadowRoot.append(container, style)
  }
}

customElements.define('pokemon-element', PokemonElement)
