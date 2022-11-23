export function Home() {
   return (
      <div className="App">
         <header className="header">
            <div className="container">
               <div>
                  <div>R</div>
                  <h1>MOTORS</h1>
               </div>
               <div className="cart">
                  
                  <p>carrinho</p>
               </div>
            </div>
         </header>

         <main className="main">
            <div className="container">
               <div className="cars">
                  <div className="carsItem">
                     <img src="#" alt="foto de um carro" />
                     <div className="carDescriptions">
                        <p className="name">Carro1 - modelo - ano</p>
                        <p className="description">Manual, 4 portas, semi-novo</p>
                        <p className="price">R$ 99.900</p>
                        <button className="addToCart">
                           <p>ícone carrinho</p>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </main>

         <footer className="footer">
            <div className="container">
               Desenvolvido por Rafael Gonçalves Santana
            </div>
         </footer>
      </div>
   )
}