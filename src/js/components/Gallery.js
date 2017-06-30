import React from "react";
import Modal from "./gallery/Modal";
import KingdomsCard from "./gallery/KingdomsCard";

var CARDS = [
  {name: 'Park', author: 'Claire', contributors: 'Claire, Allen', description: 'description of Park'},
  {name: 'Bridge', author: 'Ted', contributors: 'Claire, Ted', description: 'description of Bridge'},
  {name: 'Tunnel', author: 'Allen', contributors: 'Allen, Naomi, Mike', description: 'description of Tunnel'},
  {name: 'Coast', author: 'Mike', contributors: 'Mike, Claire', description: 'description of Coast'},
  {name: 'Rails', author: 'Wendy', contributors: 'Wendy, Allen', description: 'description of Rails'},
  {name: 'Traffic', author: 'Naomi', contributors: 'Naomi', description: 'description of Traffic'},
];

export default class Gallery extends React.Component{
  constructor(){
    super();
    this.state = {
      clicked: false,
      cards: CARDS,
      currentclick: null
    };
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
    this.setState({currentclick: 1});
  }
  handleClickClose() {
    this.setState({ clicked: false });
  }

  render(){
    return (
      <div>
      <div class="container gallery-container">

        <Modal
        cards={this.state.cards}
        currentclick={this.state.currentclick}
        handleClick={this.handleClick.bind(this)}
        handleClickClose={this.handleClickClose.bind(this)}
        clicked={this.state.clicked}/>

        <p class="page-description text-center">Kingdoms</p>

        <KingdomsCard
        cards={this.state.cards}
        currentclick={this.state.currentclick}
        handleClick={this.handleClick.bind(this)} />

      </div>
      </div>

    );
  }
}
