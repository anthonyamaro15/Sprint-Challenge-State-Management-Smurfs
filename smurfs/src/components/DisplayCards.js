import React from "react";
import SingleCard from "./SingleCard";

const DisplayCards = ({ data }) => {
  return (
    <div className="DisplayCard">
      {data.map((item) => (
        <SingleCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default DisplayCards;
