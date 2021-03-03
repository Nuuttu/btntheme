import React from 'react';
import ThemeContext from "./ThemeContext"



function HeaderButton(props) {
  const themeContext = React.useContext(ThemeContext);

  const [the, setThe] = React.useState(themeContext.black);

  const toggle = () => {
    if (the === themeContext.black) {
      setThe(themeContext.blue);
    } else {
      setThe(themeContext.black);
    }
  }


  return (
    <div>
      <button id="b1" style={the} onClick={toggle}>Press me</button>

    </div>
  );
}

export default HeaderButton;