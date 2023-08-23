
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import SendEmail from "./pages/send-email/SendEmail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/send-email" element={<SendEmail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
