import "./App.css";
import Grid from "./components/Grid";
import Newgame from "./components/Newgame";
import Theme from "./components/Theme";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const bitti = useSelector(item => item.memory.bitti)
  return (
    <div className="App">
      <Theme />
      <Grid />
      {bitti && <Newgame/> }
      <Footer/>
    </div>
  );
}

export default App;
