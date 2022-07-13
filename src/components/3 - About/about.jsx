import React from "react";
import {
  AboutContainer,
  AboutImg,
  AboutContentContainer,
  AboutContent,
  AboutTitle,
  AboutText,
} from "./about.style";
import { SectionTitle } from "../General Styles/globalStyles.style";
import AboutImage from "../../img/Fotos/foto2.jpg";

function About() {
  return (
    <AboutContainer>
      <SectionTitle>Quem somos</SectionTitle>
      <AboutContentContainer>
        <AboutImg src={AboutImage}></AboutImg>
        <AboutContent>
          <AboutTitle>
            Venha relaxar e se divertir em meio à natureza!
          </AboutTitle>
          <AboutText>
            Criamos este espaço para que você possa aproveitar as maravilhas da
            natureza ao lado da sua família e dos seus amigos.
          </AboutText>
          <AboutText>
            Dê um pulo na piscina, faça aquele churrasco, tire uma soneca nas
            redes e escute os pássaros cantando.
          </AboutText>
        </AboutContent>
      </AboutContentContainer>
    </AboutContainer>
  );
}

export default About;
