import React from "react";

function Product(props) {
  return (
    <div className="product-shoe-info shoe">
      <div className="men-thumb-item">
        <img src={props.Image} className="img-fluid" alt="" />
      </div>
      <div className="item-info-product">
        <h4>
          <a href="single.html">{props.Name} </a>
        </h4>

        <div className="product_price">
          <div className="grid-price">
            <span className="money">
              <span className="line">{props.Price}</span>{" "}
              {props.DiscountedPrice}
            </span>
          </div>
        </div>
        <ul className="stars">
          <li>
            <a href="#">
              <span className="fa fa-star" aria-hidden="true"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-star" aria-hidden="true"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-star-half-o" aria-hidden="true"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-star-half-o" aria-hidden="true"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-star-o" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
