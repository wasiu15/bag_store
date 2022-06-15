import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import Shop from "./pages/shop";
import Header from "./pages/header";
import Footer from "./pages/footer";

class Routes extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div class="main-sec inner-page">
            <Header />
          </div>
          <Router>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="contact/" element={<Contact />}></Route>
            <Route path="shop/" element={<Shop />}></Route>
            <Route path="login/" element={<Login />}></Route>
            <Route path="register/" element={<Register />}></Route>
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
