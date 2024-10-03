// App.js
import React from 'react';
import ThemeProvider from './components/ThemeProvider';  // Import the provider
import ExampleComponent from './components/ExampleComponent';  // Example component using theme

const App = () => {
  return (
    // Wrap the entire app inside the ThemeProvider to give it access to the theme context.
    <ThemeProvider>
      <ExampleComponent />
    </ThemeProvider>
  );
};

export default App;
