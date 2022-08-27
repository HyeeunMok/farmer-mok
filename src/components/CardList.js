import React from 'react';
import Card from './Card';

const CardList = ({ writings }) => {
  return (
    <div>
      {writings.map((writing, i) => {
        return (
          <Card
            key={writings[i].id}
            id={writings[i].id}
            title={writings[i].id}
            category={writings[i].id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
