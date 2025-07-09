import React from "react";
import styled from "styled-components";
import NavbarTwo from "../components/NavbarTwo";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
const OurTeam = () => {
  

  return (
    <Wrapper>
    <NavbarTwo/>
     <div className="pt-5"></div>
      <TeamSection/>
      <Footer />
    </Wrapper>
  );
};

export default OurTeam;
const Wrapper = styled.div`
 
`;
