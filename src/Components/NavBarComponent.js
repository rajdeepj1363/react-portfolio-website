import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link as RouterLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { downloadResumeUtil } from "../common/downloadResumeUtil";

const Link = styled(RouterLink)`
  color: #ffffff;
  &:hover {
    text-decoration: none;
    color: yellow;
  }
`;
function NavBarComponent() {
  const location = useLocation();
  console.log("Location", location);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" variant="dark">
      <Navbar.Brand href={"/"}>
        <img src="images/favicons/favicon.ico" alt="RJ"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey={location.pathname}>
          <Nav.Link className="px-3" eventKey={"/about-me"}>
            <Link to={"/about-me"}>About Me</Link>
          </Nav.Link>
          <Nav.Link className="px-3" eventKey={"/qualifications"}>
            <Link to={"/qualifications"}>Education</Link>
          </Nav.Link>
          <Nav.Link className="px-3" eventKey={"/skills"}>
            <Link to={"/skills"}>Skills</Link>
          </Nav.Link>
          {/* <Nav.Link className="px-3" eventKey={"/projects"}>
            <Link to={"/projects"}>Projects</Link>
          </Nav.Link> */}
          <Nav.Link
            className="px-3"
            eventKey={"/resume"}
            onClick={downloadResumeUtil}
          >
            <Link>Resume</Link>
          </Nav.Link>
          {/* <Nav.Link className="px-3" eventKey={"/experience"}>
            <Link to={"/experience"}>Experience</Link>
          </Nav.Link> */}
          <Nav.Link className="px-3" eventKey={"/contact"}>
            <Link to={"/contact"}>Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
