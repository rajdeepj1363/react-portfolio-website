import React from "react";
import NavBarComponent from "../NavBarComponent";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import { INTRODUCTION } from "./Content";
import { Helmet } from "react-helmet";
import { Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";

const WrapperComponent = styled.section`
  position: relative;
`;
const SubSection = styled.section`
  background: #222831;
  padding: 50px 70px;
  margin: auto 15px;
  @media (max-width: 550px) {
    padding: 50px 10px;
    margin: auto 0;
  }
`;
const ProfileImage = styled.img`
  width: 175px;
  border-radius: 50%;
  margin-left: 50%;
  transform: translate(-50%, 50%);
`;
const CodingDiv = styled.div`
  padding: 10px 30px;
  background: #fff;
  margin: 20px auto;
  border-radius: 10px;
`;
const CodingImage = styled.img`
  max-width: 250px;
  max-height: 175px;
  float: left;
  margin-right: 20px;
`;
const ElectronicDiv = styled.div`
  padding: 10px 30px;
  background: #fff;
  margin: 20px auto;
  text-align: center;
  height: 550px;
  border-radius: 10px;

  @media (max-width: 550px) {
    height: auto;
    margin-bottom: 20px;
  }
`;
const ForeignLangDiv = styled.div`
  padding: 10px 30px;
  background: #fff;
  margin: 20px auto;
  text-align: center;
  height: 550px;
  border-radius: 10px;

  @media (max-width: 550px) {
    height: auto;
    margin-bottom: 20px;
  }
`;

const IntroductionDesc = styled.h3`
  color: "#fff";
  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

const ElectronicSubHeading = styled.h2`
  @media (max-width: 550px) {
    padding-top: 20px;
  }
`;

const ForeignLangSubHeading = styled.h2`
  @media (max-width: 550px) {
    padding-top: 20px;
  }
`;

const DivDetails = styled.h5`
  color: #000000;
  @media (max-width: 550px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;
// @media (max-width:550px)
//

//       .coding h5,.electronics h5,.foreign_language h5{
//         font-size: 15px;
//         margin-top:10px;
//       }

//     }
function AboutMe() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Bungee&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <NavBarComponent />
      <WrapperComponent id="aboutme">
        <div className="about_wrapper">
          <ProfileImage
            src="images/profileImage.png"
            className="about_rj_img"
            alt=""
          />

          <div className="introduction" style={{ margin: "120px 70px 20px" }}>
            <IntroductionDesc style={{ color: "#fff" }}>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#e94560", fontSize: "60px" }}
              />{" "}
              {INTRODUCTION}
            </IntroductionDesc>
          </div>

          <SubSection id="detail_about">
            <h2 style={{ color: "#ffffff", textAlign: "center" }}>
              FEW THINGS TO KNOW ABOUT ME
            </h2>
            <CodingDiv className="coding">
              <CodingImage src="images/coding.gif" alt="" />
              <div className="txt">
                <h2 style={{ textAlign: "center" }}>LET THE CODE BEGIN</h2>
                <DivDetails>
                  I began my coding journey in the 1st year of my Engineering,
                  prior to that I was a noob! Like most others, I started with C
                  & C++ to build a strong foothold and since then there was no
                  stopping me. I have explored domains like Software
                  Development, Web Development, Machine Learning and Android.
                  While Web Development and Machine Learning being my favorite
                  ones!
                </DivDetails>
              </div>
            </CodingDiv>
            <Row>
              <Col>
                <ElectronicDiv className="electronics">
                  <ElectronicSubHeading>
                    INTRODUCTION TO 5VOLTS
                  </ElectronicSubHeading>
                  <img src="images/electronics.gif" alt="" />
                  <DivDetails>
                    Well, I chose to become an Electronics Engineering student,
                    because what fascinates me the most is how software commands
                    are translated into binary 1s and 0s at electronics level. I
                    have tons of components right from Arduino UNO to my custom
                    Development Boards based on PIC, 8051. It's fun to
                    incorporate everything and watch it run on levels like 5V!
                  </DivDetails>
                </ElectronicDiv>
              </Col>
              <Col>
                <ForeignLangDiv className="foreign_language">
                  <ForeignLangSubHeading>
                    IT'S NOT JUST CODING LANGUAGES!
                  </ForeignLangSubHeading>
                  <img src="images/world.gif" alt="" />
                  <DivDetails>
                    This tale begins in my Junior College, I took French
                    language as one of my bifocal subject. I felt quite right
                    about studying a whole new foreign language but couldn't get
                    that feel! Later on I realized that my affinity towards
                    Asian Languages is much stronger than Western. Since then,
                    I'm Japanese N5 certified and studying for N4 Certification,
                    I also teach my learnings of N5 on{" "}
                    <a href="https://www.instagram.com/your.japanese.sensei">
                      Instagram
                    </a>
                    . I feel, learning a foreign language not only adds to skill
                    but creates a whole new broader perspective of the World!
                  </DivDetails>
                </ForeignLangDiv>
              </Col>
            </Row>
          </SubSection>
        </div>
        <Footer />
      </WrapperComponent>
    </>
  );
}

export default AboutMe;
