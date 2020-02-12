import {LitElement, html} from 'lit-element';

class NextWeather extends LitElement {

  static get properties() {
    return {
      temperature: {type: Number},
      unit: {type: String},
      location: {type: Object}      
    };
  }

  constructor() {
    super();
    this.temperature = 10;
    //this.unit = 'C';
    this._unit = 'C';
    this.debug = true;
    this.location = { city: 'Colmenar Viejo', community: 'Madrid' };
  }

  set unit(value){
    if(this._unit == value){
      return;
    }

    if(value === 'C' || value === 'F'){
      const oldValue = this._unit;
      this._unit = value;
      this.requestUpdate('unit', oldValue);
    }
  }
  
  get unit(){
    return this._unit;
  }

  render() {
    
    console.log("render");

    return html`
      <h1>${this.temperature}º ${this.unit}</h1>
      <h3>Ahora, en ${this.location.city}.</h3>
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