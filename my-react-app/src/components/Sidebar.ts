import React from "react";

interface SidebarProps {
  items: string[];
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onItemClick }) => {
  const handleItemClick = (item: string) => {
    onItemClick(item);
  };

  return (
    <aside>
      <h2>Items List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
