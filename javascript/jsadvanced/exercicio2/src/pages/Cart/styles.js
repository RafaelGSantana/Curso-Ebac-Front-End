import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
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

   &:hover {
      cursor: pointer;
   }

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

export const CartIconButton = styled.div`

   p {
      font-size: 0.55rem;
      font-weight: 700;
      visibility: hidden;
      letter-spacing: 0.1rem;
      text-align: center;
   }

   &:hover {
      cursor: pointer;
      p {
         visibility: visible;
      }
   }
`;

export const StyledLink = styled(Link)`
   color: #fff;
   text-decoration: none;
`;



export const Main = styled.div`
   width: 100%;
   min-height: calc(100vh - 140px);
   padding: 2rem;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   gap: 1.5rem;
`;

export const Summary = styled.div`
   width: 100%;
   max-width: 700px;
   height: auto;
   padding: 1.5rem 2rem;
   background-color: #fff;
   box-shadow: 0 0 10px #555;
   border-radius: 8px;

   display: flex;
   flex-direction: column;
   gap: 1rem;

   > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
         color: #000;
         font-weight: 500;
         font-size: 1rem;
      }

      span {
         color: #000;
         font-weight: 500;
         font-size: 1rem;
      }
   }

   button {
      width: 200px;
      align-self: flex-end;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      background-color: #e93d45;

      color: #fff;
      font-size: 1rem;
      letter-spacing: 1px;

      transition: background-color 0.2s, transform 0.2s;

      &:hover {
         background-color: #f00;
         transform: scale(1.03);
      }
   }
`;


export const CartContainer = styled.div`
   width: 100%;
   max-width: 700px;
   height: auto;
   padding: 1.5rem 0;
   background-color: #fff;
   box-shadow: 0 0 10px #555;
   border-radius: 8px;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;

   h1 {
      color: #555;
      text-align: center;
   }
`;

export const CartCard = styled.div`
   width: calc(100% - 2rem);
   background-color: #fff;
   display: flex;

   & + div {
      border-top: 1px solid #555;
   }

   > div:first-child {
      width: 40%;
      padding: 0.5rem 0;

      img {
         width: 100%;
         height: 88px;
         object-fit: contain;
      }
   }

   @media (max-width: 450px) {
      gap: 1rem;
      align-items: center;
   }
`;

export const PurchaseInfo = styled.div`
   width: 100%;
   padding: 1rem;

   div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #919191;
      margin-bottom: 0.3rem;
   }

   @media (max-width: 450px) {
      padding: 0;
   }
`;

export const PurchaseInfoItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid #919191;
   margin-bottom: 0.3rem;

   p {
      font-size:.8rem;
      color: #000;
      margin-bottom: 0.2rem;
   }
   
   @media (max-width: 450px) {
      P {
         font-size: .7rem;
         font-weight: 500;
      }
   }
`;

export const Footer = styled.div`
   width: 100%;
   height: 60px;
   border-top: 1px solid #000;
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

   @media (max-width: 450px) {
      font-size: 0.7rem;
      font-weight: 500;
   }
`;
