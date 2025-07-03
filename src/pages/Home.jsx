import Navbar from "../components/Navbar";
import HeroSection from "../components/hero-section";
import Brand from "../components/Brand";
import styled from "styled-components";
import TeamSection from "../components/TeamSection";
import ReviewClient from "../components/ReviewsClient";
import Footer from "../components/Footer";
function Home() {
  return (
    <Wrapper>
    <Navbar />
    <HeroSection />
    <Brand />
    <TeamSection/>
    <ReviewClient />
    <Footer/>


  </Wrapper>
)
}
export default Home;
const Wrapper = styled.div`

`;