import React from "react";
import {
  ModalContainer,
  ModalTitle,
  ModalWhereLabelContainer,
  ModalCheckinTitle,
  ModalCheckinInput,
  ModalCheckoutTitle,
  ModalCheckOutInput,
  ModalGuests,
  ModalTitleGuests,
  ModalSearchBtn,
} from "./ModalformHeader.style";

function ModalformHeader() {
  return (
    <ModalContainer>
      <ModalTitle>Faça sua reserva</ModalTitle>
      <ModalWhereLabelContainer>
        <ModalCheckinTitle>Entrada</ModalCheckinTitle>
        <ModalCheckinInput></ModalCheckinInput>
        <ModalCheckoutTitle>Saída</ModalCheckoutTitle>
        <ModalCheckOutInput></ModalCheckOutInput>
      </ModalWhereLabelContainer>
      <ModalGuests>
        <ModalTitleGuests>Convidados</ModalTitleGuests>
        <select name="convidados">
          <option value="">selecione</option>
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </ModalGuests>
      <ModalSearchBtn>Consultar</ModalSearchBtn>
    </ModalContainer>
  );
}

export default ModalformHeader;
