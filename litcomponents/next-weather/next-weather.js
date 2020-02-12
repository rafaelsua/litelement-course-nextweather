import {LitElement, html} from 'lit-element';

class NextWeather extends LitElement {

  static get properties() {
    return {
      temperature: {type: Number},
      unit: {type: String},
      city: {type: String},
      debug: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.temperature = 10;
    this.unit = 'C';
    this.city = 'Madrid';
    this.debug = true;
  }

  render() {
    return html`
      <h1>${this.temperature}º ${this.unit}</h1>
      <h3>Ahora, en ${this.city}.</h3>
      <button @click=${this.onClickButton}>Actualizar</button>
    `;
  }

  log(mesage) {
    if (this.debug) {
      console.log(mesage);
    }
  }

  onClickButton() {
    this.updateTemperatureData();
    this.log('Button clicked!');
  }

  updateTemperatureData() {
    this.temperature = Math.floor(Math.random() * (40 - 10) -10);
  }
}

customElements.define('next-weather', NextWeather);