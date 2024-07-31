import React, { useEffect, useState } from "react";

import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";

import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <section className="mt-5 footer">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footersub1">
                <h4>CONTACT INFOMATION</h4>
                <p>Call Us 24/7 Free</p>
                <p>01889435435</p>
                <p>Support@domain.com</p>
                <p>Rupayn Selfport, Symoli, Dhaka</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="footersub2 footersuball">
                <h4>COMPANY</h4>
                <p>
                  <a href="">About Us</a>
                </p>
                <p>
                  <a href="">Shop Products</a>
                </p>
                <p>
                  <a href="">My Cart</a>
                </p>
                <p>
                  <a href="">Checkout</a>
                </p>
                <p>
                  <a href="">Contact Us</a>
                </p>
                <p>
                  <a href="">Order Tracking</a>
                </p>
              </div>
            </Col>
            <Col md={2}>
              <div className="footersub3 footersuball">
                <h4>EXPLORE</h4>
                <p>
                  <a href="">Gift a Smile</a>
                </p>
                <p>
                  <a href="">Creybit Cares</a>
                </p>
                <p>
                  <a href="">Size Guide</a>
                </p>
                <p>
                  <a href="">F.A.Q.’s</a>
                </p>
                <p>
                  <a href="">Privacy Policy</a>
                </p>
                <p>
                  <a href="">Store Location</a>
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="footersub4 footersuball">
                <h4>OUR LOCATION</h4>
                <img src="../imgs/footer/1.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="paymentoptionList">
        <Container>
          <Row>
            <Col md={12}>
              <Card>
                <div className="payulske">
                  Copyright © 2022 saffron. All rights reserved.
                </div>
                <div className="allpaymentCard">
                  <ul className="p-0 m-0">
                    <li>
                       <a href=""><img src="../imgs/footer/visa-mastercard-paypal.png" /></a>
                    </li>
                    
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Footer;
