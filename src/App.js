import "./App.css";
import RowFourth from "./RowFourth";
import Footer from "./Footer";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="ContainerWeather">
        <Search defaultCity="Lisbon" />
        <RowFourth />
      </div>
      <Footer />
    </div>
  );
}
