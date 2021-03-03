import React from 'react';
import Header from './Header';
import ThemeContext from "./ThemeContext"

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};
// wrapping
function App() {
  return (
    <ThemeContext.Provider value={buttonThemes}>
    <Header themes={buttonThemes}/>
    </ThemeContext.Provider>
  );
}

export default App;
