import React, { useState } from "react";
import Header from "./Header";
import seaLogo from "../assets/img/sea-blue.svg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [namePlaceholder, setNamePlaceholder] = useState("ВАШЕ ІМ'Я");
  const [phonePlaceholder, setPhonePlaceholder] = useState("НОМЕР ТЕЛЕФОНУ");

  const handleSubmit = async () => {
    if (name !== "" && phone !== "") {
      try {
        await fetch("https://63d691e694e769375bb3c5c5.mockapi.io/reserve", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, phone }),
        });
        setShowPopup(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("БУДЬ ЛАСКА ЗАПОВНІТЬ АНКЕТУ ПЕРЕД ЇЇ ВІДПРАВЛЕННЯМ");
    }
  };

  const handleNameChange = (e) => {
    const lettersRegex = /^[а-яА-Я]+$/;
    if (e.target.value.match(lettersRegex)) {
      setName(e.target.value);
    }
  };

  const handlePhoneChange = (e) => {
    const numbersRegex = /^[0-9]+$/;
    if (e.target.value.match(numbersRegex)) {
      setPhone(e.target.value);
    }
  };
  const handleKeyDownPhone = (e) => {
    if (e.keyCode === 8) {
      setPhone(phone.slice(0, -1));
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 8) {
      setName(name.slice(0, -1));
    }
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
    document.body.style.overflow = !showPopup ? "hidden" : "scroll";
  };

  return (
    <div className="popup-apartaments">
      <Header togglePopup={togglePopup} />
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>ЗАПОВНІТЬ АНКЕТУ НА ПЕРЕДЗВОН</h2>
            <input
              type="text"
              onChange={handleNameChange}
              value={name}
              onKeyDown={handleKeyDown}
              placeholder={namePlaceholder}
              onFocus={() => setNamePlaceholder("ПРИЙМАЄ ЛИШЕ ЛІТЕРИ")}
              onBlur={() => setNamePlaceholder("ВАШЕ ІМ'Я")}
            />
            <input
              type="text"
              onChange={handlePhoneChange}
              onKeyDown={handleKeyDownPhone}
              value={phone}
              placeholder={phonePlaceholder}
              onFocus={() => setPhonePlaceholder("ПРИЙМАЄ ЛИШЕ ЦИФРИ")}
              onBlur={() => setPhonePlaceholder("НОМЕР ТЕЛЕФОНУ")}
            />
            <div className="popup-button">
              <button onClick={handleSubmit}>ПЕРЕДЗВОНИТИ МЕНІ</button>
              <img height={50} src={seaLogo} alt="" />
              <button onClick={togglePopup}>ЗАКРИТИ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
