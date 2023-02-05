import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Typing from "./components/Typing/Typing";
import Popup from "./components/Popup";
import ApartamentsBlock from "./components/ApartamentsBlock/ApartamentsBlock";
import Info from "./components/Info";
import ApartamentsFull from "./components/pages/ApartamentsFull";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://63d691e694e769375bb3c5c5.mockapi.io/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="sky-apartaments">
      <Popup />
      <div className="content-apartaments">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Typing text="THIS IS SKY APARTAMENTS, ДЕ ТИ ЖИВЕШ ДИЗАЙНОМ" />
                <ApartamentsBlock />
                <Info />
              </>
            }
          />

          <Route path="/apartaments/:id" element={<ApartamentsFull />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
