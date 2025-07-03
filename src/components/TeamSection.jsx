import React from "react";
import styled from "styled-components";
import RedLight from "/src/assets/dp.jpg";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Adam Jonson",
      title: "CHIEF OPERATING OFFICER",
      image: RedLight,
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: 2,
      name: "Marry Hudson",
      title: "DIRECTOR OF MARKETING",
      image: RedLight,
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: 3,
      name: "Muhammad Maaz",
      title: "Frontend Developer",
      image: RedLight,
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: 4,
      name: "John Doe",
      title: "CHIEF FINANCIAL OFFICER",
      image: RedLight,
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: 5,
      name: "Jane Smith",
      title: "DIRECTOR OF OPERATIONS",
      image: RedLight,
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      id: 6,
      name: "Alice Johnson",
      title: "HEAD OF SALES",
      image: RedLight,
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ];

  return (
    <Wrapper>
      <div className="team-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="team-heading">Meet The Team</h1>
            </div>
          </div>

          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6 mb-4">
                <div className="team-member text-center">
                  <div className="member-image-container">
                    <div className="member-image">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="member-info p-3">
                    <h3 className="member-name">{member.name}</h3>
                    <h5 className="member-title">{member.title}</h5>
                    <p className="member-description">{member.description}</p>
                    {[1, 2, 3].includes(member.id) && (
                      <div className="d-flex justify-content-center gap-2 pb-2">
                        <a
                          href="#"
                          className="bgprimary text-white rounded-circle d-flex align-items-center justify-content-center font-style"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <FaTwitter size={14} />
                        </a>
                        <a
                          href="https://www.facebook.com/newpoolsystems?mibextid=wwXIfr&rdid=mERG4BSvouXxpmT3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EorhDKrBm%2F%3Fmibextid%3DwwXIfr"
                          className="bgprimary text-white rounded-circle d-flex align-items-center justify-content-center font-style"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <FaFacebookF size={14} />
                        </a>
                        <a
                          href="#"
                          className="bgprimary text-white rounded-circle d-flex align-items-center justify-content-center font-style"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <FaInstagram size={14} />
                        </a>
                        <a
                          href="#"
                          className="bgprimary text-white rounded-circle d-flex align-items-center justify-content-center font-style"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <FaPinterestP size={14} />
                        </a>
                        <a
                          href="#"
                          className="bgprimary text-white rounded-circle d-flex align-items-center justify-content-center font-style"
                          style={{ width: "30px", height: "30px" }}
                        >
                          <FaLinkedinIn size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TeamSection;
const Wrapper = styled.div`
  .bgprimary {
    background-color: #1e3a8a !important;
  }

  .team-section {
    background: linear-gradient(to bottom right, #f0f4f8, #ffffff);
    padding-top: 90px !important;
  }

  .team-heading {
    color: #010412;
    font-family: "PoppinsBold", sans-serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 43.2px;
    padding: 0px 0px 10px;
    text-align: center;
  }

  .team-member {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    height: 100%;
    padding-bottom: 20px;
  }

  .team-member:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .member-image-container {
    position: relative;
    margin-top: -40px;
  }

  .member-image {
    width: 160px;
    height: 160px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .team-member:hover .member-image {
    transform: scale(1.05);
  }

  .member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .member-info {
    padding: 1.5rem;
    background-color: #f5faff;
    border-radius: 0 0 12px 12px;
    text-align: center;
  }

  .member-name {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1e3a8a;
  }

  .member-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #6c757d;
    margin-bottom: 1rem;
  }

  .member-description {
    font-size: 0.85rem;
    color: #6c757d;
    margin-bottom: 1rem;
  }

  .font-style {
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .font-style:hover {
    transform: scale(1.1);
    background-color: #0d6efd !important;
    color: white !important;
  }

  @media (max-width: 767.98px) {
    .team-heading {
      font-size: 2rem;
    }

    .member-image {
      width: 130px;
      height: 130px;
    }
  }

  @media (max-width: 575.98px) {
    .team-heading {
      font-size: 1.6rem;
    }

    .member-image {
      width: 100px;
      height: 100px;
    }
  }
`;
