import styled from "styled-components";

export const ServicosContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 4rem;
`;

export const ServicosBoxContainer = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 2rem;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const ServicoBox1 = styled.div`
  background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);
  /* background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%); */
  width: 300px;
  height: 400px;
  box-shadow: 2px 3px 5px #000;
  text-align: center;
  padding: 10px;
  border-radius:20px;
  transition: 0.5s;
  cursor: default;
  &:hover{
    transform: translateY(-10px);
  }
`;

export const ServicoBox2 = styled.div`
background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);
  width: 300px;
  height: 400px;
  box-shadow: 2px 3px 5px #000;
  text-align: center;
  padding: 10px;
  border-radius:20px;
  transition: 0.5s;
  cursor: default;
  &:hover{
    transform: translateY(-10px);
  }
`;
export const ServicoBox3 = styled.div`
background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);
  width: 300px;
  height: 400px;
  box-shadow: 2px 3px 5px #000;
  text-align: center;
  padding: 10px;
  border-radius:20px;
  transition: 0.5s;
  cursor: default;
  &:hover{
    transform: translateY(-10px);
  }
`;
export const ServicoBox4 = styled.div`
background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);
  width: 300px;
  height: 400px;
  box-shadow: 2px 3px 5px #000;
  text-align: center;
  padding: 10px;
  border-radius:20px;
  transition: 0.5s;
  cursor: default;
  &:hover{
    transform: translateY(-10px);
  }
`;

export const ServicoImg = styled.img`
  width: 50px;
  height: fit-content;
  margin-top: 20px;
`;

export const ServicoTitle = styled.h4`
  font-size: 25px;
  padding-top: 10px;
  color: #fff;
  text-shadow: 1px 2px 5px #000;
`;
export const ServicoText = styled.p`
  max-width: 200px;
  margin: 0 auto;
  color: #fff;
  font-weight: 700;
  text-shadow: 1px 2px 5px #000;
`;

//https://www.eggradients.com/category/green-gradient
