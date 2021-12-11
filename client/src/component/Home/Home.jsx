import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import MetaData from './../layouts/MetaData';

const product = {
    name: "macbook",
    images: [{ url: "https://media.congluan.vn/files/huyhoang/2020/12/19/macbook-air-m1-bi-khoi-dong-lai-1-1527.jpg"}],
    price: "$3200",
    _id:"taodx"
}

const Home = () => {
    return (
        <Fragment>
            <MetaData title="Dang test" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
          <ProductCard product={product} />
          </div>
    </Fragment>
    )
}

export default Home
