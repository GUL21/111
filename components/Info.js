import React from 'react';
import Choose from './Choose.js';
import NewList from './NewList.js';



function Info(props){
	console.log(props.arr);
	const lists=props.arr.map((item,index)=>{return( <NewList key={index} name={item.name} price={item.price} />)})
    return(

    <div>	
    <Choose /><br />
       {lists}
     </div>

    )
}

export default Info;