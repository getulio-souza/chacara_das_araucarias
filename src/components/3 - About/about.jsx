import React from "react";
import { AboutContainer, AboutImg,AboutContent,AboutTitle, AboutText,   } from "./about.style";
import { SectionTitle } from "../General Styles/globalStyles.style";
import AboutImage from "../../img/Fotos/foto2.jpg";

function About() {
  return (
    <AboutContainer>
      <SectionTitle>Quem somos</SectionTitle>
      <AboutImg src={AboutImage}>
      </AboutImg>
      <AboutContent>
        <AboutTitle></AboutTitle>
        <AboutText></AboutText>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
