import React from "react";
import Carousel from "react-elastic-carousel";

interface BodyProps {
  itemDetails: {
    name: string;
    imageUrl: string;
    sprites: string[];
  };
}

const Body: React.FC<BodyProps> = ({ itemDetails }) => {
  return (
    <main>
      <h2>{itemDetails.name}</h2>
      <img src={itemDetails.imageUrl} alt={itemDetails.name} />
      <Carousel>
        {itemDetails.sprites.map((sprite, index) => (
          <img key={index} src={sprite} alt={itemDetails.name} />
        ))}
      </Carousel>
    </main>
  );
};

export default Body;
