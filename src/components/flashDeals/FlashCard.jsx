import React, { useState } from "react";
import Slider from "react-slick";
import { Button, Modal } from "antd";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ productItems, addToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (productItems) => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <img
                    src={productItems.cover}
                    alt=""
                    onClick={showModal}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="product-like">
                    <div>{count} </div> <br />
                    <Modal
                      title="Basic Modal"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <p>{productItems.discount}% Off</p>
                      <img src={productItems.cover} alt="image" />
                      <p>Name: {productItems.name}</p>
                      <p>Price: ${productItems.price}.00</p>
                    </Modal>
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>$ {productItems.price}.00</h4>
                    <button onClick={() => addToCart(productItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
