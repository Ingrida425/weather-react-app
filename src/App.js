import "./App.css";

import Footer from "./Footer";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="ContainerWeather">
        <Search defaultCity="Berlin" />
      </div>
      <Footer />
    </div>
  );
}
