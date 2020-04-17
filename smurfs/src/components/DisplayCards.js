import React from "react";
import SingleCard from "./SingleCard";

const DisplayCards = ({ data, removeSmurf }) => {
  return (
    <div className="DisplayCard">
      {data.map((item) => (
        <SingleCard
          key={item.id}
          data={item}
          removeSmurf={() => removeSmurf(item.id)}
        />
      ))}
    </div>
  );
};

export default DisplayCards;
