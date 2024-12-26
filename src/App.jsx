import eglen from '/Eglen.png'
import robina from '/Robina.png'
import stri from '/Stri.png'
import toccan from '/Toccan.png'
import './App.css'
import Card from './Card.jsx'
import { useState } from 'react'

function App() {
  const [cardStates, setCardStates] = useState(Array(8).fill(false));

  function reset() {
    setCardStates(Array(8).fill(false));
  }

  function toggleCard(index) {
    setCardStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  }

  const cards = [
    { name: "Robina", image: robina },
    { name: "Eglen", image: eglen },
    { name: "Stri", image: stri },
    { name: "Toccan", image: toccan }
  ];

  return (
    <>
      <button onClick={reset}>Reset</button>
      <div className="rows-container">
        <div className="row">
          <span className="row-label">Effet</span>
          <div className="cards-container">
            {cards.map((card, index) => (
              <Card 
                key={`card1-${index}`}
                name={card.name} 
                image={card.image}
                used={cardStates[index]}
                onToggle={() => toggleCard(index)}
              />
            ))}
          </div>
        </div>
        <div className="row">
          <span className="row-label">Float</span>
          <div className="cards-container">
            {cards.map((card, index) => (
              <Card 
                key={`card2-${index}`}
                name={card.name} 
                image={card.image}
                used={cardStates[index + 4]}
                onToggle={() => toggleCard(index + 4)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App