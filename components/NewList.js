import React from 'react';




function NewList(props){
	
	
    return(

    <div className="list">	
    <span className="text grey-text">{props.name}</span><br />
    <span className="price">{props.price}</span>
    
        
        
     </div>

    )
}

export default NewList;