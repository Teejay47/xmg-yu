import React from "react";
import leftImage from "../../img/card5-bigleft.png";
import rightimage1 from "../../img/card5-a.png";
import rightImage2 from "../../img/card5-b.png";
import rightImage3 from "../../img/card5-c.png";
import rightImage4 from "../../img/card5-d.png";

function Card5() {
  return (
    <div className="card5Container">
      <div className="leftcardContainer">
        <div className="card5Navs">
          <div >
            <h1 className="card5title">News</h1>
          </div>
          <div className="card5heading">
            <div>Politik</div>
            <div>Regionales</div>
            <div>US-Politik</div>
            <div>Wirtshaft</div>
            <div>Politiche Talshows</div>
          </div>
        </div>

        <div className="ptl">
          <img src={leftImage} alt="" />
          <p className="frankreich">Frankreich</p>
          <h1>
            <strong className="card5rightTitle">
              Erhohung des Rentenalters: Ausschreitungen <br/> bei Protesten gegen
              reform in Paris
            </strong>
          </h1>

          <div>
            <p className="card5right_paragraph">
              Am Rande einer Demonstration gegen die Rentenreforn in Frankreich ist es in paris zu gewaltsamen Ausschreitun gekommen Tausende Menschen hatten zuvor weitgehend friedtich gegen eine Anhebung des Renteneintrittsalters auf 64 Jahre protestiert 
            </p>
            <p className="top">vor 13 Studen</p>
          </div>
        </div>
      </div>

      <div className="rightcardContainer">
        <div>
          <img src={rightimage1} alt="" />
          <h2 className="top"><span>Anzeige</span> GMX Suche</h2>
                  <h2 className="card2boldText">GMX GO!<br/> Einfach. Schnell. individuel.</h2>
                  
        </div>
        <div>
                  <img src={rightImage2} alt="" />
                  <p className="top">Wohnungsmarkt</p>
          <h2 className="card2boldText">Wohnungen Könnten noch zehn jahre lang knapp sein - Kritik an Bundesregierung</h2>
                  <p className="top">vor 15 Stunden</p>
                  
        </div>
        <div>
          <img src={rightImage3} alt="" />
          <h2 className="top">politik</h2>
                  <h2 className="card2boldText">Lindner legt im "Pasha" - Streit mit Merz nach</h2>
                  <p className="top"> vor 17 Stunden</p>
        </div>
        <div>
          <img src={rightImage4} alt="" />
          <h2 className="top">poltik</h2>
          <h2 className="card2boldText">Koran-Verbrennung in Schweden belastet Gespräche über Nato-Beitritt</h2>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Card5;
