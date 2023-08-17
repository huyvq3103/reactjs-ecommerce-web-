import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import React, { useState } from "react";
import Cart from "./common/cart/Cart";
import Sdata from "./components/shop/Sdata";
import Footer from "./common/footer/Footer";
import LoginPage from "./components/login/Login";
import RegisterPage from "./components/register/Register";
import ContactPage from "./components/contact/Contact";
import Product from "./components/product/Product";
import AboutPage from "./components/about/About";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCardItem] = useState([]);
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== productExit.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <Router>
      <Header cartItem={cartItem} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
