import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const SHOPPING_URL = "https://api.escuelajs.co/api/v1/products";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SHOPPING_URL);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  <ProductCard data={data} />;
};

export default FetchData;
