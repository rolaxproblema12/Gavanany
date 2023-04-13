import { Header } from './Header';
import { Body } from './Body';
import React from 'react';
import { Mercancia } from './Mercancia';
import { Mercancias } from './Mercancias';
import {Pulseras} from './Pulseras';
import {Pulsera } from './Pulsera';
import {Anillo} from './Anillo';
import {Anillos} from './Anillos';
import {Collar} from './Collar';
import {Collares} from './Collares';
import {TuOpinion} from './TuOpinion';
import {TusOpiniones} from './TusOpiniones';
import {Footer} from './Footer';
// import './App.css';

let mercanciad = [
    {id:1,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:2,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:3,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:4,name:"Aretedds",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:5,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:6,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:7,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:8,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:9,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:10,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:11,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:12,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
    {id:13,name:"Aretes",url:"./assets/Merca.png",info:"Aretes Moon",price:"$00.00"},
  ]
  let opiniones = [
    {id:1,name:"Juan",url:"./assets/Chica1.png",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:2,name:"Freddy",url:"./assets/Chica2.png",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:3,name:"Miguel",url:"./assets/Chica1.png",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:4,name:"ALex",url:"./assets/Chica2.png",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:5,name:"Luis",url:"./assets/Chica1.png",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id:6,name:"Rola",url:"./assets/Chica2.png",opinion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  ]
function App() {
  return (
    <React.Fragment>
      <Header/>
      <Body/>
        <Mercancias>
          {
              mercanciad.map(merca =>(
                <Mercancia key={merca.id} text={merca.name} url={merca.url} info={merca.info} price={merca.price}/>
              )) 
          }
        </Mercancias>
        <Pulseras>
          {
              mercanciad.map(merca =>(
                <Pulsera key={merca.id} text={merca.name} url={merca.url} info={merca.info} price={merca.price}/>
              )) 
          }
        </Pulseras>
        <Anillos>
          {
              mercanciad.map(merca =>(
                <Anillo key={merca.id} text={merca.name} url={merca.url} info={merca.info} price={merca.price}/>
              )) 
          }
        </Anillos>
        <Collares>
          {
              mercanciad.map(merca =>(
                <Collar key={merca.id} text={merca.name} url={merca.url} info={merca.info} price={merca.price}/>
              )) 
          }
        </Collares>
        <TusOpiniones>
          {
              opiniones.map(opinion =>(
                <TuOpinion key={opinion.id} name={opinion.name} url={opinion.url} opinion={opinion.opinion}/>
              )) 
          }
        </TusOpiniones>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
