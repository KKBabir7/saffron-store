import React, { useEffect, useState } from "react";

import { Card, Col, Container, Row } from "react-bootstrap";
import { BsHandThumbsUp,BsCashCoin,BsCoin,BsTruck   } from "react-icons/bs";


import "../css/facilities.css";

const Facilities = () => {
  return (
    <>
      <section className="mt-5 facilities">
        <Container>
          <Row>
            <Col md={3}>
              <div className="facilitiesCard">
                <Card>
                  <div className="facilitiesImg">
                       <BsHandThumbsUp />
                  </div>
                  <div className="facilitiesCardDes">
                    <h3>100%<br></br>SATISFACTION</h3>
                   <p>If you are unable</p>
                  </div>
                </Card>
                
              </div>
            </Col>
            <Col md={3}>
              <div className="facilitiesCard">
                <Card >
                  <div className="facilitiesImg">
                  
                  <BsCoin />
                  </div>
                  <div className="facilitiesCardDes">
                  <h3>SAVE 20%<br></br>WHEN YOU</h3>
                   <p>Use credit card</p>
                  </div>
                </Card>
                
              </div>
            </Col>
            <Col md={3}>
              <div className="facilitiesCard">
                <Card>
                  <div className="facilitiesImg">
                       <BsTruck  />
                  </div>
                  <div className="facilitiesCardDes">
                  <h3>FAST FREE<br></br>SHIPMENT</h3>
                   <p>Load any computer’s</p>
                  </div>
                </Card>
                
              </div>
            </Col>
            <Col md={3}>
              <div className="facilitiesCard">
                <Card className="borderleft">
                  <div className="facilitiesImg">
                  <BsCashCoin />
                  </div>
                  <div className="facilitiesCardDes">
                  <h3>60-DAY<br></br>MONEY BACK</h3>
                   <p>If you are unable</p>
                  </div>
                </Card>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Facilities;
