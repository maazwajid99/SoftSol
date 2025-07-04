import ReactPlayer from "react-player";
import styled from "styled-components";
export default function TranscendPlatform() {
  return (
    <Wrapper>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content Column */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                <h1 className="text-heading">
                  Our platform is now called{" "}
                  <span style={{ color: "#30d4c7" }}>Transcend</span>
                </h1>
                <p className="text-paragraph">
                  A unified platform that transcends auto and asset retail and
                  finance, all powered by Artificial Intelligence.
                </p>
                <div className="mb-4"></div>
                <button className="hero-buttons btn btn-primary">
                  Learn More <i className="ms-2">→</i>
                </button>
              </div>
            </div>

            {/* Right Video Column */}
            <div className="col-lg-6 col-md-12">
              <div className="position-relative">
                <div
                  className="rounded-3 overflow-hidden shadow-lg"
                  style={{ aspectRatio: "16/9" }}
                >
                  <ReactPlayer
                    src="/bannerVideoNew.mp4"
                    width="100%"
                    height="100%"
                    controls
                    playing={true} // ✅ auto-play enabled
                    muted={true} // ✅ required for autoplay to work on most browsers
                    loop={true}
                    style={{ backgroundColor: "black" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
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
