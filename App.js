import React,{useState} from 'react';
import logo from './img/Logo.png';
import Form from './components/Form.js';
import Info from './components/Info.js';
import Button from './components/Button.js';
import Footer from './Footer.js';
import './components/Form.css';


const arr=[{name:"air1", img:"", price:"13000", transfer:{1:true, 2:false, 3:true}}, 
            {name:"air2", img:"", price:"11000", transfer:{0:true, 1:true, 2:false, 3:true}},
            {name:"air3", img:"", price:"10000", transfer:{1:true, 2:false, 3:true}},
            {name:"air4", img:"", price:"7000", transfer:{1:true, 2:false, 3:true}},
            {name:"air5", img:"", price:"13000", transfer:{1:true, 2:false, 3:true}}]





function App() {
    const [name,setName]=useState('footer');
    
    const [race,setRace]=useState([]);

    const  allRaces=(a)=>{console.log('App',a);return (a ? setRace([]) : setRace(arr))}
const noTransfer=(a)=>{a ? setRace([]) : setRace(arr.filter((item)=>item.transfer[0]))}
   const  changeName=()=>{setName('footer => new footer')}
  return (
    <>
    <img src={logo} alt="Logo" />
    <Form allRaces={allRaces} noTransfer={noTransfer}/>
    <Info arr={race}/>
    
    <Button foo={changeName}/>
    <Footer name={name}/>
    </>
  );
}



export default App;
