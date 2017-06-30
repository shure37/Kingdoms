import React from "react";
import Test from "./Test";

export default class Modal extends React.Component {

	handleChange() {
    this.props.handleClick();
	}
  handleChildClick(e) {
   e.stopPropagation();
  //  console.log('handleChildClick');
  }

  render(){
    // console.log(this.props.cards)
    var currentclick = this.props.currentclick;

    let modal = null;
    if (this.props.clicked) {
      modal =
      <div class="modal" onClick={this.handleChange.bind(this)}>
          <div class="modal-content" onClick={this.handleChildClick.bind(this)}>
            <span class="close" onClick={this.handleChange.bind(this)}>&times;</span>
            <p>Author of this Kingdom: {this.props.cards[currentclick].author}</p>
          </div>
      </div>
    } else {
      modal = null;
    }
    return(
      <div>

        {modal}

      </div>)
  }

}
