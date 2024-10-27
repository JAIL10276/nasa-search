import { LitElement, html, css } from 'lit';
import "./nasa-image.js";

export class ImageOperations extends LitElement{
  static get properties() {
    return {
      element: {type: String},
    };
  }

  constructor() {
    super();
    this.element=document.querySelector('nasa-image');

  }


}
