import React from 'react';
import './GStyles.css';
function TuOpinion(props){
    return(
        <div className='mercancia'>
            
            <img className='imgMercancia' src={require(`${props.url}`)}/>
            <p>{props.name}</p>
            <p>{props.opinion}</p>
        </div>
    );
}
export {TuOpinion};