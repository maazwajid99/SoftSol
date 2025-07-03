import React, { useState } from "react";
import styled from "styled-components";
import dp from "../assets/dp.jpg";
import google from "../assets/google.jpg";

const testimonials = [
  {
    id: 1,
    name: "Kamran Akhtar",
    date: "August 27, 2024",
    rating: 5,
    text: "Very professional and quick. Highly recommended!",
    avatar: dp,
  },
  {
    id: 2,
    name: "Malik Hamza",
    date: "July 11, 2024",
    rating: 5,
    text: "I was facing a lot of problems related to WordPress website hosting of my client. Zeefah offered me a localhost for work and also he helped me solve the hosting server issue very efficiently with clear communication.",
    avatar: dp,
  },
  {
    id: 3,
    name: "Kiran Shahzadi",
    date: "July 11, 2024",
    rating: 5,
    text: "Zeefah helped me resolve the issues related to hosting and domain connection. He took care of all the technicalities and worked consistently to make it live. I'm really grateful and satisfied with the service.",
    avatar: dp,
  },
  {
    id: 4,
    name: "Ade P",
    date: "June 29, 2024",
    rating: 5,
    text: "Absolutely thrilled with the website developed! My vision was captured perfectly, delivering a stunning design and smooth functionality. Communication was excellent, and deadlines were met effortlessly. Would definitely recommend!",
    avatar: dp,
  },
  {
    id: 5,
    name: "Simran Naaz",
    date: "June 17, 2024",
    rating: 5,
    text: "Amazing work and timely delivery. Will work again!",
    avatar: dp,
  },
  {
    id: 6,
    name: "Laraib Ali",
    date: "June 7, 2024",
    rating: 5,
    text: "Highly recommended. Perfect stitching 👍",
    avatar: dp,
  },
];

const TestimonialsSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className="text-warning">
        ★
      </span>
    ));
  };

  return (
    <Wrapper>
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <h2 className="review-parent-title">Our Clients Say!</h2>
          </div>
        </div>

        <div className="row">
          {testimonials.map((testimonial) => {
            const shouldTruncate =
              testimonial.text && testimonial.text.length > 120;
            const isExpanded = expanded[testimonial.id];
            const displayText =
              shouldTruncate && !isExpanded
                ? testimonial.text.slice(0, 120) + "..."
                : testimonial.text;

            return (
              <div key={testimonial.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-circle"
                          width="60"
                          height="60"
                        />
                      </div>
                      <div>
                        <h5 className="review-title mb-0">
                          {testimonial.name}
                        </h5>
                        <small className="text-muted">{testimonial.date}</small>
                      </div>
                      <div className="ms-auto">
                        <img src={google} alt="Google" width="24" height="24" />
                      </div>
                    </div>

                    <div className="mb-2">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="card-text">{displayText}</p>

                    {shouldTruncate && (
                      <button
                        onClick={() => toggleExpand(testimonial.id)}
                        className="btn btn-link p-0"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default TestimonialsSection;

const Wrapper = styled.div`
  background: linear-gradient(to bottom right, #f0f4f8, #ffffff);
  padding: 35px 0;

  .review-parent-title {
    color: #010412;
    font-family: "PoppinsBold", sans-serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 43.2px;
    padding-bottom: 20px;
    text-align: center;
    position: relative;
  }

 
  .review-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1e3a8a;
    font-family: "PoppinsBold", sans-serif;
  }

  .card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .card-body {
    padding: 30px;
  }

  .card-text {
    color: #6c757d;
    font-size: 0.95rem;
    line-height: 1.6;
    font-family: "Open Sans", sans-serif;
  }

  .btn-link {
    color: #1e3a8a;
    font-weight: 500;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    transition: all 0.3s ease-in-out;
  }

  .btn-link:hover {
    color: #0d6efd;
    text-decoration: underline;
  }

  .text-warning {
    font-size: 1rem;
  }

  img.rounded-circle {
    border: 3px solid #1e3a8a30;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 767.98px) {
    .review-parent-title {
      font-size: 28px;
      line-height: 36px;
    }

    .card-body {
      padding: 20px;
    }

    .review-title {
      font-size: 1.1rem;
    }

    .card-text {
      font-size: 0.9rem;
    }
  }
`;

