import React from "react";
import "./cardstyles.css";
import Screenshot from "../../img/Screenshot.png";
import carda from "../../img/card2-a.png"
import cardb from "../../img/card2-b.png"
import cardc from "../../img/card2-c.png"

function Card2() {
  let trc = [
    {
      text: `Interview Bundesbauministerin`,
      content: "Wie wohnen wir in Zukunft, Frau Geywitz",
      title: "vor 2 Studen  von Fabian Busch",
    },
    {
      text: `Natur`,
      content: "Unbedingt einen Besuch wert: Das sind die schönsten Wälder DeutschZ ",
      title: "7. oktober 2022",
    },
    {
      text: `molestiae quas vel sint commodi repudiandae 
            
            `,
      video: false,
      title: "Kumasi",
    },
    {
      text: `Krieg in der Ukraine`,
      content: "Briten äubern Vermutung , womit Russland Probleme bekommen wird",
      title: "vor 16 Studen",
    },
  ];
  return (
    <div className="card2-container">
      <div className="left1">
        <div className="l1 ol1">
          <img src={ carda } alt="" className="card5imgdiv1" />
          <p className="top">Interview Bundesbauministerin</p>
          <strong className="card2boldText">
          Wie wohnen wir in Zukunft, Frau Geywitz
          </strong>
          <p className="top">vor 2 Studen {""} von Fabian Busch</p>
        </div>
        <div className="l2 ol2">
          <img src={ cardb} alt="" className="card5imgdiv1"/>
          <p className="top">Natur</p>
          <strong className="card2boldText">
          Unbedingt einen Besuch wert: Das sind die schönsten Wälder DeutschZ
          </strong>
          <p className="top">7. oktober 2022</p>
        </div>
      </div>
      <div className="right">
        <div className="r1">
          {trc.map((item, index) => (
            <div key={index}>
              <hr />
              <div className="top">
                {item.video == item.video ? (
                  <span className="vid">{item.video}</span>
                ) : null}
                {item.title}
              </div>
              <div className="boldText">
                <strong>{item.text}</strong>
              </div>
              <br />
            </div>
          ))}
        </div>
        <div className="r2">
          {" "}
          <img src={ cardc} alt=""  className="card5imgdiv1"/>
          <p className="top">Krieg in der Ukraine</p>
          <strong className="card2boldText">
          Briten äubern Vermutung , womit Russland Probleme bekommen wird
          </strong>
          <p className="top">vor 16 Studen</p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
