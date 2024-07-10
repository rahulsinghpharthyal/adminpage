import Home from "./pages/Home";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="sticky top-0 p-10">
        <NavBar/>
      </div>

      <Home />
    </div>
  );
}

export default App;
