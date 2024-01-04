import { useState, useEffect } from "react";

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

  return <div>Different ways to fetch Data</div>;
};

export default FetchData;
