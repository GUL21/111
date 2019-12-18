import React,{useState,useEffect} from 'react';




function CheckDiv(props)
{
    const [checked,setChecked]=useState(props.checked);
    //const [race,setRace]=useState([])
//useEffect(()=>setChecked(props.checked),[])
//console.log('props',props.checked);
const hendleCheck=()=>{
console.log('props',props.checked);
console.log('state',checked);
	setChecked(!checked);
	console.log(checked);
     if(props.allRaces)props.allRaces(checked);
     if(props.noTransfer)props.noTransfer(checked)
}
    
	return(
		<>
		<label className={checked ? "activeLabel" : ""}><input type="checkbox" checked={checked} onChange={hendleCheck} />{props.text}</label><br />
		</>
		)
}

export default CheckDiv;