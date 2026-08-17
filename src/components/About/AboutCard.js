import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Human! I’m <span className="purple">Tanuj Kumar Yadav</span>{" "}
            from <span className="purple">Madhya Pradesh, India</span>.
            <br />
            I’m currently looking for a{" "}
            <span className="purple">Software Engineer role.</span>{" "}
            <span className="purple"></span>
            <br />I have Completed my BTech Majors in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">BIST, Bhopal</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching.
            </li>
            <li className="about-activity">
              <ImPointRight /> Competetive Programming. 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tanuj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
