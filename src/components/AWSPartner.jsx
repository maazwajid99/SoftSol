import styled from "styled-components";
import awslogo from "../assets/aws-partner-logo.png";

const AWSPartnerSection = () => {
  return (
    <Wrapper className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Column */}
          <div className="col-lg-3 col-md-4 col-sm-12 mb-4 mb-md-0 text-center text-md-start">
            <img
              src={awslogo}
              alt="AWS Partner Advanced Tier Services"
              className="img-fluid"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </div>

          {/* Content Column */}
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="text-dark">
              <h2 className="aws-title">AWS Advanced Tier Partner</h2>

              <p className="aws-description">
                NETSOL is an official AWS Well-Architected Partner. Our team of
                experienced AWS solution architects can perform a detailed
                review of your existing AWS infrastructure to identify potential
                risks, vulnerabilities and areas for improvement based on the
                six pillars of the AWS Well-Architected Framework.
              </p>

              <div className="mb-4">
                <button className="hero-buttons btn btn-primary">
                  Learn More <i className="ms-2">→</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AWSPartnerSection;

const Wrapper = styled.div`
    background: linear-gradient(135deg, rgb(31, 122, 193), rgb(14, 57, 91));

  .img-fluid {
    color: #fff;
    display: inline;
    line-height: 22.4px;
    max-width: 120%;
    height: auto;
  }

  .aws-title {
    font-family: PoppinsBold, sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 43.2px;
    margin: 0 0 20px;
    padding: 0 0 10px;
    text-align: left;
    color: #fff;

  }

  .aws-description {
    font-family: PoppinsRegular, sans-serif;
    font-weight: 100;
    line-height: 30px;
    margin: 0 0 20px;
    text-align: left;
    color: #fff;

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
`;
