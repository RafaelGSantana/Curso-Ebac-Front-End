import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
`;

export const Header = styled.header`
   background: linear-gradient(to right, #fff, #000);
   width: 100%;
   height: 80px;
   box-shadow: 0 -1px 10px 0 #fff;
`;

export const HeaderContainer = styled.div`
   width: 100%;
   height: 100%;
   max-width: 91.15%;
   margin: 0 auto;

   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const LogoWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;

   div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #f00;
      border: 2px solid #919191;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 700;
      font-size: 1.6rem;
   }

   h1 {
      font-size: 1.6rem;
      color: #000;
   }
`;

export const CartIconButton = styled.div``;

export const Main = styled.div`
   width: 100%;
   height: auto;
   min-height: calc(100vh - 140px);
   border-bottom: 1px solid #e93d45;
`;

export const MainContainer = styled.div`
   width: 100%;
   height: 100%;
   padding: 2rem 0;
   max-width: 91.15%;
   margin: 0 auto;
`;


export const CarItems = styled.div`
   display: flex;
   gap: 1.5rem;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
`;

export const CarItem = styled.div`
   width: 260px;
   height: 380px;
   overflow: hidden;
   background-color: #fff;
   color: black;
   border-radius: 6px;
   padding-bottom: 8px;
   transition: transform 0.4s;

   &:hover {
      transform: translateY(-4px);
   }

   img {
      width: 100%;
      height: 60%;
      object-fit: cover;
   }
`;

export const CarDescriptions = styled.div`
   height: 40%;
   margin-top: -2px;
   margin-left: -1px;
   padding: 8px;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const CarInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
   padding-bottom: 8px;

   > div {
      p:first-child {
         font-size: 1.1rem;
         color: #000;
         letter-spacing: 1px;
         margin-bottom: 8px;
         text-align: left;
      }

      p:nth-child(2) {
         text-align: left;
         font-size: 0.8rem;
         color: #919191;
      }
   }

   p:last-child {
      font-size: 0.9rem;
      color: #000;
      text-align: end;
      margin-right: 8px;
   }
`;

export const CarItemButton = styled.button`
   width: 90%;
   height: 36px;
   background-color: #e93d45;
   margin: 0 auto;
   border: none;
   border-radius: 4px;

   display: flex;
   align-items: center;
   justify-content: center;

   color: #fff;
   font-size: 1.2rem;
   letter-spacing: 1px;

   transition: background-color 0.2s;

   &:hover {
      background-color: #f00;
   }
`;
export const Footer = styled.div`
   width: 100%;
   height: 60px;
`;

export const FooterContainer = styled.div`
   width: 100%;
   max-width: 91.15%;
   margin: 0 auto;
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;

   font-size: 0.8rem;
   font-weight: 500;
   letter-spacing: 1px;

   a {
      text-decoration: none;
      color: #fff;
      margin-left: 6px;
      transition: color 0.3s;

      &:hover {
         color: #000;
      }
   }
`;
