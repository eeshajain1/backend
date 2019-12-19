import React, {useState} from 'react';
import axios from 'axios'
import './Chat.css'
import Button from 'react-bootstrap/Button';
 function Chat(){
     const[Message, setMessage] = useState("")
     const[Usersonline, setUsersonline] = useState("")
 function handleInputChange(e) {
     setMessage(e.target.value);
     setUsersonline({
         ...Usersonline,
         [e.target.name]: e.target.value
     });
     }
 function handleSubmit(e) {
     let combination = {
         'mg': Message,
     };
     //console.log("about to send this info:", combination);
     e.preventDefault();
     axios.post('http://f937b87f.ngrok.io/Chat', combination).then(res => {
         console.log(res.data);
         setInterval(() => {
             Message.onGet();
          }, 1000);
         setMessage(" ");
     }).catch(err => {
         console.log("Didn't Work!");
         // window.location = './Chat'
         
     });
 }
 return (
   <div className = 'Chat-Online'>
           Users Online:
       <div className= 'Chat-Log'>
       </div>
       <div className="Chat-Text">
           Begin typing your messages here:
           </div>
           <div className="Chat-Textbox">
               <input type = "text" id = 'name' name = 'Message' value = {Message}
                   size = '50' onChange = {handleInputChange} />
           </div>
           <div className = 'Chat-Button'>
               <Button onClick={handleSubmit}>Submit Button</Button>
           </div>
   </div>
);
}
 export default Chat;
