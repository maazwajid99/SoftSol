import React, { useState } from "react";
import styled from "styled-components";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    phoneNumber: "",
    zipCode: "",
    preferredStates: "",
    additionalInfo: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Wrapper>
      <div className="form-wrapper p-4 shadow rounded-4">
        <h2 className="form-title mb-3">Get Started</h2>
        <p className="form-description mb-4">
          Fill out the form below to start receiving high-paying loads.
        </p>

        <form onSubmit={handleSubmit}>
          {["yourName", "email", "phoneNumber", "zipCode", "preferredStates"].map((field, idx) => (
            <div className="mb-3" key={idx}>
              <input
                type={field === "email" ? "email" : "text"}
                className="form-control-field"
                placeholder={
                  field === "preferredStates" ? "Message" : `${field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}*`
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={field !== "preferredStates"}
              />
            </div>
          ))}

          <div className="hero-buttons mt-4">
            <button type="submit" className="btn btn-primary text-white w-100">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .form-wrapper {
    background-color: #ffffff;
  }

  .form-title {
    color: #010412;
    font-family: "PoppinsBold", sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    text-align: left;
  }

  .form-description {
    color: #010412;
    font-family: "Poppins", sans-serif;
    font-size: 17.6px;
    line-height: 32px;
    text-align: left;
  }

  .form-control-field {
    background-color: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 24px;
    padding: 12px;
    width: 100%;
    color: #010412;
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

  .hero-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 767.98px) {
    .form-title {
      font-size: 24px;
    }
  }
`;
