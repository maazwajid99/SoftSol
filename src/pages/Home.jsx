import Navbar from "../components/Navbar";
import HeroSection from "../components/hero-section";
import Brand from "../components/Brand";
import styled from "styled-components";
import TranscendPlatform from "../components/TranscendPlatform";
import Marketplace from "../components/Marketplace";
import Comprehensive from "../components/Comprehensive";
import AWSPartner from "../components/AWSPartner";
import Minecase from "../components/Minicase";
import TeamSection from "../components/TeamSection";
import ReviewClient from "../components/ReviewsClient";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Newsletters from "../components/NewsLetters";
function Home() {
  return (
    <Wrapper>
    <Navbar />
    <HeroSection />
    <Brand />
    <TranscendPlatform/>
    <Marketplace />
    <Comprehensive />
    <AWSPartner />
    <TestimonialCarousel />
    <Minecase/>
    <TeamSection/>
    <ReviewClient />
    <Newsletters />
    <Footer/>


  </Wrapper>
)
}
export default Home;
const Wrapper = styled.div`

`;