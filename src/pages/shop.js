import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "./product";

function Shop() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    axios
      .get("https://localhost:44371/api/bags")
      .then((response) => setPosts(response.data));
  });
  return (
    <div>
      <section className="banner-bottom py-5">
        <div className="container py-5">
          <h3 className="title-wthree mb-lg-5 mb-4 text-center">Shop Now</h3>

          <div className="row shop-wthree-info text-center">
            <div className="row shop-wthree-info text-center mb-5">
              {posts.map((post) => (
                <Product
                  key={post.id}
                  Image={post.image}
                  Name={post.name}
                  Price={post.price}
                  DiscountedPrice={post.discountedPrice}
                />
              ))}
            </div>
          </div>
          <nav aria-label="Page navigation example mt-5">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="newsletter-w3pvt py-5">
        <div className="container py-md-5">
          <form method="post" action="#">
            <p className="text-center">
              Subscribe to the Handbags Store mailing list to receive updates on
              new arrivals, special offers and other discount information.
            </p>
            <div className="row subscribe-sec">
              <div className="col-md-9">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email.."
                  name="email"
                  required=""
                />
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn submit">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="shipping-wthree">
        <div className="shiopping-grids d-lg-flex">
          <div className="col-lg-4 shiopping-w3pvt-gd text-center">
            <div className="icon-gd">
              <span className="fa fa-truck" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>FREE SHIPPING</h3>
              <p>On all order over $2000</p>
            </div>
          </div>
          <div className="col-lg-4 shiopping-w3pvt-gd sec text-center">
            <div className="icon-gd">
              <span className="fa fa-bullhorn" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>FREE RETURN</h3>
              <p>On 1st exchange in 30 days</p>
            </div>
          </div>
          <div className="col-lg-4 shiopping-w3pvt-gd text-center">
            <div className="icon-gd">
              {" "}
              <span className="fa fa-gift" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>MEMBER DISCOUNT</h3>
              <p>Register &amp; save up to $29%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Shop;
