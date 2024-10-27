import { LitElement, html, css } from "lit";
export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.width= '240px';
    this.height = '240px';
    this.altData="";
    this.secondaryOwner='Unknown'


  }
  openImage(){
    window.open(`${this.source}`,'_blank');
  }
  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        width: {type: String},
        height: {type: String},
        altData: {type: String},
        secondaryOwner: {type: String},
    };
  }

  static get styles() {
    return [css`




      .image-container {
        background-color: #2b2a2a;
        width: 240px;
        height: 420px;
        max-height: 325px;
        border-radius: 8px;
        transition: background-color 0.3s ease, transform 0.3s ease;
        justify-content: space-evenly;
        display:inline-block;
        overflow: hidden;

      }

      .image-container:hover {
        background-color: lightblue;
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: 160px;
        border-radius: 5px;
        margin-right: 10px;
      }

      #image_title {

        font-family: sans-serif;
        padding: 20px;

      }
      #ownership{
        padding-bottom: 0;
      }
      .text-container {
        width: 220px;
        height: 75px;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-family: sans-serif;
        text-align: center;
        overflow: hidden;
        transition: font-size 0.3s ease;
        font-size: 16px;
        display: inline-block;

      }
      nasa-image{
        padding: 20px;
      }

    `];
  }


  render() {
    return html`
    <div class="image-container"
         @click="${this.openImage}"
      <div class="image">
        <div class="text-container">
            <div class="image" id="image_title"><strong></strong>${this.title}</strong></div>
        </div>
          <img src="${this.source}" alt="${this.altData}" loading = "${this.loading ? 'eager' : 'lazy'}" />
        <div class="text-container" id="ownership">
          <p><strong>Owner:</strong></p>
        </div>
      </div>
    </div>

    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);
