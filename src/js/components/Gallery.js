import React from "react";

export default class Gallery extends React.Component{

  render(){
    return (
      <div>
      <div class="container gallery-container">

          <p class="page-description text-center">Kingdoms</p>

          <div class="tz-gallery">

              <div class="row">

                  <div class="col-sm-6 col-md-4">
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
                  <div class="col-sm-6 col-md-4">
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
                  <div class="col-sm-6 col-md-4">
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
                  <div class="col-sm-6 col-md-4">
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
                  <div class="col-sm-6 col-md-4">
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
                  <div class="col-sm-6 col-md-4">
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
