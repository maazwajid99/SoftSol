import Navbar from "../components/Navbar";
import HeroSection from "../components/hero-section";
import styled from "styled-components";
function Home() {
  return (<Wrapper>
    <Navbar />
    <HeroSection />
    <HeroSection />
    <HeroSection />
    


  </Wrapper>
)
}
export default Home;
const Wrapper = styled.div`

`;