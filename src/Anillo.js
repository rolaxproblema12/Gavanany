import React from 'react';
import './GStyles.css';
function Anillo(props){
    console.log(props.url)
    return(
        <div className='mercancia'>
            
            <img className='imgMercancia' src={require(`${props.url}`)}/>
            <p>{props.info}</p>
            <p>{props.price}</p>
            <div className='buttonContainer'>
                <p>COMPRAR</p>
                <p>+</p>
            </div>
        </div>
    );
}
export {Anillo};