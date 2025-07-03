import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Learning from "./pages/Learning";
import OurTeam from "./pages/OurTeam";
function App() {
  return (

    <Wrapper>
      <WhatsAppFloatButton />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/ourteam" element={<OurTeam />} />

      </Routes>
    </Router>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
`;
