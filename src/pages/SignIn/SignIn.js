import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import './SignIn.scss'
import { fetchSignIn, fetchParam } from 'actions/APIcall'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const history = useNavigate()
  const [searchParams] = useSearchParams();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  useEffect(() => {
    if (localStorage.getItem('signup')) {
      alert('Bạn đã tạo tài khoản thành công vui lòng vào email để xác nhận')
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

    if (email === '' || password === '') {
      return setError('Hãy nhập đẩy đủ thông tin')
    }

    if (!isValidEmail(email)) {
      return setError('Email sai')
    }

    let dataReq = {
      email: email,
      password: password
    }
    try {
      let response = await fetchSignIn(dataReq)
      localStorage.setItem('accessToken', response.Token)
      history.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="main-signin">
      <div className="content-signin">
        <div className="title-signin"><h2>Đăng nhập Trello</h2></div>
        <form>
          <div className="input-signin">
            <label>Email</label>
            <input
              // placeholder="Email"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-signin">
            <label>Mật khẩu</label>
            <input
              type="password"
              // placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
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
            <Link to="/signup" >Đăng ký tài khoản</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn