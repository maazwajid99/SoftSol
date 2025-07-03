import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Styled from "styled-components";



function Contact() {
  return (
  <Wrapper>
    <Navbar />
  <h2 className="title">Welcome to Contact Page</h2>
  <Footer/>
  </Wrapper> 
)
}
export default Contact;
const Wrapper = Styled.div`
  .title {
    text-align: center;
    padding: 80px 0;
    font-size: 2rem;
    color: #333;
    background-color: #f0f0f0;
  }
`;