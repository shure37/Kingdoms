import React from "react";
import Modal from "./Modal";

export default class Gallery extends React.Component{
  constructor(){
    super();
    this.state = {
      clicked: false,
    };
  }
  
  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }
  handleClickClose() {
    this.setState({ clicked: false });
  }

  render(){
    return (
      <div>
      <div class="container gallery-container">

        <Modal handleClick={this.handleClick.bind(this)}
        handleClickClose={this.handleClickClose.bind(this)} clicked={this.state.clicked}/>

          <p class="page-description text-center">Kingdoms</p>
          <div class="tz-gallery">
              <div class="row">
                  <div class="col-sm-6 col-md-4" onClick={this.handleClick.bind(this)}>
                      <div class="thumbnail">
                          <a class="lightbox">
                              <img src="../images/park.jpg" alt="Park"/>
                          </a>
                          <div class="caption">
                              <h3>Thumbnail label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4" onClick={this.handleClick.bind(this)}>
                      <div class="thumbnail">
                          <a class="lightbox">
                              <img src="../images/bridge.jpg" alt="Bridge"/>
                          </a>
                          <div class="caption">
                              <h3>Thumbnail label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4" onClick={this.handleClick.bind(this)}>
                      <div class="thumbnail">
                          <a class="lightbox">
                              <img src="../images/tunnel.jpg" alt="Tunnel"/>
                          </a>
                          <div class="caption">
                              <h3>Thumbnail label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4" onClick={this.handleClick.bind(this)}>
                      <div class="thumbnail">
                          <a class="lightbox">
                              <img src="../images/coast.jpg" alt="Coast"/>
                          </a>
                          <div class="caption">
                              <h3>Thumbnail label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4" onClick={this.handleClick.bind(this)}>
                      <div class="thumbnail">
                          <a class="lightbox">
                              <img src="../images/rails.jpg" alt="Rails"/>
                          </a>
                          <div class="caption">
                              <h3>Thumbnail label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-4"onClick={this.handleClick.bind(this)}>
                      <div class="thumbnail">
                          <a class="lightbox">
                              <img src="../images/traffic.jpg" alt="Traffic"/>
                          </a>
                          <div class="caption">
                              <h3>Thumbnail label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>

      </div>
      </div>

    );
  }
}
