import styled from "styled-components";
import ContactFoRm from "../components/ContactForm";
import ContactInFo from "../components/ContactInfo";

export default function ContactPage() {
  return (
    <Wrapper className="contant-page-parent-wapper">
      <main className="container contant-page-parent-div">
        <div className="row g-4">
          <div className="col-lg-6">
            <ContactFoRm />
          </div>
          <div className="col-lg-6">
            <ContactInFo />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 7%;
  padding-bottom: 2%;


    @media (max-width: 1280px) and (min-width:1110px) {
     padding-top: 10%;
     padding-bottom: 5%;
  }
  @media (max-width: 991px) {
     padding-top: 16%;
     padding-bottom: 7%;
  }

  @media (max-width: 768px) {
     padding-top: 18%;
     padding-bottom: 8%;
  }

  @media (max-width: 576px) {
     padding-top: 30%;
     padding-bottom: 12%;

  }
`;
