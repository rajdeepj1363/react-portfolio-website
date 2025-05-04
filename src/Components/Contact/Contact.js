import React from "react";
import NavBarComponent from "../NavBarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import styled from "styled-components";
import Footer from "../Footer/Footer";

const ContactIcons = styled(FontAwesomeIcon)`
  font-size: 16vw;
  margin: 100px 15px auto 15px;
`;
function Contact() {
  return (
    <>
      <NavBarComponent />
      <section id="contactme" style={{ textAlign: "center" }}>
        <h1>
          <span
            style={{
              color: "yellow",
              fontFamily: "'Bungee', cursive",
              fontSize: "50px",
            }}
          >
            Connect with me{" "}
          </span>{" "}
          <FontAwesomeIcon icon={faArrowDown} />
        </h1>
        <div class="contact-form">
          <div class="social_icons">
            <a href="https://www.linkedin.com/in/rajdeepjadhav">
              <ContactIcons icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/rajdeep.jadhav.92/">
              <ContactIcons icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/rajdeepjadhav.ig/">
              <ContactIcons icon={faInstagram} />
            </a>
            <a href="https://github.com/rajdeepj1363">
              <ContactIcons icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
