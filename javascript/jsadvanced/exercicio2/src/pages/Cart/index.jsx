import { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';

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
   PurchaseInfoItem,
   Footer,
   FooterContainer
} from './styles';


export function Cart({ cart }) {
   const [products, setProducts] = useState([{}]);

   const navigate = useNavigate();

   useEffect(() => {
      setProducts(cart);
   }, [setProducts, cart]);

   function purchaseConfirmation() {
      alert('Compra realizada com sucesso!')
      navigate('/')
   }

   console.log(products)


   return (
      <Container>
         <Header>
            <HeaderContainer>
               <LogoWrapper onClick={() => navigate('/')}>
                  <div>R</div>
                  <h1>nutrition</h1>
               </LogoWrapper>
               <CartIconButton>
                  <StyledLink to={'/'}>
                     <p>Voltar</p>
                     <BiArrowBack size={32} />
                  </StyledLink>
               </CartIconButton>
            </HeaderContainer>
         </Header>

         <Main>
            <CartContainer>
               {
                  products && products.map(product => (
                     <CartCard key={product.id}>
                        <div>
                           <img src={product.img && require(`../../assets/${product.img}`)} alt="foto de um suplemento fitness" />
                        </div>
                        <PurchaseInfo>
                           <PurchaseInfoItem>
                              <p>Nome</p>
                              <p>{product.name && product.name}</p>
                           </PurchaseInfoItem>

                           <PurchaseInfoItem>
                              <p>Valor do produto:</p>
                              <p>{product.price && product.price.toLocaleString('pt-BR', {
                                 style: 'currency',
                                 currency: 'BRL'
                              })}</p>
                           </PurchaseInfoItem>

                           <PurchaseInfoItem>
                              <p>Valor do frete:</p>
                              <p>
                                 {
                                    product.shipping
                                       ? product.shipping.toLocaleString('pt-BR', {
                                          style: 'currency',
                                          currency: 'BRL'
                                       })
                                       : 'Grátis'
                                 }
                              </p>
                           </PurchaseInfoItem>

                           <PurchaseInfoItem>
                              <p>Valor total da compra:</p>
                              <p>
                                 {
                                    (product.price + product.shipping).toLocaleString('pt-BR', {
                                       style: 'currency',
                                       currency: 'BRL'
                                    })
                                 }
                              </p>
                           </PurchaseInfoItem>

                           <button onClick={() => purchaseConfirmation()}>Confirmar compra</button>
                        </PurchaseInfo>
                     </CartCard>
                  ))
               }

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