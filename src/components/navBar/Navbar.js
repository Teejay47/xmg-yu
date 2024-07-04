import React from "react";
import "./inputField.css";
import ottop from "../../img/navbarOtto.png";
import moha from "../../img/navbarMoha.png";
import baur from "../../img/navbarBaur.png";
// import Ottop from './../img/ottop_logo.svg'

function Navbar() {
  return (
    <div className="navBar_sticky">
      <form>
        <div>
          <div className="menuBanner">
            <div className="gmx">GMX</div>
            <div className="searchDiv">
              <div className="searchInput">
                <input
                  type="search"
                  className="searchDivInput"
                  placeholder="Suchen mit GMX"
                  required
                />
              </div>

              <div className="searchBtn">
                <i className="fa fa-search pt-3 px-3 fill-current" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <button className="registerbtn ">Registrieren</button>
            </div>
          </div>
          <div className="nav_container">
            <div>
              <ul>
                <li>Email & Cloud</li>
                <li>Mobilfunk & DSL</li>
                <li>Strom & Gas</li>
                <li>Shop</li>
                <li>Lotto</li>
                <li>Versicherung</li>
                <li>WEB.Cent</li>
                <li>Games</li>
              </ul>
            </div>

            <div className="right_nav">
            <img src={ ottop} alt=""/>
            <img src={ moha} alt=""/>
            <img src={ baur} alt=""/>
             
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
