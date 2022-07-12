import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const HeaderContentContainer = styled.div`
  position: absolute;
  left:20%;
  text-align:center;
`;

export const HeaderTitle = styled.h1`
  font-size: 50px;
  color: #fff;
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
  &:hover {
    background-color: #fff;
    color: green;
  }
`;

