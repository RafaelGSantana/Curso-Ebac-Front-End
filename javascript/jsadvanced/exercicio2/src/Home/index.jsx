import { AiOutlineShoppingCart } from 'react-icons/ai';

import {
   Container,
   Header,
   HeaderContainer,
   LogoWrapper,
   CartIconButton,
   Main,
   MainContainer,
   CarItems,
   CarItem,
   CarDescriptions,
   CarInfo,
   CarItemButton,
   Footer,
   FooterContainer
} from './styles';

import volvo from '../assets/volvo.jpg';

export function Home() {
   return (
      <Container>
         <Header>
            <HeaderContainer>
               <LogoWrapper>
                  <div>R</div>
                  <h1>motors</h1>
               </LogoWrapper>
               <CartIconButton>
                  <AiOutlineShoppingCart size={26} />                     
               </CartIconButton>
            </HeaderContainer>
         </Header>

         <Main>
            <MainContainer>
               <CarItems>
                  <CarItem>
                     <img src={volvo} alt="foto de um carro" />
                     <CarDescriptions>
                        <CarInfo>
                           <div>
                              <p className="name">Volvo S90</p>
                              <p className="description">2.0 T8 HYBRID INSCRIPTION AWD GEARTRONIC</p>
                           </div>
                           <p className="price">R$ 99.900</p>
                        </CarInfo>
                        <CarItemButton>
                           Comprar
                        </CarItemButton>
                     </CarDescriptions>
                  </CarItem>
               </CarItems>
            </MainContainer>
         </Main>

         <Footer>
            <FooterContainer>
               Desenvolvido por
               <a href="https://www.linkedin.com/in/rafaelgoncalvessantana/" target={'_blank'} rel="noreferrer">
                  Rafael Gonçalves Santana.
               </a>
            </FooterContainer>
         </Footer>
      </Container>
   )
}