import NavbarTwo from "../components/NavbarTwo";
import Footer from "../components/Footer";
import Styled from "styled-components";
import ContactPaGe from '../components/ContactPage';



function Contact() {
  return (
  <Wrapper>
    <NavbarTwo />
    <ContactPaGe />
  <Footer/>
  </Wrapper> 
)
}
export default Contact;
const Wrapper = Styled.div`
 
`;