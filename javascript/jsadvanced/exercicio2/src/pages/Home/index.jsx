import {
   Container,
   Header,
   HeaderContainer,
   LogoWrapper,
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

import { cars } from '../../cars';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
   // State that contains the list of cars that will be rendered
   const [carsList, setCarsList] = useState([]);

   const navigate = useNavigate();

   // Hook to list all cars when home page is rendered
   useEffect(() => {
      setCarsList(cars)
   }, []);

   // Function to list only the cars 0km
   function filterNewCars() {
      setCarsList([]);
      const response = cars.filter(items => items.new === true);

      setCarsList(response)
   }

   // Function to list only the cars semi-new
   function filterSemiNewCars() {
      setCarsList([]);
      const response = cars.filter(items => items.new === false);

      setCarsList(response)
   }

   // Function to list all cars
   function listAllCars() {
      setCarsList(cars);
   }

   // Function to add car in cartItems
   function addCarToCart(id) {
      const selectedCar = cars.filter(item => item.id === id);

      localStorage.setItem('@loja-de-carros', JSON.stringify(selectedCar))

      navigate('/cart');
   }

   return (
      <Container>
         <Header>
            <HeaderContainer>
               <LogoWrapper onClick={listAllCars}>
                  <div>R</div>
                  <h1>motors</h1>
               </LogoWrapper>
            </HeaderContainer>
         </Header>

         <Main>
            <MainContainer>
               <FilterContainer>
                  <FilterCars onClick={filterNewCars}>Novos</FilterCars>
                  <FilterCars onClick={filterSemiNewCars}>Semi-Novos</FilterCars>
               </FilterContainer>
               <CarItems>
                  {
                     carsList.map(car => (
                        <CarItem key={car.id}>
                           <img src={require(`../../assets/${car.img}`)} alt="foto de um carro" />
                           <CarDescriptions>
                              <CarInfo>
                                 <div>
                                    <p className="name">{car.name}</p>
                                    <p className="description">{car.description}</p>
                                 </div>
                                 <div>
                                    {
                                       car.shipping ? '' : <div>FRETE GRÁTIS</div>
                                    }
                                    <p className="price">
                                       {car.price.toLocaleString('pt-BR', {
                                          style: 'currency',
                                          currency: 'BRL'
                                       })}
                                    </p>
                                 </div>
                              </CarInfo>
                              <CarItemButton onClick={() => addCarToCart(car.id)}>
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