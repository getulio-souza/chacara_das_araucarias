import styled from 'styled-components'

export const NavbarContainer = styled.div`
  /* background-color: #93e793; */
  width: 100%;
  height:fit-content;
  display:flex;
  position:absolute;
`;

export const NavbarLogo = styled.img`
  width:150px;
  background-color:transparent;
`;

export const NavbarLinks = styled.ul`
 list-style-type: none;
 display: flex;
 align-items:center;
 gap:2rem;
 position: absolute;
 top:0;
 right:0;
 margin:1rem;
 padding:1rem;
`;
export const NavbarLink = styled.li`
background-color:green;
color:#fff;
font-size:20px;
font-weight:600;
padding:5px 15px;
font-size:20px;
font-weight:600;
border-radius:10px;
transition:.5s;
cursor: pointer;
&:hover{

background-color:#fff;
   color:green;
}
`;

export const NavbarLinkSpecial = styled.li`
   background-color:green;
   color:#fff;
   padding:10px 20px;
   border:1px solid green;
   font-size:20px;
   font-weight:600;
   border-radius:20px;
   transition:.5s;
   cursor: pointer;
   &:hover{
   background-color:blue;
   color:#fff;
   }
`;