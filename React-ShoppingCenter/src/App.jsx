import NavBar from "./Navbar";
import FetchData from "./Fetch";
function App() {
  FetchData();
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
