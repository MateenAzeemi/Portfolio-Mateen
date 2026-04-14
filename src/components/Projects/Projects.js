import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              description="End-to-end food ordering for Bahrain (Calo-inspired): personalized meal plans, calorie tracking, subscription ordering, delivery tracking, and an AI assistant for meal recommendations. Stack: React Native, Node.js, Next.js, Firebase, Stripe."
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
              description="Custom Shopify apps for extended shipping, subscriptions, and cart transformation; checkout extensibility with advanced cart logic and renewals. Extensions with UI modals and product enhancements. Backend: Node.js and Next.js with Shopify Admin API and Storefront API."
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
              description="AI reading assistant (in development): OCR, GPT integration, and real-time speech feedback. Stack: React Native, Express.js, Firebase, ML Kit."
              ghLink="https://github.com/MateenAzeemi/ai-reading-assistant"
            />
          </Col>

          {/* SpeakSure */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speaksure}
              isBlog={false}
              title="SpeakSure"
              description="Final-year project: React Native app with AI chat (Dialogflow), gamification, and progress tracking. Backend: PHP and MySQL."
              ghLink="https://github.com/hamza1270/SpeakSureRepos"
            />
          </Col>

          {/* MatchMate */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matchmate}
              isBlog={false}
              title="MatchMate"
              description="Real-time cricket scoring with AI-powered bowling action analysis. Stack: React Native, PHP, and a local database."
              ghLink="https://github.com/hamzashoukat755/Match-Mate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
