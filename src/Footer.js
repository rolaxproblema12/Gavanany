import React from "react";
import instagram from "./assets/Ig.png";
import Facebook from "./assets/Fb.png";

function Footer(){
    return(
        <div className="BgFooter">
            <div className="derechos">
                <p>Copyright 2023</p>
                <p>Todos los derechos reservados</p>
            </div>
            <div className="redes">
                <div className="iconsredes">
                    <a><img src={instagram}/></a>
                    <a><img src={Facebook}/></a>
                    
                    
                </div>
                <p>@Gavanany</p>
            </div>
        </div>
    );
}
export {Footer};