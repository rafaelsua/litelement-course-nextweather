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
    this.temperature = 3;
  }
}

customElements.define('next-weather', NextWeather);