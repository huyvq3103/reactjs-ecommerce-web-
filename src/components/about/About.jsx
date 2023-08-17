import React from "react";
import "./About.css";

const AboutPage = () => {
  const data = [
    {
      cover: <i className="fa-solid fa-truck-fast"></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-shield"></i>,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i className="fa-solid fa-headset"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <div className="about-container">
      <h1 className="about-heading">Giới thiệu</h1>
      <p>Chào mừng đến với trang giới thiệu!</p>
      <p>
        Chúng tôi là một công ty chuyên cung cấp các sản phẩm và dịch vụ tuyệt
        vời.
      </p>
      <p>
        Hãy khám phá thêm về chúng tôi và những gì chúng tôi có thể mang lại cho
        bạn.
      </p>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
