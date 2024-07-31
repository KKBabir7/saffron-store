import React, { useEffect, useState } from "react";

import {  Col, Container,  Row } from "react-bootstrap";
import { FcPaid } from "react-icons/fc";


import ProductCard from "./productCard";
import "../css/weekdeal.css";
import CountdownTimer from "./sevenDayesTimer";

const WeekDeal = () => {
  return (
    <>
      <section className="title-weekdeal title-section mt-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center d-flex align-items-center justify-content-center flex-column">
                <h2>THIS WEEK'S DEALS</h2>
                <p>
                  {" "}
                  <FcPaid />{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-5 weekdeal">
        <div className="weekdealBgImage">
          <img src="../imgs/weekdeal/1.jpg" />
        </div>
        <Container>
          <Row>
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
          </Row>
          <Row>
             <Col md={12}>
                <CountdownTimer />
             </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default WeekDeal;
