const template = document.createElement("template");
template.innerHTML = `
<div class="card">
<img class="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkvvDuPwAFgQLKpGTOcgAAAABJRU5ErkJggg==" alt="" width="300" height="174" />
<p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
<form>
    <label>First name:</label><br />
    <input type="text" id="fname" name="fname" /><br />
    <label>Last name:</label><br />
    <input type="text" id="lname" name="lname" /><br />

    <button type="reset">Reset</button>
    <button type="submit">Send</button>
</form>
</div>
  <style>
  .card {
    width: 300px;
    color: #000000;
    display: grid;
    font-size: 20px;
    box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0.3px 0.9px rgba(0, 0, 0, 0.11);
    background: #FFFFFF;
    font-family: Georgia;
    grid-template-rows: 174px 176px;
    grid-template-columns: 1fr;
  }
  
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .text {
    margin: 8px 16px;
    overflow: hidden;
    max-height: 160px;
    line-height: 28px;
  }
   </style>`;

customElements.define("card-component", class extends HTMLElement {   
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  
});