import React, { useEffect, useState } from "react";

import { Card, Col, Container, Row } from "react-bootstrap";

import ProductCard from "./productCard";
import "../css/offerProduct.css";

const OfferProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 27) {
        closeVideo();
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <section className="mt-5 offerProduct">
        <Container>
          <Row>
            <Col md={3}>
              <div className="offerProductCard">
                <Card>
                  <div className="offercardImg">
                    <img src="../imgs/offer/1.jpg" />
                  </div>
                  <div className="offercardDes">
                    <h3>MAp Scanner 01</h3>
                    <p>
                      Discount <span>15% off</span>
                    </p>
                    <a className="btn btn-primary" href="">
                      Shop Now
                    </a>
                  </div>
                </Card>
              </div>
              <div className="offerProductCard">
                <Card>
                  <div className="offercardImg">
                    <img src="../imgs/offer/1.jpg" />
                  </div>
                  <div className="offercardDes">
                    <h3>MAp Scanner 01</h3>
                    <p>
                      Discount <span>15% off</span>
                    </p>
                    <a className="btn btn-primary" href="">
                      Shop Now
                    </a>
                  </div>
                </Card>
              </div>
            </Col>
            <Col md={6} style={{marginTop: '20px'}}>
              <Card>
                <div className="videoposter">
                    <img src="../imgs/offer/2.jpg"/>
                </div>
                
                <div>
                  <a
                    id="play-video"
                    className="video-play-button"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openVideo();
                    }}
                  >
                    <span></span>
                  </a>

                  <div
                    id="video-overlay"
                    className={`video-overlay ${isOpen ? "open" : ""}`}
                  >
                    <a
                      className="video-overlay-close"
                      onClick={(e) => {
                        e.preventDefault();
                        closeVideo();
                      }}
                    >
                      &times;
                    </a>
                    {isOpen && (
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ngElkyQ6Rhs"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="oferselertop" style={{marginTop: '20px'}}>
              <Card>
                 <img src="../imgs/offer/4.webp" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default OfferProduct;
