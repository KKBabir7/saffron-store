import React, { useEffect, useState } from "react";

import { Card, Col, Container, Nav, Row } from "react-bootstrap";

import "../css/categories.css";
const Categories = () => {
  return (
    <>
    <section className="mt-5 categories">
       <Container >
        <Row>
          <Col md={3}>
            <Card>
                <Nav.Link href="#">
                   <img src="../imgs/category/1.png" />
                   <h3>Scanner</h3>
                </Nav.Link>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
               <Nav.Link href="#">
                  <img src="../imgs/category/2.png" />
                  <h3>Printer</h3>
               </Nav.Link>
            </Card>
          </Col>
          <Col md={3 }>
            <Card>
               <Nav.Link href="#">
               <img src="../imgs/category/3.png" />
               <h3>Drone</h3>
               </Nav.Link>
            </Card>
          </Col>
          <Col md={3 }>
            <Card>
               <Nav.Link href="#">
               <img src="../imgs/category/4.png" />
               <h3>Software</h3>
               </Nav.Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
     
    </>
  );
};
export default Categories;
