import NavBar from "./Navbar";
import Hero from "./Hero";
import ProductCard from "./ProductCard";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <Hero />

      {data.length > 0 ? (
        <div className="ProductWrapper container">
          {data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No product Found</h2>
        </div>
      )}
    </>
  );
}

export default App;
