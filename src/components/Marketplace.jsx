import React from "react";
import MarketplaceImage from "../assets/Hero2.jpeg"; // ✔️ Check that this file actually exists
import styled from "styled-components";

export default function Marketplace() {
  return (
    <Wrapper>
      <div className="marketplace-hero position-relative overflow-hidden">
        <div className="container h-100">
          <div className="row align-items-center min-vh-100 py-5">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12 px-4 px-lg-5">
              <div className="marketplace-hero-content text-white">
                <div className="mb-4">
                  <span className=" parent-title ">Marketplace</span>
                </div>
                <h1 className="marketplace-title">Transcend Marketplace</h1>
                <h2 className="marketplace-subtitle">
                  <em>Connect, configure and innovate</em>
                </h2>
                <p className="marketplace-description">
                  From originations to servicing, experience the most intuitive
                  components in asset finance and leasing.
                </p>
                <div className="mb-4">
                  <button className="hero-buttons btn btn-primary">
                    Learn More <i className="ms-2">→</i>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content (Image) */}
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <img
                src={MarketplaceImage}
                alt="Marketplace Illustration"
                className="img-fluid rounded shadow marketplace-img"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .marketplace-hero {
    background: linear-gradient(135deg, rgb(31, 122, 193), rgb(14, 57, 91));
    min-height: 100vh;
  }
  .parent-title {
    align-items: center;
    background-color: #093454;
    border-radius: 20px;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    line-height: 22.4px;
    padding: 11px 27px;
    text-align: left;
  }
  .letter-spacing {
    letter-spacing: 0.1em;
  }
  .marketplace-subtitle {
    color: #fff;
    display: inline;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
  }
  .marketplace-description {
    color: #fff;
    font-family: "PoppinsRegular", sans-serif;
    font-size: 18px;
    line-height: 32px;
    text-align: left;
  }
  .hero-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-primary {
    background-color: #30d4c7;
    border-color: #30d5c8;
    border-radius: 5px;
    font-size: 14px;
    padding: 14px 28px;
    font-family: "DM Sans", sans-serif;
    transition: 0.3s;
  }
  .btn-primary:hover {
    background-color: #00b894;
    box-shadow: 0 8px 25px rgba(48, 213, 200, 0.5);
    transform: translateY(-2px);
  }

  .marketplace-title {
    color: #fff;
    font-family: "PoppinsSemiBold", sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    padding: 0px 0px 10px;
    text-align: left;
  }

  .marketplace-img {
    width: 80%;
    height: 50vh;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 767.98px) {
    .marketplace-title {
      font-size: 24px;
    }

    .marketplace-img {
      width: 100%;
      height: auto;
      margin-top: 2rem;
    }
  }
`;
