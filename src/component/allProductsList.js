import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FcPaid } from "react-icons/fc";
import ProductCard from "./productCard";

import "../css/allProductList.css";

function ControlledTabs() {
  const [key, setKey] = useState("latestProduct");

  return (
    <>
      <section className="title-weekdeal title-section mt-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center d-flex align-items-center justify-content-center flex-column">
                <h2>TOP PRODUCTS</h2>
                <p>
                  <FcPaid />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-4 allProductList">
        <Container>
          <Row>
            <Col md={12}>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="latestProduct" title="Latest Product">
                  <div className="mt-4 allProductListproductCard ">
                    <Row>
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey="topRating" title="Top Rating">
                  <div className="mt-4 allProductListproductCard ">
                    <Row>
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                     
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey="bestSelling" title="Best Selling">
                  <div className="mt-4 allProductListproductCard ">
                    <Row>
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                     
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey="feature" title="Feature">
                  <div className="mt-4 allProductListproductCard ">
                    <Row>
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                      <ProductCard />
                    </Row>
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ControlledTabs;
