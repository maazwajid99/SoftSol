import Navbar from "../components/Navbar";
import HeroSection from "../components/hero-section";
import Brand from "../components/Brand";
import styled from "styled-components";
import ReviewClient from "../components/ReviewsClient";
import Footer from "../components/Footer";
function Home() {
  return (
    <Wrapper>
    <Navbar />
    <HeroSection />
    <Brand />
    <ReviewClient />
    <Footer/>


  </Wrapper>
)
}
export default Home;
const Wrapper = styled.div`

`;