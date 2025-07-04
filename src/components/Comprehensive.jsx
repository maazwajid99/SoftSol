import { useState } from "react";
import styled from "styled-components";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsTruck } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";
import { FiShield } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const cardData1 = [
  {
    icon: <MdOutlineAttachMoney />,
    title: "Load Sourcing & Negotiation",
    description:
      "Unlock exclusive, high-paying loads by tapping into our network of 200+ trusted brokers. We continuously source spot market loads—backed by the latest DAT/Truckstop data—to secure premium rates.",
  },
  {
    icon: <BsTruck />,
    title: "Paperwork Management",
    description:
      "Simplify your dispatch process with our cutting-edge paperless system. We manage all essential documentation—from highway packets and RMIS requirements to load confirmations—so you can focus on driving.",
  },
  {
    icon: <FaFileLines />,
    title: "Route Planning",
    description:
      "Optimize every trip with our advanced route planning tools. Integrating live traffic, weather, and load data, our system recommends the most efficient routes on high-demand lanes.",
  },
  {
    icon: <LuClock4 />,
    title: "Broker Communication",
    description:
      "Stay connected with our elite network of brokers through real-time messaging and instant updates. Our platform ensures clear, transparent communication so you’re always in the loop.",
  },
  {
    icon: <FiShield />,
    title: "24/7 Support",
    description:
      "Enjoy dedicated, round-the-clock support from our experienced dispatch team. We’re available 24/7 to resolve issues, answer your questions, and assist with any on-road challenges.",
  },
  {
    icon: <FaUserFriends />,
    title: "Factoring Assistance",
    description:
      "Accelerate your cash flow with our pay-after-payment model and factoring assistance. We remove financial barriers by ensuring you only pay after you’ve been compensated by the broker.",
  },
];

export default function Comprehensive() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Wrapper>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="section-heading">Transcend Consultancy</h1>
        </div>

        <div className="row g-4 justify-content-center">
          {cardData1.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div
                className="card-wrapper text-center"
                onClick={() => setSelectedCard(card)}
              >
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedCard && (
          <PopupOverlay onClick={() => setSelectedCard(null)}>
            <PopupContent onClick={(e) => e.stopPropagation()}>
              <CloseIcon onClick={() => setSelectedCard(null)} />
              <h3 className="popup-title">{selectedCard.title}</h3>
              <p className="popup-description">{selectedCard.description}</p>
            </PopupContent>
          </PopupOverlay>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(to bottom right, #f0f4f8, #ffffff);

  .section-heading {
    color: #010412;
    font-family: "PoppinsBold", sans-serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 10px;
  }

 

  .card-wrapper {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    padding: 24px;
    height: 100%;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-wrapper:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .card-icon {
    font-size: 40px;
    color: #010412;
    margin-bottom: 16px;
  }

  .card-title {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height: 32px;
    margin: 15.9px 0;
    text-align: center;
    color: #010412;
  }

  .card-description {
    color: #4b5563;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
  }

  .popup-title {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height: 32px;
    margin: 15.9px 0;
    text-align: center;
    color: #010412;
  }

  .popup-description {
    color: #4b5563;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  text-align: center;
  position: relative;
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #1e3a8a;
`;
