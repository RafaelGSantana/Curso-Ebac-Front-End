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

export const Main = styled.div`
   width: 100%;
   height: auto;
   min-height: calc(100vh - 52px);
   border-bottom: 1px solid #000;
`;

export const MainContainer = styled.div`
   width: 100%;
   height: 100%;
   padding: 2rem 0;
   max-width: 91.15%;
   margin: 0 auto;
   margin-top: -88px;
`;

export const FilterContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2rem;
   margin-bottom: 3rem;
`;

export const FilterProduct = styled.button`
   padding: 0.5rem 2rem;
   border: none;
   border-radius: 4px;
   background-color: #fff;
   box-shadow: 0 0 8px 0 #1a1918;

   font-size: 1rem;
   font-weight: 500;

   transition: box-shadow 0.3s, transform 0.3s;
   &:hover {
      box-shadow: 0 0 12px 0 #000;
      transform: scale(1.05);
   }
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
   padding: 8px 4px;

   > div:first-child {
      width: 100%;
      height: 50%;
      padding: 8px 0;
      border-bottom: 1px solid #919191;
      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
         
      }
   }
`;

export const CarDescriptions = styled.div`
   height: 50%;
   margin-top: -2px;
   margin-left: -1px;
   padding: 8px 8px 0 8px;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const CarInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: calc(100% - 40px);

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
         margin-bottom: 5px;
      }
   }

   div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      margin-bottom: 6px;
      
      > div {
         border: 1px solid #1aff1a;
         width: auto;
         border-radius: 4px;
         background-color: #f0f5f5;
         text-align: center;
         font-weight: 500;
         color: #008000;
         font-size: 9px;
         padding: 2px 4px;
      }
         margin-top: 4px;

      p {
      font-size: 0.9rem;
      color: #000;
      text-align: end;
      margin-right: 8px;
      margin-bottom: 0;
      letter-spacing: 0px;
   }
   }

   
`;

export const CarItemButton = styled.button`
   width: 100%;
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

   transition: background-color 0.2s, transform 0.2s;

   &:hover {
      background-color: #f00;
      transform: scale(1.03);
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
