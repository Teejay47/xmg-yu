import React from "react";
import Amazon from "./../img/Amazon.png";
import baur from "./../img/baur.png";
import bonprix from "./../img/baur.png";
import Ebay from "./../img/Ebay.png";
import Lidi from "./../img/Lidi.png";
import Otto from "./../img/Otto.png";
import Parship from "./../img/Parship.png";
import Tchibo from "./../img/Tchibo.png";
import footer1 from "./../img/footer1.png";
import footer2 from "./../img/footer2.png";
import footer3 from "./../img/footer3.png";
import footer4 from "./../img/footer4.png";
import footer5 from "./../img/footer5.png";
import footer6 from "./../img/footer6.png";
import footer7 from "./../img/footer7.png";
import footer8 from "./../img/footer8.png";
import greenLeaf from "./../img/greenLeaf.png";

function Footer() {
  let footerCardImg = [
    footer1,
    footer2,
    footer3,
    footer4,
    footer5,
    footer6,
    footer7,
    footer8,
    footer5,
  ];
  return (
    <div className="footerContainer">
      <br />
      <div className="logoList">
        <div className="logonames">
          <div style={{ direction: "inline" }}>
            <img src={Lidi} alt="" />
          </div>
          <p>Lidi</p>
        </div>

        <div className="logonames">
          <div>
            <img src={Parship} alt="" />
          </div>
          <p>Parship</p>
        </div>
        <div className="logonames">
          <div className="ebay">
            <img src={Ebay} alt="" />
          </div>
          <p>ebay</p>
        </div>

        <div className="logonames">
          <div>
            <img src={baur} alt="" />
          </div>
          <p>Baur</p>
        </div>

        <div className="logonames">
          <div>
            <img src={bonprix} alt="" />
          </div>
          <p>Bonprix</p>
        </div>

        <div className="logonames">
          <div>
            <img src={Otto} alt="" />
          </div>
          <p>Otto</p>
        </div>

        <div className="logonames">
          <div>
            <img src={Amazon} alt="" />
          </div>
          <p>Amazon</p>
        </div>

        <div className="logonames">
          <div>
            <img src={Tchibo} alt="" />
          </div>
          <p>Tchibo</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="imgfooter">
        {footerCardImg.map((i, index) => (
          <div key={index}>
            <img src={i} alt="" />
            <br />
          </div>
        ))}
      </div>
      <br />
      <hr />
      <br />
      <div className="lstFooter">
        <p className="hundred">
          <img src={greenLeaf} alt="" /> 100% Ökostrom
        </p>
        <br />

        <div>
          <div className="rus">
            <p>Sitemap </p>
            <p>Impressum </p>
            <p>AGB </p>
            <p>Verträge Kündigen </p>
            <p>Datenschutz </p>
            <p>Jugendschutz </p>
          </div>
          {/* <br />
          <hr /> */}
          <br />
          <div className="eng">
            <p>Presse</p>
            <p>Jobs</p>
            <p>Werbung</p>
            <p>E-Mail</p>
            <p>Angebot</p>
            <p>Nützlich</p>
            <p>Aktuell</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
