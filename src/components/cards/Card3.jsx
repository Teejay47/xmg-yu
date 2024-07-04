import React from "react";
import "./cardstyles.css";
import carda from '../../img/card3-a.png';
import cardb from '../../img/card3-b.png';
import cardc from '../../img/card3-c.png';
import cardd from '../../img/card3-d.png';

function Card3() {
  return (
    <div className="flex-cardiv2">

        <div className="l1">
          <img src={carda} alt="" />
          <p className="top">Anzeign GMX Mobilfunk</p>
          <strong className="card2boldText">
          All-Net-Flat Handytarife 
          </strong>
          <p className="top">Daurhaft günstig sufren & telefonieren</p>

        </div>
        <div className="l2">
          <img src={ cardb} alt="" />
          
        </div>


        <div className="r1">
          {" "}
          <img src={ cardc } alt="" />
          <p className="top">GMX Blog</p>
          <strong className="card2boldText">
       GMX Passwort ändern
          </strong>
          <p className="top">Die Anleitung für Ihr  neues Passwort </p>
        </div>
        <div className="r2">
          {" "}
          <img src={cardd} alt="" />
          <p className="top">GMX MailDomain</p>
          <strong className="card2boldText">
         Aus Mail@gmx.net wird ...
          </strong>
          <p className="top">...Ihre eigene Domain zum einfachen Mailen in Ihrem GMX Postfach</p>
        </div>
    </div>
  );
}

export default Card3;
