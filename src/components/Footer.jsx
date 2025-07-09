import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
    <footer className="custom-footer">
      <div className="container text-md-start">
        <div className="row gy-5">

          {/* Branding */}
          <div className="col-md-3 col-6">
            <h5 className="footer-title">Softsol</h5>
            <ul className="footer-links">
              <li><a href="#">Why Softsol</a></li>
              <li><a href="#">Board Of Directors</a></li>
              <li><a href="#">Management Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-md-2 col-6">
            <h6 className="footer-heading">Products</h6>
            <ul className="footer-links">
              <li><a href="#">Transcend Platform</a></li>
              <li><a href="#">Digital Retail</a></li>
              <li><a href="#">Intermediary Portals</a></li>
              <li><a href="#">Originations</a></li>
              <li><a href="#">Servicing</a></li>
              <li><a href="#">Wholesale Finance</a></li>
              <li><a href="#">Mobility Solutions</a></li>
            </ul>
          </div>

          {/* Consultancy */}
          <div className="col-md-2 col-6">
            <h6 className="footer-heading">Consultancy</h6>
            <ul className="footer-links">
              <li><a href="#">Information Security</a></li>
              <li><a href="#">Digital Solutions</a></li>
              <li><a href="#">AI, ML & Data Analytics</a></li>
              <li><a href="#">Generative AI</a></li>
              <li><a href="#">Emerging Technologies</a></li>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">Data Engineering</a></li>
            </ul>
          </div>

          {/* Insights */}
          <div className="col-md-2 col-6">
            <h6 className="footer-heading">Insights</h6>
            <ul className="footer-links">
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Industries</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h6 className="footer-heading">Contact Us</h6>
            <p className="mb-1 fw-semibold">Corporate Headquarters</p>
            <p className="small">
              16000 Ventura Blvd, Suite 770 <br /> Encino, CA 91436, USA
            </p>
            <p className="small">Phone: +1 818 222 9195</p>
            <div className="footer-social-icons mt-3">
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-light opacity-25 my-4" />

        <div className="text-center small">
          <p className="mb-1">© 2025 Softsol Technologies. All Rights Reserved.</p>
          <p>
            <a href="#">Terms of Use</a> |
            <a href="#"> Privacy Policy</a> |
            <a href="#"> Modern Slavery Act</a>
          </p>
        </div>
      </div>
    </footer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
.custom-footer {
  background: linear-gradient(135deg, rgb(31, 122, 193), rgb(14, 57, 91));
  color: #ffffff;
  padding-top: 4rem;
  padding-bottom: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.footer-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #30d5c8;
 font-family: "DM Sans", sans-serif;
  margin-bottom: 1rem;
}

.footer-heading {
  font-size: 1rem;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #30d5c8;
  text-decoration: underline;
}

.footer-social-icons a {
  margin-right: 15px;
  color: #cbd5e1;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.footer-social-icons a:hover {
  color: #30d5c8;
  transform: scale(1.2);
}

footer p a {
  color: #94a3b8;
  text-decoration: none;
  margin: 0 5px;
}

footer p a:hover {
  color: #30d5c8;
}

`;