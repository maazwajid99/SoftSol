import NavbarTwo from "../components/NavbarTwo";
import Footer from "../components/Footer";
import Styled from "styled-components";



function Learning() {
  return (
   <Wrapper>
      <NavbarTwo/>
     <div className="pt-5"></div>
  <h2 className="title">Welcome to Our Learn Page</h2>
  <Footer/>
  </Wrapper> 
)
}
export default Learning;
const Wrapper = Styled.div`
  .title {
    text-align: center;
    padding: 80px 0;
    font-size: 2rem;
    color: #333;
    background-color: #f0f0f0;
  }
`;