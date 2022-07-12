import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  position: relative;
`;

export const HeaderImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  @media(max-width:700px){
  background-size:contain;
  }
`;

export const HeaderContentContainer = styled.div`
  z-index:6;
  text-align:center;
`;

export const HeaderTitle = styled.h1`
  max-width:500px;
  font-size: 50px;
  color: #fff;
  text-shadow:1px 2px 3px #000;
  @media(max-width:700px){
  font-size:40px;
  }
`;

export const HeaderBtn = styled.button`
  border-style: none;
  font-size: 30px;
  background-color: green;
  color: #fff;
  padding: 10px 40px;
  border-radius: 20px;
  transition: 0.5s;
  cursor: pointer;
  @media(max-width:700px){
  font-size:20px;
  }
  &:hover {
    background-color: #fff;
    color: green;
  }
`;

