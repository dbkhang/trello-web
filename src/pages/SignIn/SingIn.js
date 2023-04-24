import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './SignIn.scss'
import { fetchSignIn } from 'actions/APIcall'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const history = useNavigate()

  const handleSignin = async (event) => {
    event.preventDefault()
    let dataReq = {
      email: email,
      password: password
    }
    try {
      await fetchSignIn(dataReq)
      history.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="main-signin">
      <div className="content-signin">
        <div className="title-signin"><h2>SignIn Trello</h2></div>
        <div className="input-signin">
          <input
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
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
            onClick={handleSignin}
            className="btn-signin"
          >Sign in</button>
          <Link to="/signup" >
            <button className="btn-signin" >Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn