// ThemeProvider.jsx
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  // Create a state variable 'theme' that starts with 'light'.
  const [theme, setTheme] = useState('light');

  // Function to toggle between 'light' and 'dark' themes.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the 'theme' and 'toggleTheme' function to children components.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
