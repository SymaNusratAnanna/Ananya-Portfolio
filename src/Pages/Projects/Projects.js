import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";

import giant from "../../Assets/Projects/backround.jpg";
import electro from "../../Assets/Projects/service4.jpg";
import tourimage from "../../Assets/Projects/banner3.jpg";
import online from "../../Assets/Projects/online.jpg";
import CapstonGroup from "../../Assets/Projects/CapstoneGroup.jpg";
// import OnlineCourse from "../../Assets/Projects/OnlineCourse.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={giant}
              isBlog={false}
              title="Giant Tech"
              description="1.Overview: This is a manufacturing company website where users can log in/register by
              google authentication & User name, Email, Password, User& Admin Role separated
              Dashboard.
              2.Add products, manage all orders & Manage all Products & delete orders, and products by
              Admin.
              3. User can Order products, add a review, View my orders and also delete orders.
              Technology Used: Html, Tailwind, Daisyui, React js,React router,Nodejs, Express js,
MongoDB,Firebase.
"
              link="https://giant-tech.web.app/"
              linkGitClient="https://github.com/SymaNusratAnanna/giant-tech-client-side"
              linkGitServer="https://github.com/SymaNusratAnanna/giant-tech-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electro}
              isBlog={false}
              title="Electro-Gadget-Tech"
              description="1.Overview: This is a Warehouse company website where users can log in/register by
              google authentication & User name.
              2.Users can Manage inventory, Add Items, View My Item, and also can Delete Items.
              3. Also User can Deliver item & Restock Item , there is also Blog & About.
              Technology Used: Html,CSS,Bootstrap,React js,React router,Node js,MongoDB,Firebase."
              link="https://electro-gadget-tech.web.app/"
              linkGitClient="https://github.com/SymaNusratAnanna/electro-gadget-tech"
              linkGitServer="https://github.com/SymaNusratAnanna/electro-gadget-tech-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourimage}
              isBlog={false}
              title="Ananyas-Tour-Site"
              description="1.Overview: This is a Tourism Booking website where users can log in/register by google
              authentication & User name.
              2.By login, the User can see the service and packages provided by this site.
              3.There is also Blog,About& Tour videos.
              Technology Used: Html,CSS,Bootstrap,React js,React router,Node js,MongoDB,Firebase."
              link="https://ananyas-tour-site.web.app/"
              linkGitClient="https://github.com/SymaNusratAnanna/ananyas-tour-site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online}
              isBlog={false}
              title="Wear Fantacy"
              description=" • This project is about a Online shop .where customer can review their opinion
              "
              link="https://startling-melomakarona-342d0b.netlify.app/"
              linkGitClient="https://github.com/SymaNusratAnanna/assignment-09"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CapstonGroup}
              isBlog={false}
              title="Capston Group Select."
              description="This is for Capstone group select • Know total waiver of the team member • Select as your own choice"
              link="https://capston-group-ananya.netlify.app/"
              linkGitClient="https://github.com/SymaNusratAnanna/capston-group-select
              "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
