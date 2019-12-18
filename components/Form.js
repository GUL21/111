import React, {Component} from 'react';
import CheckDiv from './CheckDiv.js';

function Form(props) {
  return (
    <div className="firstDiv">
		<h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
		<form>
			<CheckDiv className="check" text="Все" checked={false} allRaces={props.allRaces}/>
			<CheckDiv text="Без пересадок" checked={false} noTransfer={props.noTransfer}/>
			<CheckDiv text="1 пересадка" checked={false} />
			<CheckDiv text="2 пересадки" checked={false} />
			<CheckDiv text="3 пересадки" checked={false} />
		</form>
	</div>
  );
}

export default Form;

