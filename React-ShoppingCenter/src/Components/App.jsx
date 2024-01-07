// App component
import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Hero from "./Hero";
import ProductCard from "./ProductCard";
import LoginComponent from "./LoginPage";
import CheckOutProducts from "./CheckOutProduct";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const handleBuyClick = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <NavBar cart={cart} />
      <Hero />

      {data.length > 0 ? (
        <div className="ProductWrapper container">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              onBuyClick={handleBuyClick}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No product Found</h2>
        </div>
      )}

      <LoginComponent />
    </>
  );
}

export default App;
