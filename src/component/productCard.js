import React, { useEffect, useState } from "react";

import { Card, Col } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { BsArrowRight, BsRepeat, BsEye, BsHeart } from "react-icons/bs";

import "../css/productCard.css";
const ProductCard = () => {
  return (
    <>
      <Col md={3}>
        <Card className="productCard">
          <div className="productsThumb">
            <a href="" className="productsThumbLink">
              <div className="productLable">
                <span class="onsale">-13%</span>
              </div>
              <div className="productImg">
                <img src="../imgs/product/1.png" />
              </div>
              <div className="productMenuList">
                <ul>
                  <li>
                    <BsArrowRight />
                  </li>
                  <li>
                    <BsRepeat />
                  </li>
                  <li>
                    <BsHeart />
                  </li>
                  <li>
                    <BsEye />
                  </li>
                </ul>
              </div>
            </a>
          </div>
          <div className="productCaption">
            <div className="ProductReview">
              <div className="ratings mt-1 d-flex align-items-center gap-2">
                <div className="rating-stars">
                  <ul id="stars">
                    <li className="star" title="Poor" data-value="1">
                      <FaStar style={{ color: "var(--ratingStar)" }} />
                    </li>
                    <li className="star" title="Fair" data-value="2">
                      <FaStar style={{ color: "var(--ratingStar)" }} />
                    </li>
                    <li className="star" title="Good" data-value="3.5">
                      <FaStarHalfAlt style={{ color: "var(--ratingStar)" }} />
                    </li>
                    <li className="star" title="Excellent" data-value="4">
                      <FaRegStar style={{ color: "var(--ratingColorNone)" }} />
                    </li>
                    <li className="star" title="WOW!!!" data-value="5">
                      <FaRegStar style={{ color: "var(--ratingColorNone)" }} />
                    </li>
                  </ul>
                </div>
                <p className="p-0 m-0 mt-1 starratingtext">(45)</p>
              </div>
            </div>
            <div className="productName ">
              <a href="">
                <h3>Printer-0012</h3>
              </a>
            </div>
            <div className="productPrize">
              <h4>$30-$46</h4>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};
export default ProductCard;
