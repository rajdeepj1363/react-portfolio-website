import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./styles.css";

const RowLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: yellow;
  }
`;
function MainContainer() {
  return (
    <div className="demo">
      <div className="content">
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
          <div className="banner">
            <h2 className="bannertxt1">Hello there! I'm</h2>
            <h1 className="main-title">RAJDEEP JADHAV</h1>
            <Container>
              <Row>
                <Col>
                  <RowLink to={"/about-me"}>About Me</RowLink>
                </Col>
                <Col>
                  <RowLink to={"/qualifications"}>Education</RowLink>
                </Col>
              </Row>
              <Row>
                <Col>
                  <RowLink to={"/skills"}>Skills</RowLink>
                </Col>
                <Col>
                  <RowLink to={"/resume"}>Resume</RowLink>
                </Col>
              </Row>
              <Row>
                <Col>
                  <RowLink to={"/projects"}>Projects</RowLink>
                </Col>
                <Col>
                  <RowLink to={"/experience"}>Experience</RowLink>
                </Col>
              </Row>
              <Row>
                <Col>
                  <RowLink to={"/contact"}>Contact</RowLink>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
