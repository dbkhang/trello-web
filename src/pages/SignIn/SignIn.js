import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './SignIn.scss'
import { fetchSignIn, fetchParam } from 'actions/APIcall'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const history = useNavigate()
  const [searchParams] = useSearchParams()
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPass, setErrorPass] = useState(false)
  const focusEmail = useRef()
  const focusPass = useRef()


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  useEffect(() => {
    if (localStorage.getItem('signup') === 'ok') {
      localStorage.removeItem('signup')
      toast.success('Vào emal xác nhận tạo tài khoản!', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    if (searchParams.get('id')) {
      try {
        fetchParam(searchParams.get('id'))
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  const handleSignin = async (event) => {
    event.preventDefault()

    if (email !== '') {
      setErrorEmail(false)
    }

    if (password !== '') {
      setErrorPass(false)
    }

    if (email === '' && password === '') {
      setErrorEmail(true)
      setErrorPass(true)
      focusEmail.current.focus()
      return setError('Hãy nhập đẩy đủ thông tin')
    } else {
      if (email === '' ) {
        setErrorEmail(true)
        focusEmail.current.focus()
        setErrorPass(false)
        return setError('Hãy nhập Email')
      } else {
        if (password === '') {
          setErrorEmail(false)
          setErrorPass(true)
          focusPass.current.focus()
          return setError('Hãy nhập mật khẩu')
        }
      }
    }

    if (!isValidEmail(email)) {
      setErrorEmail(true)
      focusEmail.current.focus()
      return setError('Cú pháp Email không hợp lệ')
    }

    let dataReq = {
      email: email,
      password: password
    }
    try {
      let response = await fetchSignIn(dataReq)
      if (response.status === 200) {
        localStorage.removeItem('signup')
        let data = response.data
        localStorage.setItem('accessToken', data.Token)
        history('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="main-signin">
      <ToastContainer />
      <div className="content-signin">
        <div className="title-signin"><h2>Đăng nhập</h2></div>
        <form>
          <div className="input-signin">
            <label>Email</label>
            <input
              className={errorEmail ? 'inputError' : ''}
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              ref={focusEmail}
            />
          </div>
          <div className="input-signin">
            <label>Mật khẩu</label>
            <input
              type="password"
              className={errorPass ? 'inputError' : ''}
              onChange={(event) => setPassword(event.target.value)}
              ref={focusPass}
            />
          </div>
          <div className="text-red-500">{error}</div>
        </form>
        <div>
          <button
            onClick={handleSignin}
            className="btn-signin"
          >Đăng nhập</button>
          <div className="link-signup">
            <span>Bạn chưa có tài khoản</span>
            <Link
              to="/signup"
            >Đăng ký tài khoản</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn