import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {

  const experience = {
    img: "https://images.unsplash.com/photo-1531159243698-b48e4c40c228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    rating: 5.0,
    reviewCount: 6,
    country: "USA",
    title: "Life lessons with Katie",
    price: 136
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img={experience.img} 
        rating={experience.rating} 
        reviewCount={experience.reviewCount} 
        country={experience.country} 
        title={experience.title} 
        price={experience.price} />
    </div>
  );
}

export default App;
