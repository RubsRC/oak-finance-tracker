// src/components/CreditCards.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function CreditCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("/api/credit-cards").then((response) => setCards(response.data));
  }, []);

  return (
    <div>
      <h2>Credit Cards</h2>
      <ul>
        {cards.map((card) => (
          <li key={card._id}>
            {card.name}: ${card.balance} (Due: {card.dueDate})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreditCards;
