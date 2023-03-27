import React, { useMemo, useCallback } from "react";
import axios from "axios";
import Header from "./components/Header";
import Sidebar, { Pokemon } from "./components/Sidebar";
import Body from "./components/Body";
import Footer from "./components/Footer";

interface Sprite {
  front_default: string;
}

interface PokemonDetails {
  name: string;
  imageUrl: string;
  sprites: Sprite;
}

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [pokemonData, setPokemonData] = React.useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = React.useState<PokemonDetails | null>(null);

  const filteredPokemonData = useMemo(() => {
    return pokemonData.filter((item) => item.name.includes(searchTerm.toLowerCase()));
  }, [pokemonData, searchTerm]);

  const handleSearch = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);
  }, []);

  const handleItemClick = useCallback(async (item: Pokemon) => {
    const response = await axios.get(item.url);
    const data = response.data;
    setSelectedPokemon({
      name: data.name,
      imageUrl: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
      sprites: data.sprites,
    });
  }, []);

  const fetchPokemonData = useCallback(async () => {
    const response = await axios.get(`${POKEAPI_BASE_URL}pokemon?limit=1000&offset=0`);
    const data = response.data;
    setPokemonData(data.results);
  }, []);

  React.useEffect(() => {
    fetchPokemonData();
  }, [fetchPokemonData]);

  return (
    <div>
      <Header itemCount={filteredPokemonData.length} onSearch={handleSearch} />
      <Sidebar items={filteredPokemonData} onItemClick={handleItemClick} />
      <Body itemDetails={selectedPokemon} />
      <Footer />
    </div>
  );
};

export default App;


