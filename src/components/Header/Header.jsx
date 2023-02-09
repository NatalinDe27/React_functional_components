import React from 'react';
import './Header_style.css';
// import Snow from "../Snow/Snow";
import search from './search.svg';
import shoppingCart from './shoppingCart.svg';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";


const Header = () => {
    const location = useLocation()
    const {signOut} = useAuth();

    const navigate = useNavigate ();
    const isLogin = location.pathname === '/'

    return (
        <div className="header">
            {/*<Snow/>*/}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">Women`s fashion</a>
                        <ul>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Jewelry</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Men`s fashion</a>
                        <ul>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Electronics</a></li>

                    {isLogin ?
                        <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Log out </button>
                        :
                        <li><Link to="login">Sign in</Link></li>
                    }
                    <li><a href="#"><img src={search} alt="search"/></a></li>
                    <li><a href="#"><img src={shoppingCart} alt="bag"
                                         style={{maxWidth: '24px', maxHeight: '24px',}}/></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;