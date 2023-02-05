import React, { useState, useEffect } from "react";
import "./Typing.scss";

import gifTitle from "../../assets/img/this-is-gif.gif";

function Typing({ text }) {
  const [displayText, setDisplayText] = useState("1");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, index + 1));
      setIndex(index + 1);
    }, 80);

    return () => clearTimeout(timeout);
  }, [index, text]);

  return (
    <>
      <div className="typing-apartaments">
        <img height={350} src={gifTitle} alt="" />
        <h1 className="typing-content">{displayText}</h1>
      </div>
    </>
  );
}

export default Typing;
