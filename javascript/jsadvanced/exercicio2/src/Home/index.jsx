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

import { cars } from '../cars.js';

export function Home() {

   // const cars = [
   //    {
   //       id: 1,
   //       name: 'VOLVO S90',
   //       img: '../assets/volvo.jpg',
   //       new: false,
   //       description: '2.0 T8 HYBRID INSCRIPTION AWD GEARTRONIC',
   //       year: '2019/2020',
   //       km: 18811,
   //       price: 'R$ 289.900'
   //    },
   //    {
   //       id: 2,
   //       name: 'NISSAN LEAF',
   //       img: '../assets/leaf.jpg',
   //       new: false,
   //       description: 'B12P 40 ELÉTRICO',
   //       year: '2019/2020',
   //       km: 24527,
   //       price: 'R$ 175.950'
   //    },
   //    {
   //       id: 3,
   //       name: 'PORSCHE CAYENNE',
   //       img: '../assets/porsche.jpg',
   //       new: false,
   //       description: '3.0 V6 E-HYBRID AWD TIPTRONIC S',
   //       year: '2020/2020',
   //       km: 19710,
   //       price: 'R$ 619.900'
   //    },
   //    {
   //       id: 4,
   //       name: 'MERCEDES-BENZ GLE 350',
   //       img: '../assets/mbenz350.jpg',
   //       new: false,
   //       description: '3.0 V6 BLUETEC DIESEL SPORT 4MATIC 9G-TRONIC',
   //       year: '2015/2016',
   //       km: 64700,
   //       price: 'R$ 268.900'
   //    },
   //    {
   //       id: 5,
   //       name: 'AUDI Q7',
   //       img: '../assets/audiq7.jpg',
   //       new: false,
   //       description: '3.0 V6 TDI DIESEL PERFORMANCE TIPTRONIC',
   //       year: '2019/2019',
   //       km: 32000,
   //       price: 'R$ 384.900'
   //    },
   //    {
   //       id: 6,
   //       name: 'TESLA MODEL Y',
   //       img: '../assets/tesla.jpg',
   //       new: true,
   //       description: 'P100D PERFORMANCE AWD ELÉTRICO',
   //       year: '2022/2022',
   //       km: 0,
   //       price: 'R$ 749.890'
   //    },
   //    {
   //       id: 7,
   //       name: 'JEEP COMMANDER',
   //       img: '../assets/jeep.jpg',
   //       new: true,
   //       description: '2.0 TD380 TURBO DIESEL OVERLAND AT9',
   //       year: '2022/2022',
   //       km: 0,
   //       price: 'R$ 287.900'
   //    },
   //    {
   //       id: 8,
   //       name: 'HONDA HR-V',
   //       img: '../assets/hrv.jpg',
   //       new: true,
   //       description: '1.5 DI I-VTEC FLEX EX CVT',
   //       year: '2022/2023',
   //       km: 0,
   //       price: 'R$ 164.900'
   //    },
   //    {
   //       id: 9,
   //       name: 'AUDI Q3',
   //       img: '../assets/audiq3.jpg',
   //       new: true,
   //       description: '2.0 40 TFSI GASOLINA PERFORMANCE QUATTRO TIPTRONIC',
   //       year: '2022/2022',
   //       km: 0,
   //       price: 'R$ 304.000'
   //    },
   //    {
   //       id: 10,
   //       name: 'RAM 3500',
   //       img: '../assets/ram3500.jpg',
   //       new: true,
   //       description: '6,7 I6 TURBO DIESEL LARAMIE CD 4X4 AUTOMÁTICO',
   //       year: '2022/2022',
   //       km: 0,
   //       price: 'R$ 539.000'
   //    }
   // ]

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