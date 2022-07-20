import Home from "./pages/Home/Home"
import Sucess from "./pages/Sucess/Sucess"
import Errorpage from "./pages/Error/Error"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Home />}/>
        <Route exact path = "/Sucess" element = {<Sucess />}/>
        <Route path = "*" element = {<Errorpage />}/>
      </Routes>
    </Router>
  );
}

export default App;
