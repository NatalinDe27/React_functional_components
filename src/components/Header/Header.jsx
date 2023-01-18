import React from 'react';
import './Header_style.css';
// import Snow from "../Snow/Snow";
import search from './search.svg';
import shoppingCart from './shoppingCart.svg';

const Header = () => {
    return (
        <div className="header">
            {/*<Snow/>*/}
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
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
                    <li><a href="#">Sign in</a></li>
                    <li><a href="#"><img src={search} alt="search"/></a></li>
                    <li><a href="#"><img src={shoppingCart} alt="bag"
                                         style={{maxWidth: '24px', maxHeight: '24px',}}/></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;