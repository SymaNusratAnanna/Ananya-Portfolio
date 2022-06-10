import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import animecode from "../../Assets/anime-code.jpg";
// import Particle from "../Particle";

// import pdf from "../../Assets/Imriaz's Resume.pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Home2 from "../Home/Home2";
import Type from "./Type";
import ContactMe from "../ContactMe";
import Resume from "../Resume";
import Footer from "../Footer";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
// import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Syma Nusrat Ananna</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col  md={5}
            style={{ paddingTop: "100px", paddingBottom: "40px" }}>
              <img src={animecode} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Resume />
      <Home2 />
      <h1 className="project-heading black">
           <strong className="black text-center ">Professional </strong>Skillset
        </h1>

        <Techstack />

        <h1 className="project-heading black">
          <strong className="black text-center">Tools</strong> I use
        </h1>
        <Toolstack />
      <ContactMe />
      <Footer></Footer>

    </section >
    
  );
}

export default Home;
