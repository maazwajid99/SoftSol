import BGImage from "../assets/bannerVideoNew.gif";
import styled from "styled-components";
const HeroSection = () => {
  return (
    <Wrapper className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container pt-5">
        <div className="paragraph-part row align-items-center justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="hero-content text-center">
              <h1 className="hero-title text-white">
                Transcend the
                <br />
                limits of technology
              </h1>
              <p className="hero-subtitle text-white">
                From AI-powered finance solutions to innovative cloud services.
              </p>
              <div className="hero-buttons">
                <a
                  href="#why-netsol"
                  className="btn btn-primary btn-lg me-3 text-white"
                >
                  Why NETSOL
                  <svg
                    className="ms-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg text-white"
                >
                  Let's Talk
                  <svg
                    className="ms-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
const Wrapper = styled.div`
  position: relative;
  background-image: url(${BGImage}); /* your GIF */
  background-size: cover;
  background-position: center;
  height: 100vh;
  z-index: 0;

&::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(30, 58, 138, 0.4); /* blue with 40% opacity */
  z-index: 1;
}

  .hero-content {
    position: relative;
    z-index: 2; /* bring content above overlay */
  }
  .paragraph-part {
    padding-top: 10%;
  }
  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  .hero-bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(26, 54, 93, 0.8) 0%,
      rgba(0, 212, 170, 0.3) 100%
    );
    z-index: -1;
  }

  .hero-content {
    color: white;
    z-index: 1;
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--dark-blue);
    font-weight: 600;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    transition: all 0.3s ease;
  }

  .btn-primary:hover {
    background-color: #00b894;
    border-color: #00b894;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 170, 0.3);
  }

  .btn-outline-light {
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-weight: 600;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    transition: all 0.3s ease;
  }

  .btn-outline-light:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: white;
    color: white;
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 991.98px) {
    .hero-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .hero-buttons {
      flex-direction: column;
      align-items: center;
    }

    .hero-buttons .btn {
      width: 100%;
      max-width: 250px;
    }
  }

  @media (max-width: 767.98px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-content {
      padding: 1rem 0;
    }

    .navbar {
      padding: 0.5rem 0;
    }
  }

  @media (max-width: 575.98px) {
    .hero-title {
      font-size: 1.75rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }
  }
`;
