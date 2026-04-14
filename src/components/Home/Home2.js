import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple">Me</span>
            </h1>
            <p className="home-about-body">
              I am a mid-level <b className="purple">React Native Developer</b>{" "}
              (1.5+ years) with strong <b className="purple">full-stack</b>{" "}
              experience. I build scalable cross-platform apps with{" "}
              <b className="purple">TypeScript</b>, integrate APIs and payments,
              and ship real-time features with <b className="purple">Firebase</b>{" "}
              and <b className="purple">WebSockets</b>. Currently in{" "}
              <b className="purple">Ilmenau, Germany</b>, open to mobile or
              full-stack roles.
              <br />
              <br />
              Stack highlights:{" "}
              <b className="purple">
                React Native (CLI & Expo), Redux Toolkit, Node.js, Express,
                NestJS, Next.js, Laravel, Shopify
              </b>
              , plus <b className="purple">CI/CD</b> (GitHub Actions) and{" "}
              <b className="purple">Docker</b>.
              <br />
              <br />
              Selected key projects:
              <ul>
                <li>
                  <b>Speedy Auto Keys</b> – Locksmith booking and e-commerce 
                  platform (live on Play Store).
                </li>
                <li>
                  <b>HealthyChoice</b> – Food ordering app (Calo clone, Bahrain) 
                  with AI-powered meal recommendations.
                </li>
                <li>
                  <b>Shopify Extensions</b> – Custom apps for extended shipping, 
                  subscriptions, and advanced cart logic.
                </li>
                <li>
                  <b>Lekture</b> – AI-powered reading assistant using OCR and GPT.
                </li>
              </ul>
              I am passionate about delivering production-level applications 
              that combine functionality, scalability, and excellent user 
              experience.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with Me</h1>
            <p>
              You can find me on the following platforms:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MateenAzeemi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mateen-azeemi-20aa9a287/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
