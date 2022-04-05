import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { data } from "./data.js";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {
          data.map(d => <Card
            key={d.id}
            img={d.img}
            rating={d.rating}
            reviewCount={d.reviewCount}
            country={d.country}
            title={d.title}
            price={d.price} />)
        }
      </section>
    </div>
  );
}

export default App;
