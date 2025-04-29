import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
function SecondsCounter(props){
	return (

		<div className=" counter row align-items-star ">
		<div className="col border  clock">
	
		</div>
		<div className="col border uno">
		  [props.digitoUno]
		</div> 
		<div className="col border dos">
		  [props.digitoDos]
		</div>
		<div className="col border tres">
		  [props.digitoTres]
		</div>
		<div className="col border cuatro">
		  [props.digitoCuatro]
		</div>
		<div className="col border cinco">
		  [props.digitoCinco]
		</div>
		<div className="col border seis">
		  [props.digitoSeis]
		</div>
		</div>
		);
	
	}
	
    

   

            

export default Home
		