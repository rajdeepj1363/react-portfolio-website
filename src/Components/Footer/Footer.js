import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FooterWrapperSection = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const FooterText = styled.p`
  text-align: center;
  color: #ffffff;
`;

function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const yr = new Date().getFullYear();
    if (yr != null && yr > 0) {
      setYear(yr);
    } else setYear(2025);
  }, []);
  return (
    <FooterWrapperSection>
      <FooterText>&copy;{year} Rajdeep Jadhav</FooterText>
    </FooterWrapperSection>
  );
}

export default Footer;
