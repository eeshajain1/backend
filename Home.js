import React, {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
 

 function Home(){
   return (
     <div>
            <Link to="/Signup">
              <div>
                save us
              </div>
            </Link>
     </div>
  );
}

export default Home;
