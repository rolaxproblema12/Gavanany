import React from "react";
import logo from  "./assets/Anillos.png";
function Anillos(props){
    return(
        <div>
            <div className="contenedorImgA">
                <img  src={logo}></img>
            </div>
            <div className="gridContainer container">
               {props.children}
            </div>
            <div className="contenedorPagi">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
            </div>
        </div>

    )
}
export {Anillos};