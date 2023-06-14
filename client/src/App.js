import { BrowserRouter,Router, Switch, Routes,Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Homepage";
import Callpage from "./components/Callpage";


function App() {
  return (
    <BrowserRouter>
     <Routes>
      {/* <Switch> */}
      {/* <Route path="/" element={<Callpage />} /> */}
      <Route path="/" element={<HomePage />} />
        {/* <Route exact path="/home">
          <HomePage />
        </Route> */}
        
      {/* </Switch> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
