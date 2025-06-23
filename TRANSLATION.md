# Translation

This is a guide for translation. Thank you for helping us make our platform accessible in more languages!  

---

## Table of Contents

- [1. Files to Modify](#1-files-to-modify)
- [2. Step-by-Step Instructions](#2-step-by-step-instructions)
- [3. Translation Key Naming](#3-translation-key-naming)
- [4. Testing Your Translation](#4-testing-your-translation)
- [5. Submitting Your Contribution](#5-submitting-your-contribution)
- [6. Tips for Quality Translations](#6-tips-for-quality-translations)
- [7. FAQ](#7-faq)

---

## 1. Files to Modify

To contribute a new language or update an existing one, you **must** modify the following files:

- **Frontend/src/App.jsx**  
  Update the language dropdown to include your language.
- **Frontend/src/LanguageSwitcher.jsx**  
  Add your language to the dropdown options.
- **Frontend/src/locales/lang.json**  
  (Replace `lang.json` with your language code, e.g. `es.json` for Spanish.)  
  Add or edit the translation file for your language.
- **Frontend/src/service/translation.js**  
  Import your language file and register it in the `translations` object.

---

## 2. Step-by-Step Instructions

### **A. Add Your Language to the Dropdown**

#### In `App.jsx`:
```jsx
function LanguageSwitcher({ language, setLanguage }) {
  return (
     {
        setLanguage(e.target.value);
        localStorage.setItem("language", e.target.value);
      }}
      className="absolute top-2 right-2 p-1 rounded border"
      aria-label="Select language"
    >
      English
      Hindi (हिंदी)
      Marathi (मराठी)
      Français
      {/* Add your language here, e.g.: */}
      Español
    
  );
}
```

#### In `Frontend/src/LanguageSwitcher.jsx`:
```jsx
const LanguageSwitcher = ({ currentLanguage, onChangeLanguage }) => (
   onChangeLanguage(e.target.value)}>
    English
    Hindi (हिंदी)
    Marathi (मराठी)
    French (Français)
    {/* Add your language here, e.g.: */}
    Español
  
);
```

---

### **B. Add or Update Your Language File**

- **File location:** `Frontend/src/locales/`
- **File name:** Use your language code, e.g. `es.json` for Spanish.
- **How:**  
  - Copy `en.json` as a template.
  - **Do not change the keys!** Only translate the values.

**Example (`es.json`):**
```json
{
  "login_button": "Iniciar sesión",
  "signup_heading": "Registrarse",
  "...": "..."
}
```

---

### **C. Register Your Language in the Translation Loader**

In `Frontend/src/service/translation.js`:

```js
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import mr from '../locales/mr.json';
import fr from '../locales/fr.json';
import es from '../locales/es.json'; //  {
  return translations[lang][key] || key; // Fallback to key if missing
};
```

---

## 3. Translation Key Naming

- **Keys** must remain unchanged and in English (snake_case).
- **Only translate the values**.

---

## 4. Testing Your Translation

1. **Switch the app** to your language using the dropdown.
2. **Browse all screens** and ensure all text is translated and displays correctly.
3. If you see any untranslated keys, add them to your language file.

---

## 5. Submitting Your Contribution

- **Commit your changes** to the files listed above.
- **Open a pull request** with a clear title, e.g.  
  `Add Spanish translation (es.json)` or `Update French translation`.
- **Describe** what you translated or updated in the PR description.

---

## 6. Tips for Quality Translations

- Be concise and clear.
- Use formal or polite forms if unsure.
- Match the tone of the English original.
- Double-check spelling and grammar.
- If unsure about a term, ask or leave a comment in your PR.

---

## 7. FAQ

**Q: What if I see a key in English that isn’t in my language file?**  
A: Copy it from `en.json` and translate the value.

**Q: Can I add a new key?**  
A: Only if you are also updating the code to use it. Otherwise, only translate existing keys.

---

If you have any questions, please ask in the project chat or open an issue.
