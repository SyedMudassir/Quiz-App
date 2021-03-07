import React from 'react'
import "./index.css"

function QuizComp(props) {
  const getInputValue = (e) => {
    const inputValue = e.target.value
    const correctAnswer = props.question.answer === inputValue
    props.storeAnswer(props.index, correctAnswer)
  }

  return (
      <div className='question-container'>
        <p>{props.question.title}</p>
        {props.question.options.map((opts, index) => {
          return (
            <label key={index}>
              <input onClick={getInputValue} type="radio" name={`question-${props.index}`} value={opts} />{opts}
            </label>
          )
        })}
      </div>
  )
}

export default QuizComp