import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() cards: Array<any> = [];

  componentWillLoad() {
    for(let i = 0; i < 40; i++) {
      this.cards.push(<card-component />);
    }
  }

  render() {

    return(
      <div class="grid">
        {this.cards.map((card) => 
          card 
        )}
      </div>
    )
  }
}
