import React from "react";

const LanguageSwitcher = ({ currentLanguage, onChangeLanguage }) => (
  <select value={currentLanguage} onChange={e => onChangeLanguage(e.target.value)}>
    <option value="en">English</option>
    <option value="fr">Français</option>
    {/* Add more languages as needed */}
  </select>
);

export default LanguageSwitcher;
