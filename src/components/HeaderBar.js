import React from 'react';

class HeaderBar extends React.Component {

  render() {

  const barStyle = {
    width: "100%",
    backgroundColor: "#000",
    padding: "0 auto",
    color: "#fff",
    fontSize: "1.2rem",
    clear: "both",
    textTransform: 'uppercase'
  }

  let innerText = this.props.innerText;

  return (
    <h1 style={barStyle}>{innerText}</h1>
    )
  }
}

export default HeaderBar;
