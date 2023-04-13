import React from "react";
import logo from  "./assets/TuOpinion.png";
function TusOpiniones(props){
    return(
        <div>
            <div className="contenedorImgA">
                <img  src={logo}></img>
            </div>
            <div className="containerOpinion container">
               {props.children}
            </div>
            <div className="contenedorPagi">
                        <p>Deja aqui tu comentario...</p>
                        <p>Enviar</p>
            </div>
        </div>

    )
}
export {TusOpiniones};