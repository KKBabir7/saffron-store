import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import "../css/sliderCustom.css";
import "../css/brand.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 8000,
    draggable: true,
  };

  return (
    <section className="brand mt-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="slider-container">
              <Slider {...settings}>
                <div className="brandSlide">
                  <Card className="brandCard">
                    <a href="#">
                      <img src="../imgs/brand/brand1-1.png.webp" />
                    </a>
                  </Card>
                </div>
                <div className="brandSlide">
                  <Card className="brandCard">
                    <a href="#">
                      <img src="../imgs/brand/brand2-1.png.webp" />
                    </a>
                  </Card>
                </div>
                <div className="brandSlide">
                  <Card className="brandCard">
                    <a href="#">
                      {" "}
                      <img src="../imgs/brand/brand3.png.webp" />
                    </a>
                  </Card>
                </div>
                <div className="brandSlide">
                  <Card className="brandCard">
                    <a href="#">
                      {" "}
                      <img src="../imgs/brand/brand4-1.png.webp" />
                    </a>
                  </Card>
                </div>
                <div className="brandSlide">
                  <Card className="brandCard">
                    <a href="#">
                      <img src="../imgs/brand/brand5-1.png.webp" />
                    </a>
                  </Card>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
