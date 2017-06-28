import React from "react";

export default class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render(){
    return (
      <div>
        <header title={this.props.title}>{this.props.title}</header>
        <input onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
