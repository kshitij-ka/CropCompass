import React from "react";

const LanguageSwitcher = ({ currentLanguage, onChangeLanguage }) => (
  <select value={currentLanguage} onChange={e => onChangeLanguage(e.target.value)}>
    <option value="en">English</option>
    <option value="hi">Hindi (हिंदी)</option>
    <option value="mr">Marathi (मराठी)</option>
    <option value="fr">French (Français)</option>
    {/* Add more languages as needed */}
  </select>
);

export default LanguageSwitcher;
