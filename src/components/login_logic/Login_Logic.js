import React from 'react'
import { useState } from 'react';

function ShowAndHidePassword(){
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");


    const handlePasswordChange = (e) => {
        e.preventDefault()
        setPasswordInput(e.target.value)
    }

    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

  return (
      <div>
          <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control" placeholder="passwort" />

          <div className="input-group-btn">
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                    </div>
      </div>
  )
}

export default ShowAndHidePassword