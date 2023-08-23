import Calendar from "../../components/calendar/Calendar"
import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
            </div>
            <Calendar />
        </div>
    )
}

export default Home