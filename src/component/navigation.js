import React, { useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  BsSearch,
  BsFillPersonFill,
  BsUiRadiosGrid,
  BsHouseDoor,
  BsNut,
  BsNewspaper,
  BsListNested,
  BsPatchQuestion,
  BsTelephonePlus,
  
} from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

import TopNavbar from "./topNavbar";
import "../css/nav.css";

// Initial state
const initialState = {
  logo: "",
  menu: [],
  signMenu: { name: "", linkmenus: "" },
  logMenu: { name: "", linkmenus: "" },
  loading: true,
  error: null,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        logo: action.payload.logo,
        menu: action.payload.menu,
        signMenu: action.payload.signMenu,
        logMenu: action.payload.logMenu,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const iconMapping = {
  BsHouseDoor: <BsHouseDoor />,
  BsNut: <BsNut />,
  BsNewspaper: <BsNewspaper />,
  BsListNested: <BsListNested />,
  BsPatchQuestion: <BsPatchQuestion />,
  BsTelephonePlus: <BsTelephonePlus />,
};
const Navigation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchNavigationData = async () => {
      try {
        const response = await fetch("../api/navigationData.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: { error } });
      }
    };

    fetchNavigationData();
  }, []);

  const { logo, menu, signMenu, logMenu, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <TopNavbar />
      <Navbar
        expand="md"
        className="bg-body-tertiary searchbar-navbar"
        sticky="top"
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100 gap-5">
            <Navbar.Brand href="#">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Form className="d-flex w-100 search-block">
              <Form.Control
                type="search"
                placeholder="Search"
                className=""
                aria-label="Search"
              />
              <Button variant="outline-success">
                <BsSearch />
              </Button>
            </Form>
            <div className="login-signin-cart d-flex align-items-center justify-content-center gap-5 ">
              <div className="cart-block d-flex align-items-center justify-content-center gap-4">
                <p>
                  {" "}
                  <AiOutlineHeart />
                  <span>20</span>
                </p>
                <p>
                  <AiOutlineShoppingCart />
                  <span>20</span>
                </p>
              </div>
              <div className="login-signin-block d-flex align-items-center justify-content-center w500 ">
                <p>
                  <BsFillPersonFill />{" "}
                </p>
                <Nav.Link href={signMenu.linkmenus}>{signMenu.name}</Nav.Link>
                &nbsp;/&nbsp;
                <Nav.Link href={logMenu.linkmenus}>{logMenu.name}</Nav.Link>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
      <Navbar expand="md" className="bg-body-tertiary main-navbar-menu">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="d-flex align-items-center justify-content-center gap-2 w-100"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menu.map((menuItem, index) => {
                if (menuItem.items) {
                  return (
                    <NavDropdown
                      className="catagory-block"
                      title={
                        <>
                          {<BsUiRadiosGrid />} {menuItem.name}
                        </>
                      }
                      id={`navbarScrollingDropdown${index}`}
                      key={index}
                    >
                      {menuItem.items.map((subItem, subIndex) => (
                        <NavDropdown.Item
                          href={subItem.linkmenus}
                          key={subIndex}
                        >
                          {subItem.name}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                }
                return (
                  <Nav.Link href={menuItem.linkmenus} key={index}>
                    {menuItem.icon && iconMapping[menuItem.icon]}{" "}
                    {menuItem.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
