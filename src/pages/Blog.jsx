import NavbarTwo from "../components/NavbarTwo";
import Footer from "../components/Footer";
import Styled from "styled-components";
import BlogPage from "../components/BlogPage";


function Blog() {
  return (
  <Wrapper>
    <NavbarTwo />
    <BlogPage/>
  <Footer/>
  </Wrapper> 
)
}
export default Blog;
const Wrapper = Styled.div`
  .title {
    text-align: center;
    padding: 80px 0;
    font-size: 2rem;
    color: #333;
    background-color: #f0f0f0;
  }
`;