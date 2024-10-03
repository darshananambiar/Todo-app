// ExampleComponent.jsx
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ExampleComponent = () => {
  // Access 'theme' and 'toggleTheme' from the ThemeContext.
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Render the current theme and a button to toggle the theme.
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ExampleComponent;
