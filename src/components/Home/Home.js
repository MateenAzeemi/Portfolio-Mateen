import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUHAMMAD MATEEN AZEEMI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ color: "white", marginTop: "10px" }}>
                Mid-level <strong>React Native Developer</strong> (1.5+ years)
                based in <strong>Ilmenau, Germany</strong>. Strong in{" "}
                <strong>JavaScript, TypeScript</strong>, and full-stack delivery
                with <strong>Node.js, NestJS, Laravel</strong>, and{" "}
                <strong>Shopify</strong> apps — production mobile apps, APIs,
                payments, and real-time features. Open to mobile or full-stack
                roles; eligible to work in Germany (student/residence permit).
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
