mport React from "react";
import axios from "axios";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Footer from "./components/Footer";

interface Pokemon {
  name: string;
  url: string;
}

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
  const [items, setItems] = React.useState<Pokemon[]>([]);
  const [itemDetails, setItemDetails] = React.useState<PokemonDetails>({
    name: "",
    imageUrl: "",
    sprites: { front_default: "" },
  });

  const handleSearch = (searchTerm: string) => {
    fetchData(`pokemon?limit=1000&offset=0`)
      .then((data) => {
        const filteredItems = data.results.filter((item: { name: string | string[]; }) =>
          item.name.includes(searchTerm.toLowerCase())
        );
        setItems(filteredItems);
      })
      .catch((error) => console.error(error));
  };

  const handleItemClick = (item: Pokemon) => {
    fetchData(item.url)
      .then((data) => {
        setItemDetails({
          name: data.name,
          imageUrl: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
          sprites: data.sprites,
        });
      })
      .catch((error) => console.error(error));
  };

  const fetchData = async (endpoint: string) => {
    const response = await axios.get(`${POKEAPI_BASE_URL}${endpoint}`);
    return response.data;
  };

  return (
    <div>
      <Header itemCount={items.length} onSearch={handleSearch} />
      <Sidebar items={items} onItemClick={handleItemClick} />
      <Body itemDetails={itemDetails} />
      <Footer />
    </div>
  );
};

export default App;
