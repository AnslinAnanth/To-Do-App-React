import React from 'react'
import './taskcomponent.css'

function Taskcomponent(props) {
  const { taskItem, doneClicked, taskIndex, showDoneButton } = props
  return (
    <div className='mainTask'>
      <div className='taskItems'>
        <p>{taskItem.taskTitle}</p>
        <p>{taskItem.taskDescription}</p>
      </div>
      {showDoneButton &&
        <button className='doneButton' onClick={() => doneClicked(taskIndex)}>Done</button>
      }
    </div>
  )
}

export default Taskcomponent