import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mateen Azeemi </span>
            from <span className="purple">Ilmenau, Germany</span> (originally
            Karachi, Pakistan).
            <br />
            I am a <span className="purple">mid-level React Native Developer</span>{" "}
            with <span className="purple">1.5+ years</span> building scalable
            cross-platform apps, plus strong{" "}
            <span className="purple">
              JavaScript, TypeScript, and full-stack work (Node.js, Laravel)
            </span>
            — including real-time features, APIs, and payments.
            <br />
            <br />
            🎓 Education: M.Sc. Research in{" "}
            <span className="purple">Computer and Systems Engineering</span> at
            Technische Universität Ilmenau (2026 – 2028, expected). Bachelor’s
            in <span className="purple">Computer Science</span> from PAF-KIET
            University (2021 – 2024), GPA 3.2 / 4.0.
            <br />
            📜 Certifications: React Native Specialization, Freelancing Basics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make an impact!"
          </p>
          <footer className="blockquote-footer">Mateen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
