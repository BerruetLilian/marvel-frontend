import "./backgroundSlide.css";
import cpt from "../../assets/img/CaptainAmerica.png";
import adam from "../../assets/img/AdanWarlok.png";
import widow from "../../assets/img/BlackWidow.png";
import panther from "../../assets/img/BlackPanther.png";
import ant from "../../assets/img/AntMan.png";
import luna from "../../assets/img/LunaSnow.png";
import mantis from "../../assets/img/Mantis.png";
import phoenix from "../../assets/img/Pheonix.png";
import spider from "../../assets/img/SpiderMan.png";
import venom from "../../assets/img/Venom.png";
import angela from "../../assets/img/Angela.png";
import daredevil from "../../assets/img/Daredevil.png";
import doctorStrange from "../../assets/img/DrStrange.png";
import groot from "../../assets/img/Groot.png";
import hulk from "../../assets/img/HULK.png";
import ironman from "../../assets/img/IronMan.png";
import punisher from "../../assets/img/Punisher.png";
import scarlet from "../../assets/img/ScarletWish.png";
import storm from "../../assets/img/Storm.png";
import thor from "../../assets/img/Thor.png";

const BackgroundSlide = () => {
  const images = [
    cpt,
    adam,
    widow,
    panther,
    luna,
    venom,
    mantis,
    phoenix,
    spider,
    ant,
    angela,
    daredevil,
    doctorStrange,
    groot,
    hulk,
    ironman,
    punisher,
    scarlet,
    storm,
    thor,
  ];

  const row = (i) => {
    const result = [];
    const n = images.length;
    if (i % 3 === 0) {
      for (let j = 1; j <= 6; j++) {
        for (let k = 0; k < n; k++) {
          result.push(
            <img key={String(i) + String(j) + String(k)} src={images[k]} />
          );
        }
      }
    } else if (i % 3 === 1) {
      for (let j = 1; j <= 6; j++) {
        const start = Math.floor(n / 2);
        for (let k = 0; k < n; k++) {
          result.push(
            <img
              key={String(i) + String(j) + String(k)}
              src={images[(start + k) % n]}
            />
          );
        }
      }
    } else {
      for (let j = 1; j <= 6; j++) {
        for (let k = 0; k < n; k++) {
          const start = Math.floor(n / 4);
          result.push(
            <img
              key={String(i) + String(j) + String(k)}
              src={images[(start + k) % n]}
            />
          );
        }
      }
    }
    return result;
  };
  const background = () => {
    const result = [];
    for (let i = 1; i <= 11; i++) {
      result.push(
        <div className="slide" key={i} style={{ top: (i - 1) * 10 + "vh" }}>
          {row(i)}
        </div>
      );
    }

    return result;
  };
  return <div className="background-slide"> {background()}</div>;
};

export default BackgroundSlide;
