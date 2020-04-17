import React from "react";

const SingleCard = ({ data }) => {
  return (
    <div className="SingleCard">
      <p>
        name: <span>{data.name}</span>
      </p>
      <p>
        age:<span>{data.age}</span>
      </p>
      <p>
        heigth: <span>{data.height}</span>
      </p>
      <button>remove</button>
    </div>
  );
};

export default SingleCard;
