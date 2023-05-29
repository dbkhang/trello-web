import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import './SignUp.scss'
import { fetchSignUp } from 'actions/APIcall'

function SignUp() {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [rPassword, setRPassword] = useState('')
  const [error, setError] = useState(null)
  const history = useNavigate()
  const [showBackdrop, setShowBackdrop] = useState(false)
  // const state = useLocation()


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    setShowBackdrop(true)
    if (email === '' || password === '' || userName === '') {
      return setError('Hãy nhập đẩy đủ thông tin')
    }
    if (!isValidEmail(email)) {
      return setError('Email sai')
    }
    if (password !== rPassword) {
      return setError('Mật khẩu không trùng khớp')
    }

    let newAccount = {
      email: email,
      userName: userName,
      password: password,
      rpassword: rPassword
    }
    localStorage.setItem('signup', 'ok')
    try {
      const res = await fetchSignUp(newAccount)
      if (res.status === 200) {
        setShowBackdrop(false)
        history('/signin')
        localStorage.setItem('signup', 'ok')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="main-signup">
      {showBackdrop &&
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={() => setShowBackdrop(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
      <div className="content-signup">
        <div className="title-signup"><h2>Đăng ký tài khoản Trello</h2></div>
        <form>
          <div className="input-signup">
            <label>Email</label>
            <input
              // placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-signup">
            <label>Tên tài khoản</label>
            <input
              // placeholder="UserName"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="input-signup">
            <label>Mật khẩu</label>
            <input
              type="password"
              // placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="input-signup">
            <label>Nhập lại mật khẩu</label>
            <input
              type="password"
              // placeholder="Password"
              onChange={(event) => setRPassword(event.target.value)}
            />
          </div>
        </form>
        <div className="text-red-500">{error}</div>
        <div>
          <button
            onClick={handleSignUp}
            className="btn-signup"
          >Tạo tài khoảnt</button>
          <div className="link-signin">
            <span> Bạn đã có tài khoản? </span>
            <Link to="/signin" >Đăng nhập </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp