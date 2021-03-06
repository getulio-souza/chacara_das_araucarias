import React from "react";
import {
  ServicosContainer,
  ServicoBox1,
  ServicoBox2,
  ServicoBox3,
  ServicoBox4,
  ServicosBoxContainer,
  ServicoImg,
  ServicoTitle,
  ServicoText,
} from "./servicos.style";
import { SectionTitle } from "../General Styles/globalStyles.style";
import ImgPiscina from "../../img/Fotos/swimming.png";
import ImgChurrasqueira from "../../img/Fotos/barbecue.png";
import ImgSalaDeJogos from "../../img/Fotos/pool-table.png";
import ImgEstacionamento from "../../img/Fotos/parking-area.png";

function Servicos() {
  return (
    <ServicosContainer>
      <SectionTitle>Nossos serviços</SectionTitle>
      <ServicosBoxContainer>
        <ServicoBox1>
          <ServicoImg src={ImgPiscina}></ServicoImg>
          <ServicoTitle>Piscina</ServicoTitle>
          <ServicoText>
            Conte com uma deliciosa piscina para se refrescar durante o verão.
            Aproveite a "prainha" e a "cascata" para curtir
            ainda mais esse momento.
          </ServicoText>
        </ServicoBox1>
        <ServicoBox2>
          <ServicoImg src={ImgChurrasqueira}></ServicoImg>
          <ServicoTitle>Churrasqueira</ServicoTitle>
          <ServicoText>
            Grande e espaçosa, nossa churrasqueira é perfeita para assar aquela
            picanha suculenta. Só falta a cerveja gelada para acompanhar!
          </ServicoText>
        </ServicoBox2>
        <ServicoBox3>
          <ServicoImg src={ImgSalaDeJogos}></ServicoImg>
          <ServicoTitle>Sala de jogos</ServicoTitle>
          <ServicoText>
            Chame todo mundo para uma partida de pinball ou mostre todo o seu
            talento na mesa de bilhar!{" "}
          </ServicoText>
        </ServicoBox3>
        <ServicoBox4>
          <ServicoImg src={ImgEstacionamento}></ServicoImg>
          <ServicoTitle>Estacionamento</ServicoTitle>
          <ServicoText>
            Seu veículo fica protegido do sol e da chuva em um espaço grande e
            fácil para manobrar.
          </ServicoText>
        </ServicoBox4>
      </ServicosBoxContainer>
    </ServicosContainer>
  );
}

export default Servicos;
