import React from "react";

import skyBlue from "../assets/img/sky-blue.svg";
import seaBlue from "../assets/img/sea-blue.svg";
function Info() {
  return (
    <>
      <div className="apartaments-info">
        <h4>ПРО НАС</h4>
      </div>
      <div className="info-img">
        <div className="info-img-block">
          <img width={200} src={skyBlue} alt="" />
          <img width={200} src={seaBlue} alt="" />
        </div>
        <p>
          Хороший художник – це той художник, чиї роботи подобаються іншому
          художнику. (С) Ройтбурд.
          <br /> Наші інтер'єри подобаються іншим дизайнерам.
          <br /> <b>ПИСАТИ:</b>
          moneyproductionua@gmail.com. <b>ДЗВОНИТИ:</b>
          +38.068.250.59.84.
          <br /> <b>ШУКАТИ:</b> місто Одеса.
        </p>
      </div>
      <div className="contact">
        <h5>CREATED BY VOLODYMYR KOSTIUK</h5>
      </div>
    </>
  );
}

export default Info;
