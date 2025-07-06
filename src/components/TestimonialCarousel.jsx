import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import carouselimg1 from "../assets/carouselimg1.jpeg";
import carouselimg2 from "../assets/carouselimg2.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Mike Peyton",
    position: "Chief Motorer and Vice-President of MINI of the Americas",
    company: "MINI",
    testimonial:
      "At MINI, we decided it was time to create an end-to-end purchasing and finance journey for the consumer and it was important to create something more than a lead generator to facilitate the complete transaction for any MINI customer, any place, any time. Our partnership with NETSOL has enabled us not only to catch up with industry leaders, but also to set new benchmarks in digital auto-retail, which the usual suspects in the industry could not provide.",
    image: carouselimg1,
    hasVideo: false,
  },
  {
    id: 2,
    name: "Mike Boyes",
    position: "Head of Vendor Sales at Haydock Finance",
    company: "Haydock Finance",
    testimonial:
      "At MINI, we decided it was time to create an end-to-end purchasing and finance journey for the consumer and it was important to create something more than a lead generator to facilitate the complete transaction for any MINI customer, any place, any time. Our partnership with NETSOL has enabled us not only to catch up with industry leaders, but also to set new benchmarks in digital auto-retail, which the usual suspects in the industry could not provide.",
    image: carouselimg2,
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/4Awj2ImPX2k",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const goToSlide = (index) => setActiveIndex(index);

  const openModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    const modal = new window.bootstrap.Modal(
      document.getElementById("videoModal")
    );
    modal.show();
  };

  // Close modal and reset video URL
  useEffect(() => {
    const modalElement = document.getElementById("videoModal");
    modalElement?.addEventListener("hidden.bs.modal", () => {
      setCurrentVideoUrl("");
    });
  }, []);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="container py-5">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-item ${
                index === activeIndex ? "active" : "d-none"
              }`}
            >
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-sm-12 mb-4 mb-md-0 pe-lg-5">
                  <div className="testimonial-content">
                    <blockquote className="mb-4">
                      <p className="description">
                        "{testimonial.testimonial}"
                      </p>
                    </blockquote>
                    <div className="testimonial-author">
                      <h2 className="title-name">{testimonial.name}</h2>
                      <p className="paragraph">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                  <div className="testimonial-image-container position-relative d-inline-block">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="img-fluid rounded-3 shadow-lg"
                    />
                    {testimonial.hasVideo && (
                      <PlayButton
                        onClick={() => openModal(testimonial.videoUrl)}
                      >
                        <FaPlay size={20} color="white" />
                      </PlayButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="carousel-indicators mt-4 d-flex justify-content-center">
            {testimonials.map((_, index) => (
              <Indicator
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0 pb-0">
              <button
                type="button"
                className="btn-close btn-close-white ms-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              {currentVideoUrl && (
                <div className="ratio ratio-16x9">
                  <iframe
                    src={currentVideoUrl}
                    title="Testimonial Video"
                    allowFullScreen
                    className="rounded-bottom"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  min-height: 80vh;
  display: flex;
  align-items: center;

  .description {
    font-family: "PoppinsRegular", sans-serif;
    font-size: 18px;
    line-height: 32px;
    color: #555;
    font-style: italic;
  }

  .title-name {
    color: #010412;
    font-family: "PoppinsSemiBold";
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .paragraph {
    color: #010412;
    font-family: "PoppinsRegular";
    line-height: 29px;
  }

  .img-fluid {
    max-width: 100%;
    height: 63vh; /* Default desktop height */
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 992px) {
    .img-fluid {
      height: 50vh;
    }
  }

  @media (max-width: 768px) {
    .img-fluid {
      height: 40vh;
    }
    .testimonial-content {
      text-align: center;
    }
    .title-name {
      font-size: 24px;
    }
    .description {
      font-size: 16px;
    }
  }

  @media (max-width: 576px) {
    .img-fluid {
      height: 35vh;
    }
  }

  .carousel-item {
    padding: 2rem;
    transition: transform 0.6s ease-in-out;
  }

  .testimonial-content blockquote {
    font-size: 1rem;
    color: #555;
    font-style: italic;
  }

  .carousel-indicators button {
    cursor: pointer;
  }
`;

const PlayButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
  }
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: #dee2e6;
  border: none;
  transition: all 0.3s ease;

  &.active {
    background-color: #007bff;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
