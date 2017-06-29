import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component{

  render(){
    const tempPadding = {
      marginTop: "40px"
    };
    const {location} = this.props;

    return (
      <div>
        <Header/>
        {this.props.children}
        <div style={tempPadding}></div>
        <Footer/>
      </div>

    );
  }
}
