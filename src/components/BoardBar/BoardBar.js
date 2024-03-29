import React, { useState, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './BoardBar.scss'
import InfoMember from 'components/InfoMember/InfoMember'
import { APIupdateTitleBoard,
  APIinviteMember,
  APIshowMember,
  APIdeleteMember,
  APIupdateColor
} from 'actions/APIcall/APIBoard'

function BoardBar(props) {
  const colors = [
    '#a8193d',
    '#4fcc25',
    '#1ebffa',
    '#8da377',
    '#9975bd',
    '#cf61a1',
    '#240959'
  ]
  const idBoard = props.idBoard
  const [titleBoard, setTitleBoard]= useState(props.boardTitle)
  const [showMemberBoard, setShowMemberBoard] = useState(false)
  const [showActionsBoard, setShowActionsBoard] = useState(false)
  const [selectedColor, setSelectedColor] = useState('')
  const [showInvite, setShowInvite] = useState(false)
  const [inviteMember, setInviteMember] = useState('')
  const focusInput = useRef()
  const [listMember, setListMember] = useState([])

  useEffect(() => {
    if (focusInput && focusInput.current) {
      focusInput.current.focus()
      focusInput.current.select()
    }
  }, [showInvite])

  const handleInviteMember = () => {
    const data = {
      inviteMember: inviteMember,
      idBoard: idBoard
    }
    APIinviteMember(data).then(data => {
      if (data.status == 200) {
        setShowInvite(!showInvite)
      }
    }).catch(error => {
      if (error.response.status !== 200) {
        toast.error('Thêm thành viên thất bại', {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    })


    fetch('/notification', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('accessToken')
      }
    })

    // setShowInvite(!showInvite)
  }

  const handleBoardTitleChange = (e) => setTitleBoard(e.target.value)

  const handleShowActionBoard = () => setShowActionsBoard(!showActionsBoard)

  const handleBoardTitleBlur = () => {
    // API
    const data = {
      idBoard: idBoard,
      title: titleBoard
    }
    APIupdateTitleBoard(data).then(title => {
      props.onUpdateTitleBoard(title)
    }).catch(error => console.log(error))
    // /////////////

    props.onUpdateTitleBoard(titleBoard)
  }

  const handleShowMember = () => {
    // API xem thanh vien
    setShowMemberBoard(!showMemberBoard)
    APIshowMember(idBoard).then(rep => {
      setListMember(rep)
      setShowMemberBoard(!showMemberBoard)
    }).catch(error => console.log(error))
    let aaaa = [
      {
        id: 'aaa',
        userName: 'Hoàng',
        email: 'nvhoang@gmail.com',
        image: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg'
      },
      {
        id: 'aaa',
        userName: 'Hoa',
        email: 'nthoa@gmail.com',
        image: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg'
      }
    ]
    setShowMemberBoard(!showMemberBoard)
    setListMember(aaaa)
  }

  const deleteMember = (data) => {
    // API delete Member
    APIdeleteMember(data).then(res => {
      if (res.response.status === 200) {
        setListMember(res.data)
      }
    }).catch(error => {
      if (error.response.status !== 200) {
        toast.error('Xoá thành viên thất bại', {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    })
  }

  const saveTitleAfterEnter = (e) => {
    if (e.key === 'Enter') {
      e.target.blur()
    }
  }

  const selectAllInlineText = (e) => {
    e.target.focus()
    e.target.select()
  }

  const updateColor = (color) => {
    // API
    const data = {
      idBoard: idBoard,
      colorBoard: color
    }

    APIupdateColor(data).then(res => {
      if (res.response.status !== 200) {
        props.updateColorBoard(res)
      }
    }).catch(error => {
      if (error.response.status !== 200) {
        toast.error('Thay đổi màu sắc thất bại', {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    })
    setSelectedColor(color)
    props.updateColorBoard(color)
  }

  return (
    <nav className="navbar-board" style={{ selectedColor }}>
      {/* <ToastContainer /> */}
      <div className="board-info">
        <div className="item">
          <Form.Control
            size="sm"
            type="text"
            className="trello-editable"
            value={titleBoard}
            onChange={handleBoardTitleChange}
            onBlur={handleBoardTitleBlur}
            onKeyDown={saveTitleAfterEnter}
            spellCheck="false"
            onClick={selectAllInlineText}
            onMouseDown={e => e.preventDefault()}
          />
        </div>

        <div className="divider"></div>

        <div className="item member-board">
          <div className="more-members" >
            <div onClick={handleShowMember}>Thành viên</div>
            {showMemberBoard &&
              <nav className="members-wrapper">
                <div className="members-arrow-top"></div>
                <div className="members-main">
                  <div className="members-top">
                    <h3>Thành viên trong bảng</h3>
                  </div>
                  <div className="members-container">
                    {listMember.map((member, index) => (
                      <InfoMember
                        key= {index}
                        id={member.id}
                        userName={member.userName}
                        Email={member.email}
                        image={member.image}
                        deleteMember={deleteMember}
                      />
                    ))}
                  </div>
                </div>
              </nav>
            }
          </div>
          <div className="invite">
            {!showInvite &&
              <div className="btn-show-invite" onClick={() => setShowInvite(!showInvite)}>
                Thêm thành viên
              </div>
            }
            {showInvite &&
              <div className="show-invite">
                <input
                  ref={ focusInput }
                  value={ inviteMember }
                  onChange={(e) => setInviteMember(e.target.value)}
                />
                <button onClick={handleInviteMember}>Thêm</button>
                <i className="fa fa-times" onClick={() => setShowInvite(!showInvite)} />
              </div>
            }
          </div>
        </div>
      </div>
      <div className="board-actions">
        <div className="item menu" onClick={handleShowActionBoard}><i className="fa fa-ellipsis-h mr-2" /></div>
        {showActionsBoard &&
          <div className="board-actions-content">
            <div className="board-actions-top">
              <h3>MENU</h3>
              <div className="icon-cancle-board-actions" onClick={handleShowActionBoard}>
                <i className="fa fa-times" />
              </div>
            </div>
            <div className="choose-color-bg">
              <ul>
                {colors.map((item, index) => (
                  <li
                    key={index + item}
                    style={{ backgroundColor: item }}
                    className={selectedColor === item ? 'li_active' : ''}
                    onClick={() => updateColor(item)}
                  />
                ))}
              </ul>
            </div>
          </div>
        }
      </div>
    </nav>
  )
}

export default BoardBar
