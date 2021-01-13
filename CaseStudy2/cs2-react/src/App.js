import './App.css';

function App() {
  let cards = [];
  for (let i = 0; i < 100; i++) {
    cards.push(<card-component></card-component>)
  }
  return (
    <div className="grid">{cards}</div>
  );
}

export default App;
