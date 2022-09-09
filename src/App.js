import "./App.css";
import RowSecond from "./RowSecond";
import RowFourth from "./RowFourth";
import Footer from "./Footer";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="ContainerWeather">
        <Search />
        <RowSecond defaultCity="Berlin" />
        <RowFourth />
      </div>
      <Footer />
    </div>
  );
}
