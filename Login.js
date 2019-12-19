import React, {useState} from 'react';
import axios from 'axios'
import './Login.css'
import Button from 'react-bootstrap/Button';
import { Route, Switch, Router } from 'react-router-dom';

function Login(){
	const[Username, setUsername] = useState("");
	const[Password, setPassword] = useState("");

	function handleInputChange(e) {
		setUsername(e.target.value)
		setUsername(e.target.value)
	}
	function handleSubmit(e) {
		let combination = {
			'un': Username,
			'pw': Password
		};
		//console.log("about to send this info:", combination);
		e.preventDefault();
		axios.post('http://f937b87f.ngrok.io/Login', combination).then(res => {
			console.log(res.data);
			// window.location = './Chat'

		}).catch(err => {
			console.log("Didn't Work!");
			
		});
	}

	 return (
	  	<div className = "login-wrapper">

		    <div className="login-wrapper1">
		       Username:
		       <input type = 'text' id = 'name' name = 'Username' value = {Username.Username} required
		       	minLength = '3' maxLength = '12' size = '12' onChange={handleInputChange} />
		  	</div>

		    
		    <div className='login-wrapper2'>
			    Password:
			    <input type='text' id= 'name' name = 'Password' value = {Username.Password} required
			    minLength = '5' maxLength = '16' size = '12' onChange={handleInputChange}/>
		    </div>

		    <div className = 'login-wrapper3'>
		    	<Button onClick={handleSubmit}>Submit Button</Button>
		    </div>

	    </div>
	 );

}


export default Login;
