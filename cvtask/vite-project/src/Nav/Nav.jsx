import React, { useState } from 'react';
import './Nav.css';


function Nav({showMain,setShowMain}){
    return (<>
    <nav>
    <div>
      <h1>Günel Mustafayeva</h1>
      <h2>Web Developer</h2>
    </div>
    <button onClick={()=>{setShowMain(!showMain)}}>add</button>
   </nav>
    </> 
    );
}

export default Nav