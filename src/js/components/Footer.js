import React from "react";

export default class Footer extends React.Component {
  render(){
    const footerStyle = {
      marginBottom: "35px",
      textAlign: "center",
      color: "#777"
    };

    return (
      <div>
        <footer style={footerStyle}>© 2017 Copyright ImaginationKingdoms</footer>
      </div>
    );
  }
}
