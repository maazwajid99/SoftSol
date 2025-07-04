import Navbar from "../components/Navbar";
import HeroSection from "../components/hero-section";
import Brand from "../components/Brand";
import styled from "styled-components";
import TranscendPlatform from "../components/TranscendPlatform";
import MarketplaceHero from "../components/MarketplaceHero";
import Comprehensive from "../components/Comprehensive";
import TeamSection from "../components/TeamSection";
import ReviewClient from "../components/ReviewsClient";
import Footer from "../components/Footer";
function Home() {
  return (
    <Wrapper>
    <Navbar />
    <HeroSection />
    <Brand />
    <TranscendPlatform/>
    <MarketplaceHero />
    <Comprehensive />
    <TeamSection/>
    <ReviewClient />
    <Footer/>


  </Wrapper>
)
}
export default Home;
const Wrapper = styled.div`

`;