import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Static image imports (React me aise hi import hoti hain)
import sylider1 from "../assets/sylider1.jpg";
import sylider2 from "../assets/sylider2.jpg";
import sylider3 from "../assets/sylider3.jpg";
import sylider4 from "../assets/sylider4.jpg";
import sylider5 from "../assets/sylider5.jpg";
import sylider6 from "../assets/sylider6.jpg";
import sylider7 from "../assets/sylider7.jpg";
import sylider8 from "../assets/sylider8.jpg";
import sylider9 from "../assets/sylider9.jpg";

const images = [
  sylider1,
  sylider2,
  sylider3,
  sylider4,
  sylider5,
  sylider6,
  sylider7,
  sylider8,
  sylider9,
];

export default function Swipper1() {
  return (
    <Wrapper>
      <div className="swipper1-parent">
        <div className="swipper-section">
          <h1 className="swipper1-title">
            SoftSol powers the digital future of global innovators.
          </h1>
          <div className="carousel-wrapper">
            <motion.div
              className="carousel"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
            >
              {[...images, ...images].map((src, index) => (
                <div key={index} className="swipper1-cards">
                  <img
                    className="swipper1-image"
                    src={src}
                    alt="Partner Logo"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(to bottom right, #f0f4f8, #ffffff);
  padding: 80px 0;

  .swipper1-title {
    color: #010412;
    font-family: "PoppinsBold", sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    padding-bottom: 30px;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .carousel-wrapper {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  .carousel {
    display: flex;
    gap: 60px;
    min-width: 200%;
    animation: scrollX 20s linear infinite;
  }

  .swipper1-cards {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
  }

  .swipper1-cards:hover {
    transform: scale(1.05);
  }

  .swipper1-image {
    width: 80px;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  .swipper1-cards:hover .swipper1-image {
    filter: grayscale(0%);
  }

  @keyframes scrollX {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    .carousel {
      gap: 30px;
    }

    .swipper1-title {
      font-size: 24px;
      line-height: 32px;
    }

    .swipper1-cards {
      padding: 10px;
    }

    .swipper1-image {
      width: 60px;
    }
  }
`;

