import CarCards from "../Components/carCard";
import Footer from "../Components/Footer"
import Header from "../Components/Header"
function Home() {
    return(
         <div> 
               <Header/>
      <section className="hero">
        <div className="hero-text">
         
          <h1>
            Find Your <span>Dream Car</span>
          </h1>

          <p>
            Explore the best cars with amazing prices and features.
            Choose your perfect car today.
          </p>

        </div>

        <div className="hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrx7ZyP0tnlDWFqpgHwgjrlc-Dq4s3WmygCmaZo2NqfA&s=10"
            alt="Luxury Car"
          />
        </div>
      </section>
      <section className="cars-section">
          <h2>Popular Cars</h2>
        <div className="car-container">
          <CarCards />
        </div>
      </section>
      <Footer/>
      </div>
    )
}
export default Home