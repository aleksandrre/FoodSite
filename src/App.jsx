import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Context from "./Context/Context.jsx";
import MainPage from "./pages/mainpage/MainPage.jsx";
import Cart from "./pages/cart/Cart.jsx";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default App;
