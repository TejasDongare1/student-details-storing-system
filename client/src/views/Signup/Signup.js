import React, { useState } from 'react'
import "./Signup.css"

function Signup() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

  return (
    <div>Signup</div>
  )
}

export default Signup