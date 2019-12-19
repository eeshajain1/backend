import React, {useState} from 'react';
import axios from 'axios'
import './Login.css'
import Button from 'react-bootstrap/Button';
import './Signup.css'
import { Route, Switch, Router } from 'react-router-dom';
function Signup(){
   const[enteredUsername, createUsername] = useState("");
   const[enteredPassword, createPassword] = useState("");
   function handleInputChange(e) {
       createUsername(e.target.value)
       createPassword(e.target.value)
   }
   function handleSubmit(e) {
       let combination = {
           'eu': enteredUsername,
           'ep': enteredPassword
       };
       //console.log("about to send this info:", combination);
       e.preventDefault();
       axios.post('https://f937b87f.ngrok.io/Signup', combination).then(res => {
           console.log(res.data);
           window.location = './Login';
       }).catch(err => {
           console.log("Didn't Work!");
           
       });
   }
    return (
         <div className = 'signup-wrapper'>
             <div className = 'signup-wrapper1'>
                 Create an Account:
             </div>
           <div className="signup-wrapper2">
              Create a Username:
              <input type = 'text' id = 'name' name = 'Username' value = {enteredUsername.enteredUsername} required
                  minLength = '3' maxLength = '12' size = '12' onChange={handleInputChange} />
             </div>
           <div className='signup-wrapper3'>
               Create a Password:
               <input type='text' id= 'name' name = 'createdPassword' value = {enteredPassword.enteredPassword} required
               minLength = '5' maxLength = '16' size = '12' onChange={handleInputChange}/>
           </div>
           <div className = 'signup-wrapper4'>
               <Button onClick={handleSubmit}>Submit Button</Button>
           </div>
       </div>
    );
}
export default Signup;
