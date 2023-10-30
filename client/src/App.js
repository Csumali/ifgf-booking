
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import FacilityOptions from "./pages/facility options/FacilityOptions.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/facility-options" element={<FacilityOptions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
