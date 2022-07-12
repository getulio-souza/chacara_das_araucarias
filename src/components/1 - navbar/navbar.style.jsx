import styled from 'styled-components'

export const NavbarContainer = styled.div`
  /* background-color: #93e793; */
  width: 100%;
  height:fit-content;
  display:flex;
  position:absolute;
  z-index:5;
`;

export const NavbarLogo = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  width:150px;
  background-color:transparent;
  @media (max-width:900px){
  width: 80px;
 }
`;

export const NavbarLinks = styled.ul`
 list-style-type: none;
 display: flex;
 align-items:center;
 gap:2rem;
 position: fixed;
 top:0;
 right:0;
 margin:1rem;
 padding:1rem;
 
 `;
export const NavbarLink = styled.li`
color:#fff;
text-shadow:1px 2px 3px #000;
border:1px solid #000;
font-size:20px;
font-weight:600;
padding:10px 20px;
font-size:20px;
font-weight:600;
border-radius:10px;
transition:.5s;
@media(max-width:900px){
  display: none;
 }
cursor: pointer;
&:hover{
text-shadow:none;
background-color:#3a963a;
color: #fff;
}
`;

export const NavbarLinkSpecial = styled.li`
   background-color:#3a963a;
   color:#fff;
   text-shadow:1px 2px 3px #000;
   padding:10px 20px;
   font-size:20px;
   font-weight:600;
   border-radius:20px;
   transition:.5s;
   cursor: pointer;
   &:hover{
   background-color:#fff;
   color:#3a963a;
   text-shadow:none;
   }
`;

export const NavbarMobile = styled.div`
 position:absolute;
 top:0;
 right:0;
 background-color:3a963a;
 width:50%;
 height:60vh;
 z-index:6;
 display:none; //escode a barra lateral
 @media (min-width:950px){
  display: none;
 } 
`;

export const NavbarMobileLinks = styled.div`
  
   list-style-type:none;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
`;

export const NavbarMobileLink = styled.li`
  width:max-content;
  color:#fff;
  font-weight:700;
  padding:10px 0;
  cursor:pointer;
  transition:.5s;
  padding:10px;
  text-align:center;
  margin:0 10px;
    font-size:20px;
  @media(max-width:900px){
  }
  &:hover{
    background-color:#fff;
    color: #3a963a;
  }
`;

export const NavbarOpenCloseBtn = styled.button`
 color:#fff;
 font-size:20px;
 font-weight:900;
 border-style:none;
 margin-top:10px;
 margin-right:10px;
 background-color:transparent;
 position:absolute;
 top:0;
 right:0;
 cursor:pointer;
 transition:.5s;
 &:hover{
  color:red;
 }
`;