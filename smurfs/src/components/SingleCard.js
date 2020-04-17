import React from "react";

const SingleCard = ({ data }) => {
  return (
    <div className="SingleCard">
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.height}</p>
    </div>
  );
};

export default SingleCard;
