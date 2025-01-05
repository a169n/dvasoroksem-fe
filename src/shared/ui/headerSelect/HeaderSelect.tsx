import { useState } from "react";
import "./headerSelect.css"; // Include the styles

export const HeaderSelect = ({ value, onChange, options, sx = {}, mode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div
      className={`my-select-container ${
        mode === "dark" ? "dark-mode" : mode === "light" ? "light-mode" : ""
      }`}
      style={sx}
    >
      <div
        className="my-select-header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {options.find((option) => option.value === value)?.label || "Select"}
      </div>
      {isOpen && (
        <ul className="my-select-options">
          {options
            .filter((option) => option.value !== value)
            .map((option) => (
              <li
                key={option.value}
                className="my-select-option"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
