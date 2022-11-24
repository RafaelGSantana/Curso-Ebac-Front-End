import { Link } from 'react-router-dom';
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
                           <p>VOLVO S90</p>
                        </div>
                        <div>
                           <p>Valor do produto:</p>
                           <p>R$ 289.900</p>
                        </div>
                        <div>
                           <p>Valor do frete:</p>
                           <p>R$ 900</p>
                        </div>
                        <div>
                           <p>total da compra:</p>
                           <p>R$ 290.800</p>
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