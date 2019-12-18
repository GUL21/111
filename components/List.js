import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import s7 from '../img/s7.png';
import Img from './Img';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.value = {
      price: "13 400 P",
      firstTime: "10:45 - 08:00",
      firstDuration: "21ч 15м",
      firstTransfer: "HKG, JNB",
      secondTime: "11:20 - 00:50",
      secondDuration: "13ч 30м",
      secondTransfer: "HKG"
    };
  }
  render() {
  return (
    <div className="list">
		<div className="list-header">
			<span className="price">{this.value.price}</span>
			<Img />
		</div>
		<ul className="first-options">
			<li>
				<span className="text grey-text">MOW - HKT</span><br />
				<span className="text">{this.value.firstTime}</span>
			</li>
			<li>
				<span className="text grey-text">В ПУТИ</span><br />
				<span className="text">{this.value.firstDuration}</span>
			</li>
			<li>
				<span className="text grey-text">2 ПЕРЕСАДКИ</span><br />
				<span className="text">{this.value.firstTransfer}</span>
			</li>
		</ul>
		<ul className="second-options">
			<li>
				<span className="text grey-text">MOW - HKT</span><br />
				<span className="text">{this.value.secondTime}</span>
			</li>
			<li>
				<span className="text grey-text">В ПУТИ</span><br />
				<span className="text">{this.value.secondDuration}</span>
			</li>
			<li>
				<span className="text grey-text">1 ПЕРЕСАДКА</span><br />
				<span className="text">{this.value.secondTransfer}</span>
			</li>
		</ul>
	</div>
  );
}
}

export default Data;