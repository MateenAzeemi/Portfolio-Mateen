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
            from <span className="purple">Karachi, Pakistan.</span>
            <br />
            I am a passionate <span className="purple">Full-Stack Developer</span> 
            with hands-on experience in 
            <span className="purple"> React Native, Next.js, Laravel, and MySQL</span>.
            <br />
            <br />
            🎓 Education:  
            Bachelor’s in <span className="purple">Computer Science</span>  
            from PAF-KIET University (2021 – 2024).  
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
