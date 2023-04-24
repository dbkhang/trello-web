import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './SignUp.scss'
import { fetchSignUp } from 'actions/APIcall'

function SignUp() {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const history = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault()
    let newAccount = {
      email: email,
      userName: userName,
      password: password
    }
    try {
      await fetchSignUp(newAccount)
      history.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="main-signin">
      <div className="content-signin">
        <div className="title-signin"><h2>SignUp Trello</h2></div>
        <div className="input-signin">
          <input
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-signin">
          <input
            placeholder="UserName"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="input-signin">
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="text-red-500">{error}</div>
        <div>
          <button
            onClick={handleSignUp}
            className="btn-signin"
          >Create Account</button>
          <Link to="/signin" >
            <button className="btn-signin" >Sign ip</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp