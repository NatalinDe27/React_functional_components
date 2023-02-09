import './App.css';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
// import ControlMovement from "./components/common/ControlMovement";
import {AuthProvider} from './hoc/AuthProvider';
import {RequireAuth} from './hoc/RequireAuth';
import {LoginPage} from './pages/LoginPage';


function App() {

    return (
        <div>
            <AuthProvider>
                <Header/>
                <Routes>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="/" element={
                        <RequireAuth>
                            <Main/>
                        </RequireAuth>
                    }/>
                </Routes>
                {/*<ControlMovement/>*/}
                <Footer/>
            </AuthProvider>
        </div>

    );
}

export default App;
