import React from "react";
import Header from "./Header";
import Body from "./Body";

interface PokemonDetails {
  name: string;
  imageUrl: string;
  sprites: {
    front_default: string;
  }[];
}

const PokemonList: React.FC = () => {
  const [itemDetails, setItemDetails] = React.useState<PokemonDetails[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  React.useEffect(() => {
    // Make a request to fetch the Pokemon list and update the `itemDetails` state accordingly
  }, [searchTerm]);

  return (
    <>
      <Header itemCount={itemDetails.length} onSearch={handleSearch} />
      {itemDetails.map((details, index) => (
        <Body key={index} itemDetails={details} />
      ))}
    </>
  );
};

export default PokemonList;
