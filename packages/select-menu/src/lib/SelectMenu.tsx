import React, { useState } from "react";
import "./select-menu.css";

type Option = {
  value: string;
  label: string;
};

interface SelectMenuProps {
  options: Option[];
  onSelect: (value: string) => void;
  id: string; // Ajout de la propriété id
}

const SelectMenu: React.FC<SelectMenuProps> = ({ options, onSelect, id }) => {
  const [selected, setSelected] = useState<string>(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="select-menu-container">
      <select id={id} value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
