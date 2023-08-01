import React from "react";

const typeColors = {
  fire: "#FF4D00",
  water: "#0078D7",
  bug: "#8CBF26",
  flying: "#00BFFF",
  electric: "#FFD700",
  normal: "#BFBFBF",
  poison: "#B4009E",
};

const Pokecard = ({ id, name, type, base_experience }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const cardStyle = {
    backgroundColor: typeColors[type] || "#f7f7f7", // Use default color #f7f7f7 if type color is not defined
  };

  return (
    <div className="Pokecard" style={cardStyle}>
      <h3>{name}</h3>
      <img src={imgUrl} alt={name} />
      <p>Type: {type}</p>
      <p>Base Experience: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
