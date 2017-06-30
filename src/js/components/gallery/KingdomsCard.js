import React from "react";

export default class KingdomsCard extends React.Component{
  handleChange() {
    this.props.handleClick();
	}

  render(){
    // console.log(this.props.currentclick)
    var name = [];
    this.props.cards.forEach((card) => {
        name.push(card.name);
    });
    var author = [];
    this.props.cards.forEach((card) => {
        author.push(card.author);
    });
    var contributors = [];
    this.props.cards.forEach((card) => {
        contributors.push(card.contributors);
    });
    var description = [];
    this.props.cards.forEach((card) => {
        description.push(card.description);
    });
    return(
      <div>
        <div class="tz-gallery">
          <div class="row">
              <div class="col-sm-6 col-md-4" onClick={this.handleChange.bind(this)}>
                  <div class="thumbnail">
                      <a class="lightbox">
                          <img src="../images/park.jpg" alt="Park"/>
                      </a>
                      <div class="caption">
                          <h3>{name[0]}</h3>
                          <p>{description[0]}</p>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 col-md-4" onClick={this.handleChange.bind(this)}>
                  <div class="thumbnail">
                      <a class="lightbox">
                          <img src="../images/bridge.jpg" alt="Bridge"/>
                      </a>
                      <div class="caption">
                          <h3>{name[1]}</h3>
                          <p>{description[1]}</p>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 col-md-4" onClick={this.handleChange.bind(this)}>
                  <div class="thumbnail">
                      <a class="lightbox">
                          <img src="../images/tunnel.jpg" alt="Tunnel"/>
                      </a>
                      <div class="caption">
                          <h3>{name[2]}</h3>
                          <p>{description[2]}</p>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 col-md-4" onClick={this.handleChange.bind(this)}>
                  <div class="thumbnail">
                      <a class="lightbox">
                          <img src="../images/coast.jpg" alt="Coast"/>
                      </a>
                      <div class="caption">
                          <h3>{name[3]}</h3>
                          <p>{description[3]}</p>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 col-md-4" onClick={this.handleChange.bind(this)}>
                  <div class="thumbnail">
                      <a class="lightbox">
                          <img src="../images/rails.jpg" alt="Rails"/>
                      </a>
                      <div class="caption">
                          <h3>{name[4]}</h3>
                          <p>{description[4]}</p>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 col-md-4"onClick={this.handleChange.bind(this)}>
                  <div class="thumbnail">
                      <a class="lightbox">
                          <img src="../images/traffic.jpg" alt="Traffic"/>
                      </a>
                      <div class="caption">
                          <h3>{name[5]}</h3>
                          <p>{description[5]}</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
