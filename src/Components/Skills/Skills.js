import React from "react";
import NavBarComponent from "../NavBarComponent";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./styles.css";
import Footer from "../Footer/Footer";

const FIcon = styled(FontAwesomeIcon)`
  font-size: 80px;
  color: #eeee;
`;
const WrapperComponent = styled.section`
  margin-top: 25px;
  text-align: center;
`;
function Skills() {
  return (
    <>
      <NavBarComponent />
      <WrapperComponent class="skill-div">
        <h1>Skills</h1>
        <h3>Things I'm proficient in working with!</h3>

        <Row style={{ margin: "30px auto" }}>
          <Col md={6} lg={4} className="c">
            <FIcon icon={faCode} />
            <h5>
              Programming with Python, Java,
              <br /> JS, C++, C
            </h5>
          </Col>
          <Col md={6} lg={4} className="c">
            <FIcon icon={faDatabase} />
            <h5>
              Database management using <br />
              SQL, Firebase
            </h5>
          </Col>
          <Col md={6} lg={4} className="c">
            <FIcon icon={faGithub} />
            <h5>Git</h5>
          </Col>
          <Col md={6} lg={4} className="c">
            <FIcon icon={faFileCsv} />
            <h5>
              Data Extraction, Data Cleaning, <br />
              Data Visualisation, Model Training
            </h5>
          </Col>
          <Col md={6} lg={4} className="c">
            <FIcon icon={faTools} />
            <h5>
              Embedded Electronics, PIC Microcontrollers, <br />
              ARM Processors, Assembly Language
            </h5>
          </Col>
          <Col md={6} lg={4} className="c">
            <FIcon icon={faLanguage} />
            <h5>
              Foreign Language Enthusiast <br /> JLPT N5 Certified
            </h5>
          </Col>
        </Row>
      </WrapperComponent>
      <Footer />
    </>
  );
}

export default Skills;
