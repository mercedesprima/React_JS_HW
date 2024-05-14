import React from "react";
import { Link } from "react-router-dom";
import intersectImg from "../img/Intersect.png";
import "../pages/styles.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="subscribe center">
        <div className="subscribe__info">
          <img src={intersectImg} alt="smiling woman" />
          <p className="subscribe__text">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
            <i>a pulvinar purus condimentum</i>“
          </p>
        </div>
        <div className="subscribe__content">
          <h2 className="subscribe__heading">SUBSCRIBE</h2>
          <p className="subscribe__content-text">
            FOR OUR NEWLETTER AND PROMOTION
          </p>
          <form className="subscribe__form" action="#">
            <input
              required
              placeholder="Enter Your Email"
              className="subscribe__input"
              type="email"
            />
            <button className="subscribe__button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <div className="footer__bottom center">
        <p className="footer__bottom__text">
          © 2024 Brand All Rights Reserved.
        </p>
        <div className="icons">
          <Link className="icons__link" to="#">
            <svg
              width={13}
              height={16}
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_128_242)">
                <path
                  d="M6.74032 0.203125C3.55564 0.203125 0.408203 2.34063 0.408203 5.8C0.408203 8 1.63738 9.25 2.38233 9.25C2.68963 9.25 2.86655 8.3875 2.86655 8.14375C2.86655 7.85313 2.13091 7.23438 2.13091 6.025C2.13091 3.5125 4.03055 1.73125 6.4889 1.73125C8.60271 1.73125 10.1671 2.94062 10.1671 5.1625C10.1671 6.82187 9.50597 9.93437 7.36422 9.93437C6.59133 9.93437 5.93018 9.37188 5.93018 8.56563C5.93018 7.38438 6.74963 6.24062 6.74963 5.02187C6.74963 2.95312 3.835 3.32812 3.835 5.82812C3.835 6.35312 3.90018 6.93437 4.13298 7.4125C3.70463 9.26875 2.82931 12.0344 2.82931 13.9469C2.82931 14.5375 2.91311 15.1188 2.96899 15.7094C3.07452 15.8281 3.02175 15.8156 3.18316 15.7563C4.74757 13.6 4.69169 13.1781 5.3994 10.3562C5.78119 11.0875 6.76826 11.4812 7.55046 11.4812C10.8469 11.4812 12.3275 8.24688 12.3275 5.33125C12.3275 2.22813 9.66427 0.203125 6.74032 0.203125Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_128_242">
                  <rect
                    width="11.9193"
                    height={16}
                    fill="white"
                    transform="translate(0.408203)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link className="icons__link" a="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={16}
              viewBox="0 0 17 16"
              fill="none"
            >
              <g clipPath="url(#clip0_190_1614)">
                <path
                  d="M14.4181 4.74107C14.4281 4.88319 14.4281 5.02535 14.4281 5.16747C14.4281 9.50247 11.1509 14.4974 5.16096 14.4974C3.31558 14.4974 1.60132 13.9593 0.159302 13.0253C0.421495 13.0558 0.673569 13.0659 0.94585 13.0659C2.46851 13.0659 3.8702 12.5482 4.98953 11.6649C3.5576 11.6345 2.3576 10.6903 1.94415 9.39081C2.14585 9.42125 2.34751 9.44156 2.5593 9.44156C2.85172 9.44156 3.14418 9.40094 3.41643 9.32991C1.92401 9.02531 0.80465 7.70553 0.80465 6.11163V6.07103C1.23825 6.31469 1.74249 6.46697 2.2769 6.48725C1.39959 5.89841 0.824826 4.89335 0.824826 3.75628C0.824826 3.14716 0.98614 2.58878 1.26851 2.10147C2.87187 4.09131 5.28195 5.39078 7.98443 5.53294C7.93403 5.28928 7.90376 5.0355 7.90376 4.78169C7.90376 2.97457 9.35586 1.5025 11.1609 1.5025C12.0987 1.5025 12.9457 1.89844 13.5407 2.53803C14.2768 2.39591 14.9827 2.12178 15.6079 1.74616C15.3659 2.5076 14.8516 3.14719 14.176 3.55325C14.8315 3.48222 15.4668 3.29944 16.0516 3.04566C15.608 3.69538 15.0533 4.27403 14.4181 4.74107Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_190_1614">
                  <rect
                    width="15.8924"
                    height={16}
                    fill="white"
                    transform="translate(0.159302)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
