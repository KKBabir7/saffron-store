import React, { useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsHeadset } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
const TopNavbar = () => {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary topHeader-navbar">
        <Container>
          
            <div className="w-100">
              <div className="topheader-content d-flex align-items-center justify-content-between w-100 gap-3">
                <div className=" d-flex align-items-center justify-content-between gap-2">
                  <p>Welcome to out store</p>
                  <p>FREE SHIPPING FOR ALL ORDERS OF $150</p>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <p>
                    <BsHeadset /> <span>0123456778</span>
                  </p>

                  <DropdownButton id="dropdown-basic-button" title="English">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
          
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
