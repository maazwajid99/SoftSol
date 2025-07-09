import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

export default function ContactInfo() {
  const infoData = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "(123) 456-7890",
  },
  {
    icon: <IoMdMail />,
    label: "Email",
    value: "contact@example.com",
  },
  {
    icon: <IoLocation />,
    label: "Address",
    value: `123 Dummy Street\nFake City, FK 00000\nUnited States`,
  },
  {
    icon: <LuClock4 />,
    label: "Hours",
    value: `Mon - Fri: 9 AM - 6 PM\nSat - Sun: Closed`,
  },
];

  return (
    <Wrapper>
      <div className="info-wrapper p-4 shadow rounded-4">
        <h2 className="contact-info-title mb-3">Contact</h2>
          {/* <p className="contact-info-description mb-4">
            Have questions or need immediate assistance? Reach out to us directly using the information below.
          </p> */}

        <div className="row g-4 mt-2">
          {infoData.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card-info d-flex flex-column justify-content-start p-3 rounded h-100">
                <div className="custom-icon">{item.icon}</div>
                <div className="d-flex align-items-center mb-2">
                  <span className="fw-medium">{item.label}:</span>
                </div>
                <p className="info-text">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  .info-wrapper {
    background-color: #ffffff;
  }

  .contact-info-title {
    color: #010412;
    font-family: "PoppinsBold", sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    text-align: left;
  }

  .contact-info-description {
    color: #010412;
    font-family: "Poppins", sans-serif;
    font-size: 17.6px;
    line-height: 32px;
    text-align: left;
  }

  .card-info {
    background-color: #f3f4f6;
    border-radius: 10px;
  }

  .custom-icon {
    color: #30d4c7;
    font-size: 2rem;
    padding-bottom: 10px;
  }

  .info-text {
    white-space: pre-line;
    color: #010412;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }

  @media (max-width: 767.98px) {
    .contact-info-title {
      font-size: 24px;
    }
  }
`;
