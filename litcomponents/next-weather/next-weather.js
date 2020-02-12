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
    
    console.log("render");

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

  performUpdate(){
    console.log("performUpdate");
    const result = super.performUpdate();
    console.log("performUpdate result "+result);
    return result;
  }

  update(args){
    console.log("update with args", args);
    const result = super.update();
    console.log("update result "+result);
    return result;
  }

  /*
  shouldUpdate(){
    console.log("shouldUpdate");
    const result = super.shouldUpdate();
    return result;
  }
  */

  shouldUpdate(changedProperties) {
    console.log("shouldUpdate properties changed ");
    changedProperties.forEach((oldValue, propName) => {
      console.log(`\t ${propName} changed. oldValue: ${oldValue}`);
    });
    const result = super.shouldUpdate(changedProperties);
    return result;
  }

}

customElements.define('next-weather', NextWeather);