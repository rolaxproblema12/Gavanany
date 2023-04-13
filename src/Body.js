import React from "react";
import './GStyles.css';
import logo from './assets/Component1.png';
function Body(){
    return(
        <div className="container ">
            <div className="containerImg">
                <img src={logo} className="imgBody"/>
            </div>
            <div className="containerText">
                <h2 >Sobre Nosotros</h2>
                <p>lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    );
}
export {Body};