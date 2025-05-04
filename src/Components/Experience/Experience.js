import React from "react";
import NavBarComponent from "../NavBarComponent";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import "./styles.css";
import Footer from "../Footer/Footer";

const PageTitle = styled.h1`
  text-align: center;
  color: yellow;
  font-family: "Bungee", cursive;
  font-size: 50px;
`;
const WrapperComponent = styled.section`
  position: relative;
`;
function Experience() {
  return (
    <>
      <NavBarComponent />
      <WrapperComponent id="experience">
        <PageTitle>EXPERIENCE</PageTitle>
        <Row>
          <Col lg={12}>
            <div className="exp_detail">
              <div className="exp_img">
                <img src="images/experience/sheranis.png" alt="" />
              </div>
              <div className="exp_txt">
                <p>
                  Honed my Web Development skills by working with an Event
                  Management company, SheranisEvents. My work included 3
                  projects with deadline of 1 month each. Tasks like Creating
                  Company's Website, handling cPanel, maintaining Databases and
                  developing responsive, SEO considered projects.
                </p>
                <p>
                  Project :{" "}
                  <a href="https://www.sheranisevents.in">Click Here!</a>
                </p>
                <p>
                  <span className="exp_pos">Web Development Intern</span> @
                  SheranisEvents Pvt Ltd, Patna
                </p>
                <p>21st May 2020 - 21st August 2020 (Remote)</p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="exp_detail">
              <div className="exp_img">
                <img src="images/experience/extremityIndia.png" alt="" />
              </div>
              <div className="exp_txt">
                <p>
                  Trained by Industry people in the field of programming
                  especially C, C++ and Data Structures. Got to experience
                  Industry level codes and actual application of Data
                  Structures. Created a code based on LinkedList Data Structure
                  to represent functionalities of an ATM / Bank.
                </p>
                <p>
                  Project :{" "}
                  <a href="https://github.com/rajdeepj1363/BankingApplication">
                    Click Here!
                  </a>
                </p>
                <p>
                  <span className="exp_pos">Intern trainee</span> @ Extremity
                  India Pvt Ltd, Pune
                </p>
                <p>August 2018 - November 2018 (In-Office)</p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="exp_detail">
              <div className="exp_img">
                <img src="images/experience/birlasoft.png" alt="" />
              </div>
              <div className="exp_txt">
                <p>
                  Trained by Industry people in the field of programming
                  especially C, C++ and Data Structures. Got to experience
                  Industry level codes and actual application of Data
                  Structures. Created a code based on LinkedList Data Structure
                  to represent functionalities of an ATM / Bank.
                </p>
                {/* <p>
                  Project :{" "}
                  <a href="https://github.com/rajdeepj1363/BankingApplication">
                    Click Here!
                  </a>
                </p> */}
                <p>
                  <span className="exp_pos">Senior Software Developer</span> @
                  Birlasoft, Hyderabad
                </p>
                <p>September 2021 - August 2024 (Hybrid)</p>
              </div>
            </div>
          </Col>
        </Row>
        <Footer />
      </WrapperComponent>
    </>
  );
}

export default Experience;
