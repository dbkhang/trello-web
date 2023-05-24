import React, { useState, useEffect } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'

import './CardInfo.scss'
import ModalCardInfo from '../Modal/ModalCardInfo'
import InputForm from 'components/InputForm/InputForm'
import Comment from 'components/Comment/Comment'
import TextareaForm from 'components/InputForm/TextareaForm'
import InfoMemberNoBtn from 'components/InfoMember/InfoMemberNoBtn'
import { APIupdateTitle,
  APIupdateDescription,
  // APIaddLabel,
  // APIremoveLabel,
  APIaddTask,
  APIremoveTask,
  APIupdateTask,
  APIupdateDate,
  APIcheckDate,
  APIinviteMemberCard
} from 'actions/APIcall/APICardInfo'

function CardInfo(props) {
  // const colors = [
  //   '#a8193d',
  //   '#4fcc25',
  //   '#1ebffa',
  //   '#8da377',
  //   '#9975bd',
  //   '#cf61a1',
  //   '#240959'
  // ]

  const { onClose, cardInfos, updateCard, show } = props
  const [values, setValues] = useState(cardInfos)
  // const [selectedColor, setSelectedColor] = useState('')
  const [colorDate, setColorxDate] = useState('black')
  const [showInvite, setShowInvite] = useState(true)
  const [searchMember, setSearchMember] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [listMember, setListMember] = useState([])
  // const focusInput = useRef()
  const [complete, setComplete] = useState(false)
  const [doing, setDoing] = useState(true)
  const [overTime, setOverTime] = useState(false)
  const [idUser, setIdUser] = useState()
  const [dataUser, setDataUser] = useState()

  const updateTitle = (newTitle) => {
    // API updateTitle
    if (newTitle !== values.title) {
      const data = {
        boardId: cardInfos.boardsId,
        columnId: cardInfos.columnId,
        cardId: cardInfos.id,
        newTitle: newTitle
      }
      APIupdateTitle(data).then(title => {
        setValues({ ...values, title: title })
      }).catch(error => console.log(error))
    }
    // //////////////////

    setValues({ ...values, title: newTitle })
  }

  const updateDescription = (newDescription) => {
    // API
    if (newDescription !== values.description) {
      const data = {
        boardId: cardInfos.boardsId,
        columnId: cardInfos.columnId,
        cardId: cardInfos.id,
        newDescription: newDescription
      }
      APIupdateDescription(data).then(description => {
        setValues({ ...values, description: description })
      }).catch(error => console.log(error))
    }
    // ////////////////////////

    setValues({ ...values, description: newDescription })
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
    const index = values.tasks?.findIndex((item) => item.title === newTask)
    if (index > -1) return
    
    let task = {
      title: newTask,
      completed: false
    }
    // API
    const data = {
      boardId: cardInfos.boardsId,
      columnId: cardInfos.columnId,
      cardId: cardInfos.id,
      task
    }
    APIaddTask(data).then(task => {
      setValues({
        ...values,
        tasks: [...values.tasks, task]
      })
    }).catch(error => console.log(error))
    // //////////////

    setValues({
      ...values,
      tasks: [...values.tasks, task]
    })
  }

  const removeTask = (title) => {
    const tasks = [...values.tasks]
    // API
    const data = {
      boardId: cardInfos.boardsId,
      columnId: cardInfos.columnId,
      cardId: cardInfos.id,
      title: title
    }
    APIremoveTask(data).then(tasks => {
      setValues({
        ...values,
        tasks: [...values.tasks, tasks]
      })
    }).catch(error => console.log(error))

    // ////////////
    const tempTasks = tasks.filter((item) => item.title !== title)
    setValues({
      ...values,
      tasks: tempTasks
    })
  }

  const updateTask = (title, completed) => {
    const taskUpdate = {
      title: title,
      completed: completed
    }
    // API
    const data = {
      boardId: cardInfos.boardsId,
      columnId: cardInfos.columnId,
      cardId: cardInfos.id,
      taskUpdate
    }
    APIupdateTask(data).then(tasks => {
      setValues({
        ...values,
        tasks
      })
    }).catch(error => console.log(error))
    // //////////////////////////


    const tasks = [...values.tasks]
    const index = tasks.findIndex((item) => item.title === title)
    if (index < 0) return

    tasks[index].completed = completed

    setValues({
      ...values,
      tasks
    })
  }

  const colorBgDate = () => {
    let a = values.status
    if ( a === 'over time') {
      return {
        background: 'red',
        color: 'white'
      }
    } else {
      if ( a === 'complete') {
        return {
          background: '#dffcf0',
          color: '#4fcc25'
        }
      } else {
        return {
          background: '#f8f8f8',
          color: '#000'
        }
      }
    }
  }

  const updateDate = (dateUp) => {
    if (!dateUp) return
    if (values.status === 'over time' || values.status === 'complete') return
    // API
    const data = {
      boardId: cardInfos.boardsId,
      columnId: cardInfos.columnId,
      cardId: cardInfos.id,
      date: dateUp
    }
    APIupdateDate(data).then(dateUp => {
      setValues({
        ...values,
        date: dateUp
      })
    }).catch(error => console.log(error))
    // ///////////////

    setValues({
      ...values,
      date: dateUp
    })
  }

  const checkDate = (e) => {
    if (e.target.checked) {
      // API
      const data = {
        boardId: cardInfos.boardsId,
        columnId: cardInfos.columnId,
        cardId: cardInfos.id,
        status: 'complete'
      }
      APIcheckDate(data).then(dateUp => {
        setColorxDate('#4fcc25')
        setComplete(true)
        setDoing(false)
        setOverTime(false)
      }).catch(error => console.log(error))
      // ////////////////


      setColorxDate('#4fcc25')
      setComplete(true)
      setDoing(false)
      setOverTime(false)
    } else {
      setColorxDate('black')
    }
  }

  useEffect(() => {
    if (values.status === 'doing') {
      setComplete(false)
      setDoing(true)
      setOverTime(false)
    } else {
      if (values.status === 'complete') {
        setComplete(true)
        setDoing(false)
        setOverTime(false)
        setColorxDate('#4fcc25')
      } else {
        setComplete(false)
        setDoing(false)
        setOverTime(true)
        setColorxDate('red')
      }
    }
  }, [values.status])

  // useEffect(() => {
  //   if (focusInput && focusInput.current) {
  //     focusInput.current.focus()
  //     focusInput.current.select()
  //   }
  // }, [showInvite])

  const inviteMemberCard = () => {
    if (searchMember !== '') {
      // API
      const data = {
        boardId: cardInfos.boardsId,
        columnId: cardInfos.columnId,
        cardId: cardInfos.id,
        idUser: idUser
      }
      APIcheckDate(data).then(dataUser => {
        setShowInvite(!showInvite)
        setSearchMember('')
        setDataUser(dataUser)
      }).catch(error => console.log(error))
      // ////
      setShowInvite(!showInvite)
      setSearchMember('')
    }
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
          title: 'bac',
          id: '1'
        },
        {
          title: 'bac',
          id: '2'
        },
        {
          title: 'bac',
          id: '3'
        }
      ]
      setListMember(result)
    }

    fetchApi()
  }, [searchMember])

  useEffect(() => {
    if (updateCard) updateCard(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  return (
    <ModalCardInfo onClose={onClose}>
      <div className="cardinfo">
        <div className="icon-close" onClick={() => show(false)}>
          <i className="fa fa-times" />
        </div>
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Người thực hiện</p>
          </div>
          <div className="member-card">
            <div className="invite-member">
              {!showInvite &&
                <div className="members-container">
                  <InfoMemberNoBtn
                    userName={dataUser.userName}
                    email={dataUser.email}
                    image={dataUser.image}
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
                          onClick={() => {
                            setIdUser(item.id)
                            setSearchMember(item.title)
                          }}
                        >{ item.title }</div>
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
                    <button onClick={inviteMemberCard}>Thêm</button>
                  </div>
                </HeadlessTippy>
              }
            </div>
          </div>
        </div>
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Title</p>
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
            <p>Description</p>
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
            <p>Date</p>
          </div>
          <div className="carrinfo-date">
            <input
              type="date"
              value={values.date}
              // defaultValue={cardInfos.date}
              min={new Date().toISOString().substr(0, 10)}
              onChange={(event) => updateDate(event.target.value)}
              style={{ color: colorDate }}
            />
            <span className="check-box-date">
              {doing &&
                <input
                  type="checkbox"
                  // defaultChecked={checkBoxDate}
                  onClick={checkDate}
                />
              }
              {complete &&
                <span
                  className='color-date'
                  style={{ backgroundColor: colorBgDate().background, color: colorBgDate().color }}
                >Complete</span>
              }
              {overTime &&
                <span
                  className='color-date'
                  style={{ backgroundColor: colorBgDate().background, color: colorBgDate().color }}
                >Over Time</span>
              }
            </span>
          </div>
        </div>

        {/* <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Labels</p>
          </div>
          <div className="cardinfo_box_labels">
            {values.labels?.map((item, index) => (
              <label
                key={index}
                style={{ backgroundColor: item.colors, color: '#fff' }}
              >
                {item.title}
                <i className="fa fa-times" onClick={() => removeLabel(item)} />
              </label>
            ))}
          </div>
          <ul>
            {colors.map((item, index) => (
              <li
                key={index + item}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? 'li_active' : ''}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <InputForm
            type='2'
            text='Add Label'
            placeholder='Enter label text'
            onSubmit={(value) =>
              addLabel({ colors: selectedColor, title: value })
            }
          />
        </div> */}

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <p>Tasks</p>
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
