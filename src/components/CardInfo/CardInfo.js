import React, { useState, useEffect } from 'react'

import './CardInfo.scss'
import ModalCardInfo from '../Modal/ModalCardInfo'
import InputForm from 'components/InputForm/InputForm'

function CardInfo(props) {
  const colors = [
    '#a8193d',
    '#4fcc25',
    '#1ebffa',
    '#8da377',
    '#9975bd',
    '#cf61a1',
    '#240959'
  ]

  const { onClose, cardInfos, updateCard } = props
  const [values, setValues] = useState(props.cardInfos)
  const [selectedColor, setSelectedColor] = useState('')

  const calculatePercent = () => {
    if (!values.tasks?.length) return 0
    const completed = values.tasks?.filter((item) => item.completed)?.length
    return (completed / values.tasks?.length) * 100
  }

  const updateTitle = (newTitle) => {
    setValues({ ...values, title: newTitle })
  }

  const updateDescription = (newDescription) => {
    setValues({ ...values, description: newDescription })
  }

  const addLabel = (newLabel) => {
    const index = values.labels?.findIndex((item) => item.title === newLabel.title)
    if (index > -1) return
    let label = {
      title: newLabel.title,
      colors: newLabel.colors
    }

    setSelectedColor('')
    setValues({
      ...values,
      labels: [...values.labels, label]
    })
  }

  const removeLabel = (label) => {
    const tempLabels = values.labels.filter((item) => item.title !== label.title)

    setValues({
      ...values,
      labels: tempLabels
    })
  }

  const addTask = (newTask) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      title: newTask,
      completed: false
    }
    setValues({
      ...values,
      tasks: [...values.tasks, task]
    })
  }

  const removeTask = (id) => {
    const tasks = [...values.tasks]

    const tempTasks = tasks.filter((item) => item.id !== id)
    setValues({
      ...values,
      tasks: tempTasks
    })
  }

  const updateTask = (id, completed) => {
    const tasks = [...values.tasks]

    const index = tasks.findIndex((item) => item.id === id)
    if (index < 0) return

    tasks[index].completed = completed

    setValues({
      ...values,
      tasks
    })
  }

  const updateDate = (dateUp) => {
    if (!dateUp) return
    setValues({
      ...values,
      date: dateUp
    })
  }

  useEffect(() => {
    if (updateCard) updateCard(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  return (
    <ModalCardInfo onClose={onClose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            {/* <Type /> */}
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
            {/* <List /> */}
            <p>Description</p>
          </div>
          <InputForm
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
          <input
            type="date"
            value={cardInfos.date}
            // defaultValue={cardInfos.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            {/* <Tag /> */}
            <p>Labels</p>
          </div>
          <div className="cardinfo_box_labels">
            {cardInfos.labels?.map((item, index) => (
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
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            {/* <CheckSquare /> */}
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
            {cardInfos.tasks?.map((item) => (
              <div key={item.id} className="cardinfo_box_task_checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? 'completed' : ''}>{item.title}</p>
                <i className="fa fa-trash-o" onClick={() => removeTask(item.id)} />
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
      </div>
    </ModalCardInfo>
  )
}

export default CardInfo
