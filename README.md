# Kostiantyn Vundervald - Portfolio Website

A clean, responsive portfolio website built with pure HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Adapts perfectly to all screen sizes from mobile to desktop
- **Clean UI/UX**: Intuitive navigation with smooth scrolling
- **Multilingual Support**: Switch between 7 languages easily
- **Form Validation**: Client-side validation for the contact form
- **Animations**: Subtle animations enhance user experience

## Multilingual Support

The website supports 7 languages:

- 🇷🇺 Russian
- 🇺🇦 Ukrainian
- 🇬🇧 English
- 🇩🇪 German
- 🇪🇸 Spanish
- 🇵🇹 Portuguese
- 🇯🇵 Japanese

### How the Translation System Works

1. **Language Selection**: The language switcher is located in the navigation menu, showing the current language flag
2. **Persistence**: Your language preference is saved in localStorage and remembered across visits
3. **Dynamic Content**: All UI elements update instantly when you change the language

### Implementation Details

The translation system is implemented in these files:

- `scripts/translations.js`: Contains all text content in all supported languages
- `scripts/i18n.js`: Handles the language switching logic and DOM updates
- `styles/main.css`: Includes styling for the language switcher interface

## Project Structure

```
portfolio/
│
├── assets/
│   └── resume.pdf
│
├── images/
│   └── (project images)
│
├── scripts/
│   ├── main.js
│   ├── i18n.js
│   └── translations.js
│
├── styles/
│   └── main.css
│
├── README.md
└── index.html
```

## Getting Started

1. Clone or download the repository
2. Open `index.html` in your browser
3. No build process or dependencies required!

## Browser Compatibility

The site works in all modern browsers, including:

- Chrome
- Firefox
- Safari
- Edge

## Adding New Languages

To add a new language:

1. Add your language to the `languages` array in `scripts/i18n.js`
2. Create a new language object in `scripts/translations.js` following the existing pattern
3. Add translations for all keys in your new language object

Example:

```javascript
// Adding Italian language
// 1. In i18n.js
const languages = [
  // existing languages...
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

// 2. In translations.js
const translations = {
  // existing languages...
  it: {
    nav: {
      home: "Home",
      // other keys...
    },
    // other sections...
  },
};
```
