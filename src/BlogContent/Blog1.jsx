import React from "react";
import { Link } from "react-router-dom";
import NavbarTwo from "../components/NavbarTwo";
import Footer from "../components/Footer";
import styled from "styled-components";
import blogImage from "../assets/blog1.jpeg";

const Blog1 = () => {
  return (
    <Wrapper className="blog-page">
      <NavbarTwo />
      <div className="container blog-container pb-5 mt-4">
        {/* Back to Blog Link */}
        <div className="hero-buttons1 mt-3">
          <Link to="/blog" className="btn btn-primary1">
            Back To Blog
          </Link>
        </div>

        {/* Blog Hero Image */}
        <div className="card mb-4 border-0 rounded-4 overflow-hidden shadow-sm">
          <img src={blogImage} alt="Trucking" className="card-img-top" />
        </div>

        {/* Meta Info */}
        <div className="d-flex flex-wrap gap-3 mb-3 align-items-center">
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
            Industry Insights
          </span>
          <div className="d-flex align-items-center text-secondary">
            📅 July 22, 2023
          </div>
          <div className="d-flex align-items-center text-secondary">
            👤 Sarah Johnson
          </div>
        </div>

        {/* Blog Title */}
        <h1 className="text-heading mb-4">
          5 Strategies for Maximizing Profits in the Trucking Industry
        </h1>

        {/* Blog Content */}
        <div className="text-paragraph">
          The trucking industry is highly competitive...
        </div>

        <section className="mb-4">
          <h2 className="text-heading fs-5">1. Optimize Fuel Efficiency</h2>
          <ul>
            <li className="text-paragraph">
              Use fuel-efficient vehicles and maintain them regularly.
            </li>
            <li className="text-paragraph">
              Train drivers on eco-driving techniques.
            </li>
            <li className="text-paragraph">
              Plan routes to minimize distance and traffic.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-heading fs-5">2. Leverage Technology</h2>
          <ul>
            <li className="text-paragraph">GPS tracking and optimization software.</li>
            <li className="text-paragraph">Electronic logging devices (ELDs).</li>
            <li className="text-paragraph">Fleet management systems.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-heading fs-5">3. Build Strong Broker Relationships</h2>
          <ul>
            <li className="text-paragraph">Communicate and build trust.</li>
            <li className="text-paragraph">Negotiate better rates.</li>
            <li className="text-paragraph">Diversify your network.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-heading fs-5">4. Reduce Empty Miles</h2>
          <ul>
            <li className="text-paragraph">Use load boards wisely.</li>
            <li className="text-paragraph">Seek round-trip opportunities.</li>
            <li className="text-paragraph">Maximize loaded miles.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-heading fs-5">5. Focus on Driver Retention</h2>
          <ul>
            <li className="text-paragraph">Offer good pay and benefits.</li>
            <li className="text-paragraph">Provide a good work environment.</li>
            <li className="text-paragraph">Reward good performance.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="text-heading fs-5">Conclusion</h2>
          <p className="text-paragraph">
            Implementing these strategies can boost profitability...
          </p>
        </section>

        {/* Tags */}
        <div className="d-flex flex-wrap gap-2 mb-5">
          {[
            "Trucking Profits",
            "Fuel Efficiency",
            "Broker Relationships",
            "Driver Retention",
            "Logistics",
          ].map((tag, idx) => (
            <span
              key={idx}
              className="badge bg-light text-secondary border px-3 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Blog1;

const Wrapper = styled.div`
  padding-top: 5%;

  .blog-container {
    max-width: 850px;
    margin: auto;
  }

  .text-heading {
    color: #010412;
    font-family: "PoppinsBold", sans-serif;
    font-size: 36px;
    font-weight: 500;
    position: relative;
  }

  .text-paragraph {
    font-family: "Poppins", sans-serif;
    font-size: 17.6px;
    line-height: 32px;
    margin: 15.9px 0;
    text-align: left;
    color: #010412;
  }

  .hero-buttons1 {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .btn-primary1 {
    color: white;
    background-color: #30d4c7;
    border-color: #30d5c8;
    border-radius: 5px;
    font-size: 14px;
    padding: 14px 28px;
    font-family: "DM Sans", sans-serif;
    transition: 0.3s;

    &:hover {
      background-color: #00b894;
      box-shadow: 0 8px 25px rgba(48, 213, 200, 0.5);
      transform: translateY(-2px);
      color: white;
    }
  }

  .card-img-top {
    max-height: 400px;
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: 768px) {
    .text-heading {
      font-size: 28px;
    }

    .text-paragraph {
      font-size: 16px;
      line-height: 30px;
    }
  }
`;
