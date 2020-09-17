import React from "react";

//styles
import '../Styles/_footer.scss';

export default function Footer() {
    return (
          <div className="footer-container">
                  <div className="title">
                      <span>MOUNIER |</span>
                      <p>
                        Founded in 1993, Mounier is an elegant street fashion brand based in Paris, France, with locations in 7 cities, 4 countries and growing.
                      </p>
                  </div>
                  <div className="links">
                    <h4>Links</h4>
                  <ul>
                      <li>
                          <a href="/">Home</a>
                      </li>
                      <li>
                          <a href="/shop">Shop</a>
                      </li>
                      <li>
                          <a href="/lookbook">Lookbook</a>
                      </li>
                      <li>
                          <a href="/contact">Contact</a>
                      </li>
                  </ul>
                  </div>
                  <div className="faq">
                    <ul>
                      <li>
                        <a href="/">Help</a>
                      </li>
                      <li>
                        <a href="/">FAQ</a>
                      </li>
                      <li>
                        <a href="/">Privacy & Terms</a>
                      </li>
                    </ul>
                    <div className="copyright">
                      <p>
                        &#169; Mounier LLC 2020
                      </p>
                    </div>
                  </div>
        </div>
  );
}