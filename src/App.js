import "./App.css";
import RowFirst from "./RowFirst";
import RowSecond from "./RowSecond";
import RowThird from "./RowThird";
import RowFourth from "./RowFourth";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="ContainerWeather">
        <RowFirst />
        <RowSecond />
        <RowThird />
        <RowFourth />
      </div>
      <Footer />
    </div>
  );
}
