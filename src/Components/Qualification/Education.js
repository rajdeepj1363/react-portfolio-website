import React from "react";
import NavBarComponent from "../NavBarComponent";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../Footer/Footer";

const PageHeading = styled.h1`
  margin-top: 50px;
  font-family: "Bungee", cursive;
  font-size: 50px;
  color: yellow;
`;
const SchoolHeading = styled.h3`
  color: #838383;
`;
const SchoolSubHeading = styled.h5`
  color: #ffffff;
`;
const WrapperContainer = styled.section`
  position: relative;
  text-align: center;
  overflow-x: hidden;
`;
function Education() {
  return (
    <>
      <NavBarComponent />
      <WrapperContainer id="education">
        <PageHeading>education</PageHeading>
        <Row>
          <Col>
            <div className="school">
              <img src="images/sacred_heart.jpeg" alt="" />
              <SchoolHeading>SACRED HEART HIGHSCHOOL, RATNAGIRI</SchoolHeading>
            </div>
          </Col>
          <Col>
            <div className="school">
              <img src="images/xaviers_kop.jpg" alt="" />
              <SchoolHeading>ST XAVIER'S HIGHSCHOOL, KOLHAPUR</SchoolHeading>
              <SchoolSubHeading>SSC (89.60%) 2015</SchoolSubHeading>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="school">
              <img src="images/xaviers_mum.jpg" alt="" />
              <SchoolHeading>ST XAVIER'S COLLEGE, MUMBAI</SchoolHeading>
              <SchoolSubHeading>SCIENCE, HSC (74.31%) 2017</SchoolSubHeading>
            </div>
          </Col>
          <Col>
            <div className="school">
              <img src="images/sinhgad.jpg" alt="" />
              <SchoolHeading>
                SINHGAD'S SMT KASHIBAI NAVALE COLLEGE OF ENGINEERING, PUNE
              </SchoolHeading>
              <SchoolSubHeading>
                BE ELECTRONICS & TELECOMMUNICATION (CGPA: 8.87) 2021
              </SchoolSubHeading>
            </div>
          </Col>
        </Row>
        <Footer />
      </WrapperContainer>
    </>
  );
}

export default Education;
