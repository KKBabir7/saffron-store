import React, { useEffect, useState } from "react";

import { Card, Col, Container, Row } from "react-bootstrap";

import "../css/specialOffer.css";

const specialOffer = () => {
  return (
    <>
      <section className="mt-5 specialOffer">
        <Container>
          <Row>
            <Col md={12}>
              <div className="specialOfferCard">
                <Card>
                 
                  <div className="specialOffercardDes">
                    <h3>LATEST & SPECIAL BRANDS</h3>
                    
                    <a className="btn btn-primary" href="">
                      Shop Now
                    </a>
                  </div>
                </Card>
                <div class="badge">
                  <div class="badge__label">40%
                      <br></br>OFF
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default specialOffer;
