import { Component, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent {

  render() {
    return (
      <div class="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkvvDuPwAFgQLKpGTOcgAAAABJRU5ErkJggg==" alt="" width="300" height="174"></img>
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
    );
  }
}
