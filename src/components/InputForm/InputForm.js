import React, { useState } from 'react'

import './InputForm.scss'

function InputForm(props) {
  const [isInputForm, setIsInputForm] = useState(false)
  const [inputText, setInputText] = useState(props.defaultValue || '')

  const submission = (e) => {
    e.preventDefault()
    if (inputText && props.onSubmit) {
      if (props.type ==='2') {
        setInputText('')
      }
      props.onSubmit(inputText)
    }
    setIsInputForm(false)
  }

  return (
    <div className="editable">
      {isInputForm ? (
        <form
          className={`editable_edit ${props.editClass ? props.editClass : ''}`}
          onSubmit={submission}
        >
          <input
            type="text"
            value={inputText}
            placeholder={props.placeholder || props.text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || 'Thêm'}</button>
            <i className="fa fa-times  closeIcon" onClick={() => setIsInputForm(false)} />
          </div>
        </form>
      ) : (
        <p
          className={`editable_display ${ props.displayClass ? props.displayClass : '' }`}
          onClick={() => setIsInputForm(true)}
        >
          {props.text}
        </p>
      )}
    </div>
  )
}

export default InputForm
