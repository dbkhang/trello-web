import React, { useState, useRef } from 'react'
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
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorName, setErrorName] = useState(false)
  const [errorPass, setErrorPass] = useState(false)
  const [errorRPass, setErrorRPass] = useState(false)
  const focusEmail = useRef()
  const focusPass = useRef()
  const focusName = useRef()
  const focusRPass = useRef()


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    if (email === '') {
      setErrorEmail(true)
      focusEmail.current.focus()
      return setError('Hãy nhập Email')
    } else {
      if (email !== '') {
        setErrorEmail(false)
        setError('')
      }
    }

    if (!isValidEmail(email)) {
      setErrorEmail(true)
      focusEmail.current.focus()
      return setError('Cú pháp Email sai')
    } else {
      setErrorEmail(false)
      setError('')
    }

    if (userName === '') {
      setErrorName(true)
      focusName.current.focus()
      return setError('Hãy nhập tên tài khoản')
    } else {
      if (userName !== '') {
        setErrorName(false)
        setError('')
      }
    }
    if (password === '') {
      setErrorPass(true)
      focusPass.current.focus()
      return setError('Hãy nhập mật khẩu')
    } else {
      if (password !== '') {
        setErrorPass(false)
        setError('')
      }
    }
    if (rPassword === '') {
      setErrorRPass(true)
      focusRPass.current.focus()
      return setError('Hãy nhập lại mật khẩu')
    } else {
      if (rPassword !== '') {
        setErrorRPass(false)
        setError('')
      }
    }
    if (password !== rPassword) {
      setErrorRPass(true)
      focusRPass.current.focus()
      return setError('Mật khẩu không trùng khớp')
    } else {
      setErrorEmail(false)
      setError('')
    }

    let newAccount = {
      email: email,
      userName: userName,
      password: password,
      rpassword: rPassword
    }
    setShowBackdrop(true)
    try {
      const res = await fetchSignUp(newAccount)
      if (res.status === 200) {
        setShowBackdrop(false)
        history('/signin')
        localStorage.setItem('signup', 'ok')
      }
    } catch (error) {
      setShowBackdrop(false)
      setError(error.message)
    }
  }

  const handleClose = () => {
    setShowBackdrop(false)
  }

  return (
    <div className="main-signup">
      {showBackdrop &&
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={Boolean(open) }
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
      <div className="content-signup">
        <div className="title-signup"><h2>Đăng ký tài khoản </h2></div>
        <form>
          <div className="input-signup">
            <label>Email</label>
            <input
              // placeholder="Email"
              className={errorEmail ? 'inputError' : ''}
              onChange={(event) => setEmail(event.target.value)}
              ref={focusEmail}
            />
          </div>
          <div className="input-signup">
            <label>Tên tài khoản</label>
            <input
              // placeholder="UserName"
              className={errorName ? 'inputError' : ''}
              onChange={(event) => setUserName(event.target.value)}
              ref={focusName}
            />
          </div>
          <div className="input-signup">
            <label>Mật khẩu</label>
            <input
              type="password"
              // placeholder="Password"
              className={errorPass ? 'inputError' : ''}
              onChange={(event) => setPassword(event.target.value)}
              ref={focusPass}
            />
          </div>
          <div className="input-signup">
            <label>Nhập lại mật khẩu</label>
            <input
              type="password"
              // placeholder="Password"
              className={errorRPass ? 'inputError' : ''}
              onChange={(event) => setRPassword(event.target.value)}
              ref={focusRPass}
            />
          </div>
        </form>
        <div className="text-red-500">{error}</div>
        <div>
          <button
            onClick={handleSignUp}
            className="btn-signup"
          >Tạo tài khoản</button>
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