import React from "react";

export interface Pokemon {
  name: string;
  url: string;
}


interface SidebarProps {
  items: Pokemon[];
  onItemClick: (item: Pokemon) => Promise<void>;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onItemClick }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.name} onClick={() => onItemClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

