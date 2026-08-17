import React from "react";
import { Col, Row } from "react-bootstrap";
import windows from "../../Assets/TechIcons/windows.svg";
import linux from "../../Assets/TechIcons/linux.png";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import vstd from "../../Assets/TechIcons/vstd.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={windows} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Windows OS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={linux} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Linux Mint</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={vstd} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
