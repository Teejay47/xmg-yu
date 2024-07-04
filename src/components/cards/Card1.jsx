import React from "react";
import "./cardstyles.css";
import Screenshot from "../../img/Screenshot.png";

function Card1() {
  let trc = [
    {
      text: `Leonardo da Vinci: Wissenschafter lösen 500 Jahre altes Rätsel
            `,
      video: "video",
      title: "Kultur",
    },
    {
      text: `Muss ich am Bewerbungstraing vom Jobcenter teilnehmen. 
            `,
      video: false,
      title: "Job & Gehalt",
    },
    {
      text: `Ist die nordische Diät die neue Mittelmeerkost?
            
            `,
      video: false,
      title: "Gesundheit",
    },
    {
      text: `Wellen bis zu acht Metern : Diese Schifffahrt vergessen die Passagiere wohl nie 
            `,
      video: "video",
      title: "italien",
    },
  ];
  return (
    <div className="card-container">
      <div className="left">
        <img src={Screenshot} alt="" />
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
          <img src={Screenshot} alt="" />
          <p>Name Franklin</p>
          <br />
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Card1;
