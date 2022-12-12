import {
   Container,
   Header,
   HeaderContainer,
   LogoWrapper,
   Main,
   MainContainer,
   FilterContainer,
   FilterProduct,
   CarItems,
   CarItem,
   CarDescriptions,
   CarInfo,
   CarItemButton,
   Footer,
   FooterContainer
} from './styles';

import { products } from '../../products';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';

export function Home({ handleAddToCart }) {
   // State that contains the list of cars that will be rendered
   const [productsList, setProductsList] = useState([]);

   const navigate = useNavigate();

   // Hook to list all cars when home page is rendered
   useEffect(() => {
      let productsListed = []

      products.forEach(product => {
         productsListed.push(product)
      })
      setProductsList(productsListed)
   }, []);


   // Function to list only the creatine
   function filterCreatine() {
      setProductsList([]);
      const response = products.filter(items => items.category === 'creatina');

      setProductsList(response)
   }

   // Function to list only the whey
   function filterWhey() {
      setProductsList([]);
      const response = products.filter(items => items.category === 'whey');

      setProductsList(response)
   }

   // Function to list only the bcaa
   function filterBcaa() {
      setProductsList([]);
      const response = products.filter(items => items.category === 'bcaa');

      setProductsList(response)
   }

   // Function to list all cars
   function listAllCars() {
      setProductsList(products);
   }

   // Function to add car in cartItems
   function addCarToCart(id) {
      handleAddToCart(id)
      navigate('/cart');
   }

   return (
      <Container>
         <Header>
            <HeaderContainer>
               <LogoWrapper onClick={listAllCars}>
                  <div>R</div>
                  <h1>nutrition</h1>
               </LogoWrapper>
               <BiCartAlt size={28} />
            </HeaderContainer>
         </Header>

         <Main>
            <MainContainer>
               <FilterContainer>
                  <FilterProduct onClick={filterWhey}>Whey</FilterProduct>
                  <FilterProduct onClick={filterCreatine}>Creatina</FilterProduct>
                  <FilterProduct onClick={filterBcaa}>BCAA</FilterProduct>
               </FilterContainer>
               <CarItems>
                  {
                     productsList.map(product => (
                        <CarItem key={product.id}>
                           <div>
                              <img src={require(`../../assets/${product.img}`)} alt="foto de um suplemento fitness" />
                           </div>
                           <CarDescriptions>
                              <CarInfo>
                                 <div>
                                    <p className="name">{product.name}</p>
                                    <p className="description">{product.description}</p>
                                 </div>
                                 <div>
                                    {
                                       !!product.shipping ? '' : <div>FRETE GRÁTIS</div>
                                    }
                                    <p className="price">
                                       {product.price.toLocaleString('pt-BR', {
                                          style: 'currency',
                                          currency: 'BRL'
                                       })}
                                    </p>
                                 </div>
                              </CarInfo>
                              <CarItemButton onClick={() => addCarToCart(product.id)}>
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