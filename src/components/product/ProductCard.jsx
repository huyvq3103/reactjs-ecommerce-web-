import React from "react";
const datas = [
  {
    id: 1,
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 2,
    discount: 40,
    cover: "./images/flash/flash-2.png",
    name: "Watch",
    price: 20,
  },
  {
    id: 3,
    discount: 40,
    cover: "./images/flash/flash-3.png",
    name: "Smart Mobile Black",
    price: 200,
  },
  {
    id: 4,
    discount: 40,
    cover: "./images/flash/flash-4.png",
    name: "Smart Watch Black",
    price: 50,
  },
  {
    id: 5,
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
];
const ProductCard = () => {
  return (
    <>
      {datas.map((data, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{data.discount}% Off</span>
                <img
                  src={data.cover}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="product-like"></div>
              </div>
              <div className="product-details">
                <h3>{data.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>$ {data.price}.00</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
