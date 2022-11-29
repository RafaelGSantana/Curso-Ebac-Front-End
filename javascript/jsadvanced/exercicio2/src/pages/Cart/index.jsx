import { BiArrowBack } from 'react-icons/bi';

import {
   Container,
   Header,
   HeaderContainer,
   LogoWrapper,
   CartIconButton,
   StyledLink,
   Main,
   CartContainer,
   CartCard,
   PurchaseInfo,
   Footer,
   FooterContainer
} from './styles';
import { useEffect, useState } from 'react';

export function Cart() {
   const [car, setCar] = useState([{}]);

   useEffect(() => {
      const carSaved = localStorage.getItem('@loja-de-carros');
      const response = JSON.parse(carSaved)
      
      setCar(response);
   }, []);
console.log(car)

   return (
      <Container>
         <Header>
            <HeaderContainer>
               <LogoWrapper onClick={() => {}}>
                  <div>R</div>
                  <h1>motors</h1>
               </LogoWrapper>
               <CartIconButton>
                  <StyledLink  to={'/'}>
                     <p>Voltar</p>
                     <BiArrowBack size={32} />
                  </StyledLink>
               </CartIconButton>
            </HeaderContainer>
         </Header>

         <Main>
            <CartContainer>
               <CartCard>
                  <img src={require('../../assets/volvo.jpg')} alt='' />
                  <PurchaseInfo>
                        <div>
                           <p>Nome</p>
                           <p>{car[0].name && car[0].name}</p>
                        </div>
                        <div>
                           <p>Valor do produto:</p>
                           <p>{car[0].price && car[0].price.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                           })}</p>
                        </div>
                        <div>
                           <p>Valor do frete:</p>
                           <p>{car[0].shipping ? 'R$ 900,00' : 'Grátis'}</p>
                        </div>
                        <div>
                           <p>Valor total da compra:</p>
                           <p>{car[0].total}</p>
                        </div>
                     <button>Confirmar compra</button>
                  </PurchaseInfo>
               </CartCard>
            </CartContainer>
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