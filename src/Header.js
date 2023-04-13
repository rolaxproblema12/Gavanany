import React from 'react';
import logo from './assets/LOGO.png';
import './GStyles.css';
function Header(){
    console.log(logo);
    return(
        <div className='container-Hader'>
            <div>
                <img className='imgLogo' src={logo}/>
            </div>
            <nav className='navegacion'>
                    <a>INICIO</a>
                    <a>CATÁLOGO</a>
                    <a>TU OPINIÓN</a>
                    <a>CARRITO</a>
            </nav>

        </div>
    );
}
export {Header};