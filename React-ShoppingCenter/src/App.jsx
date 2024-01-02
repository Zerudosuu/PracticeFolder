import NavBar from "./Navbar";

const SHOPPING_URL = "https://api.escuelajs.co/api/v1/products";
function App() {
  fetch(SHOPPING_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let datamapped = data.map((data) => <h1>{data}</h1>);
    });

  return (
    <>
      <NavBar />;
    </>
  );
}

export default App;
