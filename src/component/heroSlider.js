import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import '../css/sliderCustom.css'
import '../css/heroSlider.css';

import { AiOutlineShoppingCart } from "react-icons/ai";
const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed: 500,
    fade: !0,
    cssEase: 'linear',
    autoplaySpeed: 8000,
    draggable: true
    
  };
  


  return (
    <section className="hero">
      <Row>
        <Col md={12}>
          <div className="slider-container">
            <Slider {...settings}>
              
                <div className="heroSlide">
                  <img src="../imgs/hero/map.jpg" alt="hero" />
                  <Container>
                    <Row>
                      <Col md={12}> 
                        <Card className="heroCard">
                          <div className="lineAnimated">
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                          </div>
                          <h1 className="heroTitle"><p className=" slideContent">Map Scanner Upcomming</p> <p className="slideContent">and Get Free Delivery!</p>
                          </h1>
                          <h5 className="sologan"><p className="slideContent">Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting industry. Lorem Ipsum has been the industry's standard dummy</p></h5>
                          <div className="d-flex gap-3 align-items-center mt-5 exploreshopBtn">
                             <a href="" className="itemsBtn btn btn-primary slideContent">
                              <p> <AiOutlineShoppingCart /></p>Explore Shop</a>  
                             <p className="freshProduct slideContent">2500+ Fresh Products</p>
                          </div>
                          
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="heroSlide">
                  <img src="../imgs/hero/map1.png" alt="hero" />
                  <Container>
                    <Row>
                      <Col md={12}> 
                        <Card className="heroCard">
                          <div className="lineAnimated">
                            <span> </span>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                          </div>
                          <h1 className="heroTitle"><p className=" slideContent">Map Scanner Upcomming</p> <p className="slideContent">and Get Free Delivery!</p>
                          </h1>
                          <h5 className="sologan"><p className="slideContent">Lorem Ipsum is simply dummy text of the printing and <br></br>typesetting industry. Lorem Ipsum has been the industry's standard dummy</p></h5>
                          <div className="d-flex gap-3 align-items-center mt-5 exploreshopBtn">
                             <a href="" className="itemsBtn btn btn-primary slideContent">
                              <p> <AiOutlineShoppingCart /></p>Explore Shop</a>  
                             <p className="freshProduct slideContent">2500+ Fresh Products</p>
                          </div>
                          
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
            
            </Slider>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSlider;
