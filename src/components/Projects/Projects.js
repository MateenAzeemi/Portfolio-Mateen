import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Temporarily using one placeholder image for all
import editor from "../../Assets/Projects/codeEditor.png";
import lekture from "../../Assets/Projects/lek.png";
import speedy from "../../Assets/Projects/speedy.png";
import healthy from "../../Assets/Projects/healthy.png";
import shopify from "../../Assets/Projects/shopify.png";
import speaksure from "../../Assets/Projects/speaksure.png";
import matchmate from "../../Assets/Projects/matchmate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects I’ve built, spanning mobile apps, AI
          integrations, and Shopify extensions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Speedy Auto Keys Mobile App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speedy}
              isBlog={false}
              title="Speedy Auto Keys (Mobile App)"
              description="A locksmith booking and e-commerce platform mobile app built with React Native and Laravel APIs. Features include vehicle key listings, online booking, payments, and real-time order tracking. Live on Play Store."
              ghLink="https://github.com/MateenAzeemi/speedy-auto-keys-mobile-app"
              demoLink="https://play.google.com/store/apps/details?id=com.speedyautokeysapp"
            />
          </Col>

          {/* Speedy Auto Keys Laravel Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speedy}
              isBlog={false}
              title="Speedy Auto Keys (Website & Admin Panel)"
              description="The web-based platform for Speedy Auto Keys, developed with Laravel and MySQL. Includes an admin dashboard, locksmith management, product/key listings, order handling, and payment integrations."
              ghLink="https://github.com/MateenAzeemi/speedy-auto-keys-web-app"
              demoLink="https://speedyautokeys.com"
            />
          </Col>

          {/* HealthyChoice */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthy}
              isBlog={false}
              title="HealthyChoice"
              description="A food ordering and meal subscription app (Calo clone for Bahrain). Built with React Native and NestJS backend. Includes AI-powered meal recommendations, calorie tracking, and Stripe integration."
              ghLink="https://github.com/MateenAzeemi/EatNSeat"
              // demoLink="https://healthychoice.app"
            />
          </Col>

          {/* Shopify Extensions */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
              isBlog={false}
              title="Shopify Extensions"
              description="Developed custom Shopify apps and extensions including extended shipping, product subscriptions, and cart transformation logic. Used Remix + Shopify CLI for checkout extensibility."
              ghLink="https://github.com/MateenAzeemi/product-plus"
              // demoLink="https://apps.shopify.com/"
            />
          </Col>

          {/* Lekture */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lekture}
              isBlog={false}
              title="Lekture"
              description="An AI-powered reading assistant for students. Combines OCR (Vision Camera + OpenCV), speech recognition, and GPT-based explanations to help users read and understand books in real time."
              ghLink="https://github.com/MateenAzeemi/ai-reading-assistant"
            />
          </Col>

          {/* SpeakSure */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speaksure}
              isBlog={false}
              title="SpeakSure"
              description="Voice-activated scheduling and accounting assistant. Integrates Google Calendar and QuickBooks APIs with React Native (front-end) and NestJS backend. Uses voice commands to create events and manage invoices."
              ghLink="https://github.com/hamza1270/SpeakSureRepos"
            />
          </Col>

          {/* MatchMate */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matchmate}
              isBlog={false}
              title="MatchMate"
              description="A cricket scoring and analysis app built with React Native and PHP backend. Includes real-time score updates, bowling action analysis, and match history with performance insights."
              ghLink="https://github.com/hamzashoukat755/Match-Mate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
