import { useEffect, useState } from 'react';
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


export function Cart() {
   const [product, setProduct] = useState([{}]);

   useEffect(() => {
      const productSaved = localStorage.getItem('@loja-de-suplementos');
      console.log(productSaved)
      const response = JSON.parse(productSaved)
      console.log(response)
      
      setProduct(response);
   }, []);
// console.log(car)

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
                  <img src={product[0].img && require(`../../assets/${product[0].img}`)} alt="foto de um suplemento fitness" />
                  <PurchaseInfo>
                        <div>
                           <p>Nome</p>
                           <p>{product[0].name && product[0].name}</p>
                        </div>
                        <div>
                           <p>Valor do produto:</p>
                           <p>{product[0].price && product[0].price.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                           })}</p>
                        </div>
                        <div>
                           <p>Valor do frete:</p>
                           <p>{product[0].shipping ? 'R$ 900,00' : 'Grátis'}</p>
                        </div>
                        <div>
                           <p>Valor total da compra:</p>
                           <p>{product[0].total}</p>
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