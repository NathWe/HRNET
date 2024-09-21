import React, { useState } from "react";
import { Select } from "../pages/StyleCreateEmployee";

type Option = {
  value: string;
  label: string;
};

interface UseSelectMenuProps {
  options: Option[];
  id: string; // Ajout de l'id
}

interface UseSelectMenu {
  selectMenuComponent: JSX.Element;
  selectedValue: string;
}

export const useSelectMenu = ({
  options,
  id,
}: UseSelectMenuProps): UseSelectMenu => {
  const [selected, setSelected] = useState<string>(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  const selectMenuComponent = (
    <Select id={id} value={selected} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );

  return { selectMenuComponent, selectedValue: selected };
};
