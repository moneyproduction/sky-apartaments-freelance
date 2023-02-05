import React, { useState } from "react";
import axios from "axios";
import "./ApartamentsBlock.scss";
import titleSky from "../../assets/img/sky.png";
import titleSea from "../../assets/img/sea.png";
import { Link } from "react-router-dom";

function ApartamentsBlock() {
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://63d691e694e769375bb3c5c5.mockapi.io/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="apartaments-apartamentsblock">
        <img
          className="titleSky"
          width={70}
          height={20}
          src={titleSky}
          alt="titleSky"
        />
        <img
          className="titleSea"
          width={70}
          height={15}
          src={titleSea}
          alt="titleSea"
        />
        <h4>АПАРТАМЕНТИ</h4>
      </div>
      <div className="apartamentsblock-content">
        {items.map((item, index) => (
          <div key={item.id} className={index % 2 === 1 ? "lower" : ""}>
            <Link to={`/apartaments/${item.id}`}>
              <img src={item.imageUrl} alt="img-apartaments" />
            </Link>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default ApartamentsBlock;
