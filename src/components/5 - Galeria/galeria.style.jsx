import styled from "styled-components";

export const GaleriaContainer = styled.div`
  width:100%;
  height:fit-content;
`;

export const Galeria = styled.div`
  display: grid;
  grid-column-end: auto;
  @media(max-width:700px){
   display: grid;
   grid-template-columns:1fr;
   justify-items:center;
}
@media(min-width:800px){
    display: grid;
    grid-template-columns:repeat(3,1fr)
}
@media(min-width:1400px){
      display: grid;
      grid-template-columns:repeat(5,1fr)

  }
`;

export const ImgGaleria = styled.img`
  width:300px;
  height:300px;
  object-fit:cover;
`;