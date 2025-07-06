import styled from "styled-components";

export default function MiniCaseStudy() {
  return (
    <Wrapper className="container p-0">
      <div className="row g-0 min-vh-100">
        {/* Left Section */}
        <div className="col-lg-7 col-xl-6">
          <div className="case-study-section h-100 d-flex flex-column justify-content-center p-4 p-md-5">
            <div className="case-study-content">
              <h1 className="case-study-title mb-4">
                Digital transformation in auto retail:
                <br />
                The MINI Anywhere case-study
              </h1>

              <p className="case-study-description mb-4">
                In June 2021, MINI USA launched their groundbreaking digital retail platform, MINI Anywhere,
                developed in collaboration with NETSOL Technologies. Built on NETSOL's Transcend Retail platform
                (formerly known as Otoz), MINI Anywhere is a bespoke solution designed to meet MINI USA's specific
                needs, offering customers a seamless, end-to-end digital purchasing experience.
              </p>

              {/* Custom Button */}
              <div className="mb-4">
                <button className="hero-buttons btn btn-primary">
                  Learn More <i className="ms-2">→</i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-5 col-xl-6">
          <div className="insights-section h-100 d-flex flex-column justify-content-center p-4 p-md-5">
            <div className="insights-content">
              {/* ✅ Same old styling retained here */}
              <div className="resource-badge mb-4">RESOURCE CENTER</div>

              <h2 className="insights-title mb-4">Insights</h2>

              <p className="insights-description mb-4">
                Discover the latest content on the most important topics in and around financial services and
                technology. Read our articles, case-studies, white papers and more. Watch our on-demand webinars as our
                industry experts share their perspectives about the industry.
              </p>

              {/* Custom Button */}
              <div>
                <button className="hero-buttons btn btn-primary">
                  Discover insights <i className="ms-2">→</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .case-study-section {
    background: linear-gradient(135deg, #00d4aa 0%, #00b8d4 100%);
    color: white;
  }

  .case-study-title {
    font-size: 36px;
    font-weight: 500;
    font-family: "PoppinsSemiBold";
    color: #010412;
    padding: 0px 0px 10px;
    line-height: 43.2px;
  }

  .case-study-description {
    font-size: 18px;
    line-height: 29px;
    font-family: "PoppinsRegular";
    color: #010412;
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
    color: white;
  }

  .btn-primary:hover {
    background-color: #00b894;
    box-shadow: 0 8px 25px rgba(48, 213, 200, 0.5);
    transform: translateY(-2px);
  }

  .insights-section {
    background-color: #f8f9fa;
    color: #333;
  }

  /* ✅ Preserving original styling */
  .resource-badge {
    background-color: #2c3e50;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    display: inline-block;
    text-transform: uppercase;
  }

  .insights-title {
    font-size: 36px;
    font-weight: 500;
    font-family: "PoppinsSemiBold";
    color: #010412;
    padding: 0px 0px 10px;
    line-height: 43.2px;
  }

  .insights-description {
    font-size: 18px;
    line-height: 29px;
    font-family: "PoppinsRegular";
    color: #010412;
  }

  @media (max-width: 767.98px) {
    .case-study-title,
    .insights-title {
      font-size: 28px;
      line-height: 1.4;
    }

    .case-study-description,
    .insights-description {
      font-size: 16px;
    }

    .btn-primary {
      width: 100%;
      justify-content: center;
    }
  }
`;
