import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import skyLogo from "../../assets/img/sky-blue.svg";
import seaLogo from "../../assets/img/sea-blue.svg";
import "./ApartamentsFull.scss";
function ApartmentsFull() {
  const [apartment, setApartment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://63d691e694e769375bb3c5c5.mockapi.io/items/${id}`)
      .then((response) => setApartment(response.data))
      .catch((error) => console.error(error));
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="apartments-full">
        <div
          className="apartments-full-images"
          style={{
            display: "flex",
            overflowY: "scroll",
            whiteSpace: "nowrap",
          }}
        >
          {[
            apartment.imageUrl,
            apartment.imageUrl1,
            apartment.imageUrl2,
            apartment.imageUrl3,
            apartment.imageUrl4,
            apartment.imageUrl5,
            apartment.imageUrl6,
            apartment.imageUrl7,
            apartment.imageUrl8,
            apartment.imageUrl9,
            apartment.imageUrl10,
            apartment.imageUrl11,
            apartment.imageUrl12,
            apartment.imageUrl13,
            apartment.imageUrl14,
            apartment.imageUrl15,
            apartment.imageUrl16,
            apartment.imageUrl17,
            apartment.imageUrl18,
            apartment.imageUrl19,
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              style={{
                height: "720px",
                marginRight: "30px",
                display: "flex",
              }}
            />
          ))}
        </div>
      </div>

      <ul className="apartments-full-content">
        <li>
          <h3>{apartment.title}</h3>
          <div className="img-title">
            <img src={skyLogo} alt="" />
            <img src={seaLogo} alt="" />
          </div>
        </li>
        <li>
          <p>
            wifi | тв | кондиціонер | духова шафа | мікрохвильова піч |
            посудомийна машина | пральна машина | холодильник | праска | фен |
            курити заборонено | домашні тварини заборонені | вечірки або заходи
            заборонені | не можна шуміти c 22:00 до 8:00 <br />
          </p>
          <p className="time">
            <span>ЧАС ЗАЇЗДУ:</span> ПІСЛЯ 15:00 <br /> <span>ЧАС ВИЇЗДУ:</span>
            ДО 11:00
          </p>
          <p className="card">приймаються кредитні картки</p>
          <p className="reserve">
            політика скасування: для підтвердження бронювання з гостя стягується
            вартість однієї ночі. гість може безкоштовно скасувати бронювання в
            термін до 10 днів до заїзду
          </p>
          <p className="social-booking">ЗАБРОНЮВАТИ НА BOOKING</p>
          <p className="social-olx">ЗАБРОНЮВАТИ НА OLX</p>
        </li>
      </ul>
    </>
  );
}

export default ApartmentsFull;
