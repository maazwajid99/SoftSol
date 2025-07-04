import BGImage from "../assets/bannerVideoNew.gif";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="hero-overlay" />
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="content container">
          <h1 className="hero-title">
            Transcend the <br />
            limits of technology
          </h1>
          <p className="hero-subtitle">
            From AI-powered finance solutions to innovative cloud services.
          </p>
          <div className="hero-buttons">
            <a href="#why" className="btn btn-primary">
              Why NETSOL →
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Let's Talk →
            </a>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HeroSection;
const Wrapper = styled.div`
  position: relative;
  background-image: url(${BGImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(26, 54, 93, 0.6) 0%,
      rgba(0, 212, 170, 0.3) 100%
    );
    z-index: 1;
  }

  .hero-section {
    position: relative;
    z-index: 2;
    height: 100%;
    padding: 0 1rem;
  }

  .content {
    z-index: 2;
    color: white;
    padding-top: 4rem;
  }

  .hero-title {
    color: #fff;
    font-family: "DM Sans", sans-serif;
    font-size: 70px;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
    word-break: break-word;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: #dfe6e9;
    margin: 1.5rem auto 2rem;
    max-width: 600px;
    text-align: center;
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

  .btn-outline-light {
    border-color: #30d5c8;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    padding: 14px 28px;
    font-family: "DM Sans", sans-serif;
    transition: 0.3s;
  }

  .btn-outline-light:hover {
    background-color: #30d5c8;
    border-color:  #30d5c8;
    color: white;
    transform: translateY(-2px);
  }

  /* Responsive */
  @media (max-width: 991.98px) {
    .hero-title {
      font-size: 48px;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .hero-buttons {
      flex-direction: column;
    }

    .hero-buttons .btn {
      width: 100%;
      max-width: 280px;
    }
  }

  @media (max-width: 767.98px) {
    .hero-title {
      font-size: 36px;
    }

    .content {
      padding-top: 2rem;
    }
  }

  @media (max-width: 575.98px) {
    .hero-title {
      font-size: 28px;
    }

    .hero-subtitle {
      font-size: 1rem;
    }
  }
`;
