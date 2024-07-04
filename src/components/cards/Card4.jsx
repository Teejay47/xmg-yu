
import carda from '../../img/card4-a.png';
import cardb from '../../img/card4-b.png';
import cardc from '../../img/card4-c.png';
import cardd from '../../img/card4-d.png';

function Card4() {
  let trc = [
    {
      id: "1",
      img: carda,
      title: "Krieg in der Ukraine",
      content: "Hypershallrakete 'Ziron':Superwaffe oder Putin-Propaganda?",
      vor: "vor 12 Stunden     von Clemens Sarholz",
    },
    {
      id: "2",
      img: cardb ,
      title: "Krieg in der Ukraine",
      content:
        "Scholz sagt der Ukraine 'germeinsame Unterstützung der Europäer' zu",
      vor: "vor 18 Stunden",
    },
    {
      id: "3",
      img:  cardc ,
      title: "Politik",
      content:
        "Verteidigungsminister Pistorius kundigt baldige Reise in die Ukraine an",
      vor: "vor 19 Stunden",
    },
    {
      id: "4",
      img: cardd ,
      title: "Krieg in der Ukraine",
      content:
        "Zögern bei panzer - Lieferugen: Druck auf Bundeskanzler Sholz wächst",
      vor: "Kultur",
    },
  ];

  return (
    <div  className="card4Container">
      <div>
        <h2>Russlands krieg gegen die Ukraine</h2>
      </div>
      <div className="flex-cardiv">
        {trc.map((item) => (
            <div key={item.key}>
                <div className="card5imgdiv">
                    {<img key={item.id} src={item.img} alt="can't show image" />}
                    </div>
            <p className="card4_p">{item.title}</p>
            <strong className="card4content">{item.content}</strong>
            <h6 className="card4date">{item.vor}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card4;
