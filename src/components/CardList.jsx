// src/components/CardList.jsx
import React from 'react';

const CardList = () => {
  // Example static data
  const cards = [
    { id: 1, title: "Card One", description: "This is the first card." },
    { id: 2, title: "Card Two", description: "This is the second card." },
    { id: 3, title: "Card Three", description: "This is the third card." },
  ];

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {cards.map((card) => (
        <div key={card.id} style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          width: '200px',
          backgroundColor: '#f9f9f9',
        }}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
