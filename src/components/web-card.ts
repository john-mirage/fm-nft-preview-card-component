import WebLightbox from "@components/web-lightbox";

class WebCard extends HTMLElement {
  webLightbox: WebLightbox;
  buttonElement: HTMLButtonElement;

  constructor() {
    super();
    this.webLightbox = <WebLightbox>document.createElement("aside", { is: "web-lightbox" });
    this.buttonElement = <HTMLButtonElement>this.querySelector("#lightbox-button");
    this.toggleLightbox = this.toggleLightbox.bind(this);
  }

  connectedCallback() {
    this.buttonElement.addEventListener("click", this.toggleLightbox);
  }

  disconnectedCallback() {
    this.buttonElement.removeEventListener("click", this.toggleLightbox);
  }

  toggleLightbox() {
    if (this.webLightbox.isConnected) {
      this.webLightbox.closeLightbox();
    } else {
      document.body.style.overflow = "hidden";
      this.after(this.webLightbox);
    }
  }
}

export default WebCard;