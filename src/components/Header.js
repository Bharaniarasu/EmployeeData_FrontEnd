import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav bar navbar-dark navbar-expand-md bg-dark p10">
            <div>
              <br />
              <a href="/" className="header-title">
                EMPLOYEE MANAGEMENT APP
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
