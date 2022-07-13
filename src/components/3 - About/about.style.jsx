import styled from "styled-components";

export const AboutContainer = styled.div`
 background-color:#fff;
 width:100%;
 height:fit-content;
 padding-bottom:4rem;
 
 `;

export const AboutImg = styled.img`
object-fit:cover;
width:500px;
height:300px;
margin-bottom:2rem;
border-radius:20px;
box-shadow:2px 5px 7px #000;
@media(max-width:700px){
  width:300px;
  height:200px;
}
`;

export const AboutContent = styled.div`
 @media(max-width:900px){
    margin:0 auto;
    text-align:center;
 }
`;
export const AboutContentContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  @media(max-width:900px){
    display: flex;
    flex-direction:column;
  }
`;

export const AboutTitle = styled.h3`
  max-width:400px;
  font-size:25px;
  color:#000;
  margin:0 auto;
`;

export const AboutText = styled.p`
  max-width:400px;
`;