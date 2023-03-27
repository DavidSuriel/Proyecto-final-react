import React from "react";

interface HeaderProps {
  itemCount: number;
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ itemCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <header>
      <h1>Pokémon App</h1>
      <div>
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
        <p>Items count: {itemCount}</p>
      </div>
    </header>
  );
};

export default Header;
