import React from "react";
import Carousel from "react-elastic-carousel";
import PokemonList from "./PokemonList";

interface Sprite {
  front_default: string;
}

interface PokemonDetails {
  name: string;
  imageUrl: string;
  sprites: Sprite[];
}

interface BodyProps {
  itemDetails:  PokemonList;
}

const Body: React.FC<BodyProps> = ({ itemDetails }) => {
  const { name = "", imageUrl = "", sprites = [] } = itemDetails || {};

  return (
    <main>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} style={{ shapeOutside: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
      <Carousel>
        {sprites.map((sprite, index) => (
          <img key={index} src={sprite.front_default} alt={name} />
        ))}
      </Carousel>
    </main>
  );
};

export default Body;
