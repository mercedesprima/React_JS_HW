import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import product1 from "../img/product1.jpg";
import product2 from "../img/product7.jpg";
import product3 from "../img/product3.jpg";
import product4 from "../img/product4.jpg";
import product5 from "../img/product8.jpg";
import product6 from "../img/product9.jpg";
import product7 from "../img/product10.jpg";
import product8 from "../img/product11.jpg";
import product9 from "../img/product12.jpg";
import advantagesTruck from "../img/advantages__truck.svg";
import advantagesPercent from "../img/advantages__percent.svg";
import advantagesCrown from "../img/advantages__crown.svg";
import "./styles.css";

function Catalog() {
  const products = [
    {
      img: product1,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "XS",
    },
    {
      img: product2,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "M",
    },
    {
      img: product3,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "L",
    },
    {
      img: product4,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "S",
    },
    {
      img: product5,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "L",
    },
    {
      img: product6,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "XS",
    },
    {
      img: product7,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "S",
    },
    {
      img: product8,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "M",
    },
    {
      img: product9,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "L",
    },
  ];

  const [selectedSize, setSelectedSize] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedSize === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.size === selectedSize)
      );
    }
  }, [selectedSize]);

  return (
    <div>
      <Header />
      <section className="breadcrumbs center">
        <h2 className="breadcrumbs__heading">NEW ARRIVALS</h2>
        <nav>
          <ul className="breadcrumbs__nav">
            <li className="breadcrumbs__list">
              <a className="breadcrumb__link" href="index.html">
                HOME
              </a>
            </li>
            <li className="breadcrumbs__list">
              <a className="breadcrumb__link" href="#">
                MEN
              </a>
            </li>
            <li className="breadcrumbs__list">
              <a className="breadcrumb__link" href="#">
                NEW ARRIVALS
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="filter-sort center">
        <div className="filter-box">
          <details className="filter">
            <summary className="filter__summary">
              FILTER
              <svg
                className="filter__img"
                width={15}
                height={10}
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                  fill="black"
                />
              </svg>
            </summary>
            <div className="filter__content">
              <details className="filter__category" open>
                <summary className="filter__category-summary">CATEGORY</summary>
                <div className="filter__box">
                  <a className="filter__link">Accessories</a>
                  <a className="filter__link">Bags</a>
                  <a className="filter__link">Denim</a>
                  <a className="filter__link">Hoodies &amp; Sweatshirts</a>
                  <a className="filter__link">Jackets &amp; Coats</a>
                  <a className="filter__link">Polos</a>
                  <a className="filter__link">Shirts</a>
                  <a className="filter__link">Shoes</a>
                  <a className="filter__link">Sweaters &amp; Knits</a>
                  <a className="filter__link">T-Shirts</a>
                  <a className="filter__link">Tanks</a>
                </div>
              </details>
              <details className="filter__category">
                <summary className="filter__category-summary">BRAND</summary>
                <div className="filter__box">
                  <a className="filter__link">Brand 1</a>
                  <a className="filter__link">Brand 2</a>
                  <a className="filter__link">Brand 3</a>
                  <a className="filter__link">Brand 4</a>
                  <a className="filter__link">Brand 5</a>
                  <a className="filter__link">Brand 6</a>
                  <a className="filter__link">Brand 7</a>
                  <a className="filter__link">Brand 8</a>
                  <a className="filter__link">Brand 9</a>
                  <a className="filter__link">Brand 10</a>
                  <a className="filter__link">Brand 11</a>
                </div>
              </details>
              <details className="filter__category">
                <summary className="filter__category-summary">DESIGNER</summary>
                <div className="filter__box">
                  <a className="filter__link">Designer 1 </a>
                  <a className="filter__link">Designer 2 </a>
                  <a className="filter__link">Designer 3 </a>
                  <a className="filter__link">Designer 4 </a>
                  <a className="filter__link">Designer 5 </a>
                  <a className="filter__link">Designer 6 </a>
                  <a className="filter__link">Designer 7 </a>
                  <a className="filter__link">Designer 8 </a>
                  <a className="filter__link">Designer 9 </a>
                  <a className="filter__link">Designer 10 </a>
                  <a className="filter__link">Designer 11 </a>
                </div>
              </details>
            </div>
          </details>
        </div>
        <div className="sort">
          <details className="sort__details">
            <summary className="sort__summary">
              <span className="sort__heading">TRENDING NOW</span>
              <svg
                width={11}
                height={5}
                viewBox="0 0 11 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
          </details>
          <select
            className="sort"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="All">SIZE</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <details className="sort__details">
            <summary className="sort__summary">
              <span className="sort__heading">PRICE</span>
              <svg
                width={11}
                height={5}
                viewBox="0 0 11 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
          </details>
        </div>
      </div>
      <div className="product-box center">
        <div className="product-box__content">
          {filteredProducts.map((product, index) => (
            <div className="product" key={index}>
              <Link to="/product">
                <img className="product__img" src={product.img} alt="product" />
                <div className="product__content">
                  <Link to="/product" className="product__heading">
                    {product.title}
                  </Link>
                  <span> Size: {product.size}</span>
                  <p className="product__text">{product.text}</p>
                  <p className="product__price">{product.price}</p>
                </div>
                <Link to="#" className="product__add">
                  Add to Cart
                </Link>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <section class="pagination center">
        <nav class="pagination__box">
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z"
              fill="black"
            />
          </svg>

          <div class="pagination__items">
            <Link class="pagination__link" to="#">
              1
            </Link>
            <Link class="pagination__link" to="#">
              2
            </Link>
            <Link class="pagination__link" to="#">
              3
            </Link>
            <Link class="pagination__link" to="#">
              4
            </Link>
            <Link class="pagination__link" to="#">
              5
            </Link>
            <Link class="pagination__link" to="#">
              6.....20
            </Link>
          </div>

          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
              fill="black"
            />
          </svg>
        </nav>
      </section>
      <div className="advantages center">
        <article className="advantages__item">
          <img src={advantagesTruck} alt="truck" className="advantages__img" />
          <h3 className="advantages__heading">Free Delivery</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img
            src={advantagesPercent}
            alt="percent"
            className="advantages__img"
          />
          <h3 className="advantages__heading">Sales & discounts</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img src={advantagesCrown} alt="crown" className="advantages__img" />
          <h3 className="advantages__heading">Quality assurance</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default Catalog;
