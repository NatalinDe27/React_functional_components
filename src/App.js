import './App.css';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import ControlMovement from "./components/common/ControlMovement";


function App() {
    return (
        <div className="App"  >
            {/*<ControlMovement/>*/}
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
