import React from 'react';
import Card from './Card';

const CardList = ({ poemData }) => {
  console.log(poemData);
  return (
    <>
      {poemData.map((writing, i) => {
        return (
          <Card
            key={poemData[i].id}
            id={poemData[i].id}
            title={poemData[i].title}
            category={poemData[i].category}
            image={poemData[i].image}
          />
        );
      })}
    </>
  );
};

export default CardList;
