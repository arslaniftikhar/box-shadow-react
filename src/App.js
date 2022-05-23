import './App.css';
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className={'main'}>
            <Navbar/>
            <Card/>
            <Footer/>
        </div>
    );
}

export default App;
