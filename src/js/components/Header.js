import React from "react";

export default class Header extends React.Component {

  render(){
    return (
      <div>
      <header class="header-basic-light">

        <div class="header-limiter">

          <h1><a href="#"><span> "Kingdoms" </span></a></h1>

          <nav>
            <a href="#/signin" class="selected">Sign in</a>
            <a href="#/signup">Sign up</a>
          </nav>
        </div>

      </header>
      </div>
    );
  }
}
