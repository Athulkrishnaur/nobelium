
import React from 'react';


const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="card-img" />
      <div className="card-info">
        <h2 className="card-name">{props.name}</h2>
        <p className="card-designation">{props.designation}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;

