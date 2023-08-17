import React from "react";

import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <>
      <section className="flash background">
        <div className="container ">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Deals</h1>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
