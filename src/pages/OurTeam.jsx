import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
const OurTeam = () => {
  

  return (
    <Wrapper>
    <Navbar/>
      <TeamSection/>
      <Footer />
    </Wrapper>
  );
};

export default OurTeam;
const Wrapper = styled.div`
 
`;
