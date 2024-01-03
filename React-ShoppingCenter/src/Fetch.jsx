import { useEffect } from "react";

const SHOPPING_URL = "https://api.escuelajs.co/api/v1/products";

const FetchData = () => {
  useEffect(() => {
    fetch(SHOPPING_URL)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <div>Different ways to fetch Data</div>;
};

export default FetchData;
