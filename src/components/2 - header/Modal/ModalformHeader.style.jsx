import styled from "styled-components";

/* Modal */

export const ModalContainer = styled.div`
background-image: linear-gradient(315deg, #f6fba2 0%, #20ded3 74%);
  padding: 30px;
  z-index:5;
  border-radius: 20px;
  box-shadow: 2px 5px 7px #000;
  @media(max-width:900px){
    display: none;
    right:0;
  }
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

export const ModalGuests = styled.div`
 display: flex;
 align-items:center;
 gap:1rem;
 margin-top:10px;
`;

export const ModalTitleGuests = styled.h5``;

export const ModalInputHGuests = styled.select`
  border-style:none;
  border: 2px solid grey;
  padding:0 10px;

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
