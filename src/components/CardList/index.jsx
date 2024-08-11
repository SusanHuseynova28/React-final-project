import React from "react";
import Card from "../Card";

const CardList = ({ cards }) => {
  console.log(cards, "salam");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 mb-10 h-[10rem]">
      {cards && cards.length > 0 ? (
        cards.map((card) => <Card key={card.id} card={card} />)
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CardList;
