import React, { useState, useEffect } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'

import './CardInfo.scss'
import ToolTip from 'components/ToolTip/ToolTip'
import ModalCardInfo from '../Modal/ModalCardInfo'
import InputForm from 'components/InputForm/InputForm'
import Comment from 'components/Comment/Comment'
import TextareaForm from 'components/InputForm/TextareaForm'
import InfoMemberNoBtn from 'components/InfoMember/InfoMemberNoBtn'
import { APIupdateCard } from 'actions/APIcall/APICardInfo'

function CardInfo(props) {

  const { onClose, cardInfos, updateCard, show } = props
  const [values, setValues] = useState(cardInfos)
  const [searchMember, setSearchMember] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [listMember, setListMember] = useState([])
  const [complete, setComplete] = useState(values.complete)
  const [overTime, setOverTime] = useState(values.overTime)
  // const [dataUser, setDataUser] = useState()
  const [showInvite, setShowInvite] = useState(values.userName != null? false:true)
  const [showToolTip, setShowToolTip] = useState(false)
  const [textToolTip, setTextToolTip] = useState('')
  const [typeToolTip, setTypeToolTip] = useState(true)
  const [showBtnChange, setShowBtnChange] = useState(false)

  useEffect(() => {
    
  })

  const updateTitle = (newTitle) => {
    // API updateTitle
    if (newTitle !== values.title) {
      // setShowBtnChange(true)
      // const data = {
      //   boardId: cardInfos.boardsId,
      //   columnId: cardInfos.columnId,
      //   cardId: cardInfos.id,
      //   newTitle: newTitle
      // }
      // APIupdateTitle(data).then(res => {
      //   if (res.status === 200) {
      //     let title = res.data
      //     setValues({ ...values, title: title })
      //   }
      // }).catch(error => console.log(error))
      // //////////////////
      setShowBtnChange(true)
      setValues({ ...values, title: newTitle })
    }
  }

  const updateDescription = (newDescription) => {
    if (newDescription !== values.description) {
      // API
      // const data = {
      //   boardId: cardInfos.boardsId,
      //   columnId: cardInfos.columnId,
      //   cardId: cardInfos.id,
      //   newDescription: newDescription
      // }
      // APIupdateDescription(data).then(res => {
      //   if (res.status === 200) {
      //     let description = res.data
      //     setValues({ ...values, description: description })
      //   }
      // }).catch(error => console.log(error))
      // ////////////////////////
      setShowBtnChange(true)
      setValues({ ...values, description: newDescription })
    }
  }

  // const addLabel = (newLabel) => {
  //   const index = values.labels?.findIndex((item) => item.title === newLabel.title)
  //   if (index > -1) return
  //   let label = {
  //     title: newLabel.title,
  //     colors: newLabel.colors
  //   }
  //   // API
  //   APIaddLabel(label).then(label => {
  //     setSelectedColor('')
  //     setValues({
  //       ...values,
  //       labels: [...values.labels, label]
  //     })
  //   }).catch(error => console.log(error))


  //   setSelectedColor('')
  //   setValues({
  //     ...values,
  //     labels: [...values.labels, label]
  //   })
  // }

  // const removeLabel = (label) => {
  //   // API
  //   APIremoveLabel(label).then(label => {
  //     setValues({
  //       ...values,
  //       labels: label
  //     })
  //   }).catch(error => console.log(error))

  //   // //////////////////
  //   const tempLabels = values.labels.filter((item) => item.title !== label.title)
  //   setValues({
  //     ...values,
  //     labels: tempLabels
  //   })
  // }
  const calculatePercent = () => {
    if (!values.tasks?.length) return 0
    const completed = values.tasks?.filter((item) => item.completed)?.length
    return (completed / values.tasks?.length) * 100
  }

  const addTask = (newTask) => {
    setShowBtnChange(true)
    const index = values.tasks?.findIndex((item) => item.title === newTask)
    if (index > -1) return

    let task = {
      title: newTask,
      completed: false
    }
    // API
    // const data = {
    //   boardId: cardInfos.boardsId,
    //   columnId: cardInfos.columnId,
    //   cardId: cardInfos.id,
    //   task
    // }
    // APIaddTask(data).then(res => {
    //   if (res.status === 200) {
    //     let task = res.data
    //     setValues({
    //       ...values,
    //       tasks: [...values.tasks, task]
    //     })
    //   }
    // }).catch(error => console.log(error))
    // //////////////
    setValues({
      ...values,
      tasks: [...values.tasks, task]
    })
  }

  const removeTask = (title) => {
    setShowBtnChange(true)
    const tasks = [...values.tasks]
    // API
    // const data = {
    //   boardId: cardInfos.boardsId,
    //   columnId: cardInfos.columnId,
    //   cardId: cardInfos.id,
    //   title: title
    // }
    // APIremoveTask(data).then(res => {
    //   if (res.status === 200) {
    //     const tempTasks = tasks.filter((item) => item.title !== title)
    //     setValues({
    //       ...values,
    //       tasks: tempTasks
    //     })
    //   }
    // }).catch(error => console.log(error))
    // ////////////
    const tempTasks = tasks.filter((item) => item.title !== title)
    setValues({
      ...values,
      tasks: tempTasks
    })
  }

  const updateTask = (title, completed) => {
    // const taskUpdate = {
    //   title: title,
    //   completed: completed
    // }
    // API
    // const data = {
    //   boardId: cardInfos.boardsId,
    //   columnId: cardInfos.columnId,
    //   cardId: cardInfos.id,
    //   taskUpdate
    // }
    // APIupdateTask(data).then(res => {
    //   if (res.status === 200) {
    //     const tasks = [...values.tasks]
    //     const index = tasks.findIndex((item) => item.title === title)
    //     if (index < 0) return

    //     tasks[index].completed = completed

    //     setValues({
    //       ...values,
    //       tasks
    //     })
    //   }
    // }).catch(error => console.log(error))
    // //////////////////////////

    setShowBtnChange(true)

    const tasks = [...values.tasks]
    const index = tasks.findIndex((item) => item.title === title)
    if (index < 0) return

    tasks[index].completed = completed

    setValues({
      ...values,
      tasks
    })
  }

  const colorBgComplete = () => {
    return {
      background: '#dffcf0',
      color: '#4fcc25'
    }
  }

  const colorBgOverTime = () => {
    return {
      background: 'red',
      color: 'white'
    }
  }

  const updateDate = (dateUp) => {
    if (!dateUp) return
    if (values.overTime || values.complete) return
    // API
    // const data = {
    //   boardId: cardInfos.boardsId,
    //   columnId: cardInfos.columnId,
    //   cardId: cardInfos.id,
    //   date: dateUp
    // }
    // APIupdateDate(data).then(res => {
    //   if (res.status === 200) {
    //     let dateUP = res.data
    //     setValues({
    //       ...values,
    //       date: dateUP
    //     })
    //   }
    // }).catch(error => console.log(error))
    // ///////////////
    setShowBtnChange(true)
    setValues({
      ...values,
      date: dateUp
    })
  }

  const checkDate = (e) => {
    if (e.target.checked) {
      // API
      // const data = {
      //   boardId: cardInfos.boardsId,
      //   columnId: cardInfos.columnId,
      //   cardId: cardInfos.id,
      //   status: 'complete'
      // }
      // APIcheckDate(data).then(dateUp => {
      //   setColorxDate('#4fcc25')
      //   setComplete(true)
      //   setDoing(false)
      //   setOverTime(false)
      // }).catch(error => console.log(error))
      // ////////////////
      setShowBtnChange(!showBtnChange)
      setValues({
        ...values,
        complete: true
      })
      setComplete(!complete)
      // setColorComplete('#4fcc25')
    } else {
      setComplete(!complete)
      setShowBtnChange(!showBtnChange)
    }
  }

  useEffect(() => {
    if (values.overTime && values.complete) {
      setComplete(true)
      setOverTime(true)
      // setColorComplete('#4fcc25')
      // setColorOverTime('red')
    } else {
      if (values.complete) {
        setComplete(true)
        setOverTime(false)
        // setColorComplete('#4fcc25')
      }
    }
  }, [values.complete])


  const inviteMemberCard = (user) => {
    setShowBtnChange(!showBtnChange)
    setValues({
      ...values,
      userName: user.userName,
      userEmail: user.userEmail,
      imageUsername: user.imageUsername
    })
    setShowInvite(!showInvite)
    setSearchMember('')
    // setDataUser(user)

    // if (searchMember !== '') {
    //   API
    //   const data = {
    //     boardId: cardInfos.boardsId,
    //     columnId: cardInfos.columnId,
    //     cardId: cardInfos.id,
    //     idUser: idUser
    //   }
    //   APIinviteMemberCard(data).then(res => {
    //     if (res.status === 200) {
    //       const data =  res.data
    //       setShowInvite(!showInvite)
    //       setSearchMember('')
    //       setDataUser(data)
    //     }
    //   }).catch(error => {
    //     if (error.response.status !== 200) {
    //       setTextToolTip('Thêm thành viên thất bại')
    //       setTypeToolTip(false)
    //       setShowToolTip(true)
    //     }
    //   })
    // }
  }

  useEffect(() => {
    if (!searchMember.trim()) {
      setListMember([])
      setShowResult(false)
      return
    } else {
      setShowResult(true)
    }
    const fetchApi = async () => {
      // const result = await searchAPI(searchValue)
      const result = [
        {
          userName: 'bac',
          userEmail: '1aaa',
          imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg'
        },
        {
          userName: 'bac',
          userEmail: '1aaa',
          imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg'
        },
        {
          userName: 'bac',
          userEmail: '1aaa',
          imageUsername: 'https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg'
        }
      ]
      setListMember(result)
    }

    fetchApi()
  }, [searchMember])

  // useEffect(() => {
  //   if (updateCard) updateCard(values)
  // }, [values])

  const updateCardInfo = () => {
    if (updateCard) updateCard(values)
    setShowBtnChange(false)
    APIupdateCard(values).then(res => {
      if (res.status === 200) {
        setShowBtnChange(false)
        const data = res.data
        if (updateCard) updateCard(data)
      }
    }).catch(error => {
      if (error.response.status !== 200) {
        setTextToolTip('Thay đổi thẻ thất bại')
        setTypeToolTip(false)
        setShowToolTip(true)
      }
    })
  }

  const handleClose = () => {
    setShowToolTip(!showToolTip)
  }

  return (
    <ModalCardInfo onClose={onClose}>
      {showToolTip &&
        <ToolTip
          type={typeToolTip}
          message={ textToolTip }
          handleClose={handleClose}
        />
      }
      <div className="cardinfo">
        <div className="icon-close" onClick={() => show(false)}>
          <i className="fa fa-times" />
        </div>
        {showBtnChange &&
          <div>
            <button onClick={updateCardInfo}>Lưu thay đổi</button>
          </div>
        }
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Người thực hiện</p>
          </div>
          <div className="member-card">
            <div className="invite-member">
              {!showInvite &&
                <div className="members-container">
                  <InfoMemberNoBtn
                    userName={values.userName}
                    email={values.userEmail}
                    image={values.imageUsername}
                  />
                  <i className="fa fa-pencil-square-o" onClick={() => setShowInvite(!showInvite)} />
                </div>
              }
              {showInvite &&
                <HeadlessTippy
                  interactive
                  visible={ showResult && listMember.length > 0 }
                  render={attrs => (
                    <div className="search-member" tabIndex="-1" {...attrs}>
                      {listMember.map((item, index) => (
                        <div
                          key={index}
                          className="list-member-show"
                          onClick={() => inviteMemberCard(item)}
                        >
                          <InfoMemberNoBtn
                            userName={item.userName}
                            email={item.userEmail}
                            image={item.imageUsername}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  onClickOutside={() => setShowResult(false)}
                >
                  <div className="show-invite">
                    <input
                      className="invite-card"
                      placeholder='Tên thành viên làm thẻ'
                      // ref={ focusInput }
                      value={ searchMember }
                      onChange={(e) => setSearchMember(e.target.value)}
                    />
                    {/* <button onClick={inviteMemberCard}>Thêm</button> */}
                  </div>
                </HeadlessTippy>
              }
            </div>
          </div>
        </div>
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Tên thẻ</p>
          </div>
          <InputForm
            type='1'
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Mô tả chi tiết</p>
          </div>
          <TextareaForm
            type='1'
            defaultValue={values.description}
            text={values.description || 'Add a Description'}
            placeholder="Enter description"
            onSubmit={updateDescription}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            {/* <Calendar /> */}
            <p>Thời hạn hoàn thành</p>
          </div>
          <div className="carrinfo-date">
            <input
              type="date"
              value={values.date}
              // defaultValue={cardInfos.date}
              min={new Date().toISOString().substr(0, 10)}
              onChange={(event) => updateDate(event.target.value)}
              // style={{ color: colorDate }}
            />
            <div className="check-box-date">
              <input
                type="checkbox"
                onClick={checkDate}
                defaultChecked={values.complete}
              />
              {complete &&
                <span
                  className='color-date'
                  style={{ backgroundColor: colorBgComplete().background, color: colorBgComplete().color }}
                >Complete</span>
              }
              {overTime &&
                <span
                  className='color-date'
                  style={{ backgroundColor: colorBgOverTime().background, color: colorBgOverTime().color }}
                >Over Time</span>
              }
            </div>
          </div>
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Yêu cầu</p>
          </div>
          <div className="cardinfo_box_progress-bar">
            <div
              className="cardinfo_box_progress"
              style={{
                width: `${calculatePercent()}%`,
                backgroundColor: calculatePercent() === 100 ? 'limegreen' : ''
              }}
            />
          </div>
          <div className="cardinfo_box_task_list">
            {values.tasks?.map((item) => (
              <div key={item.id} className="cardinfo_box_task_checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.title, event.target.checked)
                  }
                />
                <p className={item.completed ? 'completed' : ''}>{item.title}</p>
                <i className="fa fa-trash-o" onClick={() => removeTask(item.title)} />
              </div>
            ))}
          </div>
          <InputForm
            type='2'
            text={'Add a Task'}
            placeholder='Enter task'
            onSubmit={addTask}
          />
        </div>
        <Comment
          boardId={cardInfos.boardsId}
          columnId={cardInfos.columnId}
          cardId={cardInfos.id}
        />
      </div>
    </ModalCardInfo>
  )
}

export default CardInfo
