import { AiOutlineShoppingCart } from 'react-icons/ai';

import {
   Container,
   Header,
   HeaderContainer,
   LogoWrapper,
   CartIconButton,
   Main,
   MainContainer,
   FilterContainer,
   FilterCars,
   CarItems,
   CarItem,
   CarDescriptions,
   CarInfo,
   CarItemButton,
   Footer,
   FooterContainer
} from './styles';

import { cars } from '../cars.js';

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
               <FilterContainer>
                  <FilterCars>Novos</FilterCars>
                  <FilterCars>Semi-Novos</FilterCars>
               </FilterContainer>
               <CarItems>
                  {
                     cars.map(car => (
                        <CarItem key={car.id}>
                           <img src={require(`../assets/${car.img}`)} alt="foto de um carro" />
                           <CarDescriptions>
                              <CarInfo>
                                 <div>
                                    <p className="name">{car.name}</p>
                                    <p className="description">{car.description}</p>
                                 </div>
                                 <p className="price">{car.price}</p>
                              </CarInfo>
                              <CarItemButton>
                                 Comprar
                              </CarItemButton>
                           </CarDescriptions>
                        </CarItem>
                     ))
                  }
                  
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