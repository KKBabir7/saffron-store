import React, { useEffect, useState } from "react";

import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {BsFacebook,BsInstagram ,BsYoutube ,BsLinkedin  } from "react-icons/bs";

import "../css/newsLatter.css";

const NewsLatter = () => {
  return (
    <>
      <section className="mt-5 newsLatter">
        <Container>
          <Row>
            <Col md={12}>
              <Card >
                <div className="signunote">Signup for newslatter</div>
                <div className="">
                  <InputGroup className="fromSubmition">
                    <Form.Control
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">
                      SUBSCRIBE
                    </InputGroup.Text>
                  </InputGroup>
                </div>
                <div className="scoileApp">
                    <ul className="p-0 m-0">
                        <li><a href=""><BsFacebook /></a></li>
                        <li><a href=""><BsInstagram  /></a></li>
                        <li><a href=""><BsYoutube   /></a></li>
                        <li><a href=""><BsLinkedin   /></a></li>
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
export default NewsLatter;
