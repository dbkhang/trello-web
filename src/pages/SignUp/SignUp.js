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
    if (email === '' || password === '' || userName === '') {
      return setError('Hãy nhập đẩy đủ thông tin')
    }
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
    <div className="main-signup">
      <div className="content-signup">
        <div className="title-signup"><h2>SignUp Trello</h2></div>
        <form>
          <div className="input-signup">
            <label>Email</label>
            <input
              // placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-signup">
            <label>UserName</label>
            <input
              // placeholder="UserName"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="input-signup">
            <label>Password</label>
            <input
              type="password"
              // placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </form>
        <div className="text-red-500">{error}</div>
        <div>
          <button
            onClick={handleSignUp}
            className="btn-signup"
          >Create Account</button>
          <div className="link-signin">
            <span> Have an account? </span>
            <Link to="/signin" >Create an account </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp