import banner from "../../img/banner.png";

function Banner() {
  return (
    <div className="banner_container">
      <div className="banner-logos">
        <img src={banner} alt="" />
      </div>

      <div className="banner_footer">
        <div>
          <h2 className="banner_footer_title">Produkte</h2>
          <div className="footerList">Strom + Gas</div>
          <div className="footerList">Handytarif-Vergleich</div>
          <div className="footerList">E-mail-Addresse</div>
          <div className="footerList">De-Mail</div>
          <div className="footerList">ADAC mit Prämie</div>
          <div className="footerList">McAfee Virenchutz</div>
          <div className="footerList">Apps & mehr</div>
          <div className="footerList">DSL Vergleich</div>
          <div className="footerList">Browser gratis</div>
          <div className="footerList">Domain & Hosting</div>
        </div>

        <div>
          <div className="footerList">GMX Fax</div>
          <div className="footerList">Browser Check</div>
          <div className="footerList">GMX GruBkarten</div>
          <div className="footerList">Strompreisvergleich</div>
          <div className="footerList">PC-Tuning</div>
          <div className="footerList">Cloud</div>
          <div className="footerList">Magazin Flatrate</div>
          <div className="footerList">Film-Flatrate</div>
          <div className="footerList">Musik Flatrate</div>
        </div>

        <div>
          <div className="footerList">TV Streaming</div>
          <div className="footerList">Online-Sprachkurse </div>
          <div className="footerList">Kfz Vergleich</div>
          <div className="footerList">GMX MailCheck</div>
        </div>

        <div>
          <h2 className="banner_footer_title">Themen</h2>
          <div className="footerList">News</div>
          <div className="footerList">Sports</div>
          <div className="footerList">Unterhaltung</div>
          <div className="footerList">Ratgeber</div>
          <div className="footerList">Auto</div>
        </div>
        <div>
          <h2 className="banner_footer_title">Services</h2>
          <div className="footerList">Lotto</div>
          <div className="footerList">Games</div>
          <div className="footerList">Suche</div>
          <div className="footerList">Wetter</div>
          <div className="footerList">Horoscope</div>
          <div className="footerList">Routenplaner</div>
          <div className="footerList">Pflegehilfsmittel</div>
          <div className="footerList">Partnersuche</div>
          <div className="footerList">immobilienBörse</div>
          <div className="footerList">Singletreff</div>
        </div>
        <div>
          <div className="footerList">Feiertage</div>
          <div className="footerList">MillionKlick</div>
          <div className="footerList">BMI Rechner</div>
          <div className="footerList">Gewinnspiel</div>
          <div className="footerList">Vergiechswelt</div>
          <div className="footerList">Ferientermine</div>
          <div className="footerList">Ubersetzer</div>
        </div>
      </div>

      <div className="banner_footer-2">
        <div>
          <h2 className="banner_footer_title">Shopping</h2>
          <div className="footerList">GMX Preisvergleich</div>
          <div className="footerList">Gutscheine</div>
          <div className="footerList">Geschenkefinder</div>
        </div>

        <div>
          <h2 className="banner_footer_title">WEB.Cent</h2>
          <div className="footerList">GMX Cashback</div>
          <div className="footerList">Top Angebote</div>
          <div className="footerList">Alle Shops A-Z</div>

          <div className="footerList">LIDL & WEB.Cent</div>
          <div className="footerList">OTTO & WEB.Cent</div>
          <div className="footerList">Douglas & WEB.Cent</div>
          <div className="footerList">Tchibo & WEB.Cent</div>
        </div>
        <div>
          <h2 className="banner_footer_title">Partner</h2>
          <div className="footerList">Partnersuche</div>
          <div className="footerList">Singletreff</div>
        </div>

        <div>
          <h2 className="banner_footer_title">Hilfe</h2>
          <div className="footerList">Login schlagt fehl</div>
          <div className="footerList">Passwort vergessen</div>
          <div className="footerList">Hilfe zur Registrierung</div>
          <div className="footerList">E-Mail-Empfang und Versand</div>
          <div className="footerList">Account/konto</div>
          <div className="footerList">Ferientermine</div>
          <div className="footerList">Ubersetzer</div>
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
}

export default Banner;
