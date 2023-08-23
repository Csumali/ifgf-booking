
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import List from "./pages/list/List.jsx"
import Booking from "./pages/booking/Booking.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bookings" element={<List/>}/>
        <Route path="/bookings/:id" element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
