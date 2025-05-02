import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

//create your first component
const SecondsCounter= (props) => {
	return (

		<div className=" counter row align-items-star ">
			<div className="col border  clock">
				<FontAwesomeIcon icon={faClock}/>
			</div>
			<div className="col border uno">
				{props.digitSix % 10}
			</div>
			<div className="col border dos">
				{props.digitFive % 10}
			</div>
			<div className="col border tres">
				{props.digitFour % 10}
			</div>
			<div className="col border cuatro">
				{props.digitThree % 10}
			</div>
			<div className="col border cinco">
				{props.digitTwo % 10}
			</div>
			<div className="col border seis">
				{props.digitOne % 10}
			</div>
		</div>
	);

}



export default SecondsCounter
