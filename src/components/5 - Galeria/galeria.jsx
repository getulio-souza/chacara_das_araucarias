import React from 'react'
import { GaleriaContainer,Galeria, ImgGaleria } from './galeria.style'
import {SectionTitle} from "../General Styles/globalStyles.style"
import img1 from "../../img/Fotos/Galeria/foto (1).jpg"
import img2 from "../../img/Fotos/Galeria/foto (2).jpg"
import img3 from "../../img/Fotos/Galeria/foto (3).jpg"
import img4 from "../../img/Fotos/Galeria/foto (4).jpg"
import img5 from "../../img/Fotos/Galeria/foto (5).jpg"

function galeria() {
  return (
      <GaleriaContainer>
          <SectionTitle>Galeria de Imagens</SectionTitle>
          <Galeria>
              <ImgGaleria src={img1}></ImgGaleria>
              <ImgGaleria src={img2}></ImgGaleria>
              <ImgGaleria src={img3}></ImgGaleria>
              <ImgGaleria src={img4}></ImgGaleria>
              <ImgGaleria src={img5}></ImgGaleria>
          </Galeria>
    </GaleriaContainer>
  )
}

export default galeria