import './App.css';
import Card from './Card';

function App() {
  let cards = [];
  for (let i = 0; i < 100; i++) {
    cards.push(<Card />)
  }
  return (
    <div className="grid">{cards}</div>
  );
}

export default App;
