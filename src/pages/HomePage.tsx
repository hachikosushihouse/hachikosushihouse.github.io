import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Location from "../components/Location";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Home />
                    <About />
                    <Location />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
