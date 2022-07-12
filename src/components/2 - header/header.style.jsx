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

/* Modal */

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  position: absolute;
  right: 20%;
  border-radius: 20px;
  box-shadow: 2px 5px 7px #000;
`;

export const ModalTitle = styled.h3`
  font-size: 30px;
`;

export const ModalWhereLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalCheckinTitle = styled.h5``;

export const ModalCheckinInput = styled.data`
  border-style: none;
  border-bottom: 0.2px solid #000;
`;

export const ModalCheckoutTitle = styled.h5``;

export const ModalCheckOutInput = styled.input`
  border-style: none;
  border-bottom: 0.5px solid #000;
`;

export const ModalGuests = styled.div``;

export const ModalTitleGuests = styled.h5``;

export const ModalInputHGuests = styled.select`
  margin-bottom: 20px;
`;

export const ModalSearchBtn = styled.button`
  border-style: none;
  background-color: green;
  color: #fff;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 20px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
