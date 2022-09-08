import "./App.css";
import RowFirst from "./RowFirst";
import RowSecond from "./RowSecond";
import RowFourth from "./RowFourth";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="ContainerWeather">
        <RowFirst />
        <RowSecond defaultCity="Vilnius" />
        <RowFourth />
      </div>
      <Footer />
    </div>
  );
}
