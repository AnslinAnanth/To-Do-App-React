import React, { useState } from 'react'
import Taskcomponent from '../../components/taskcomponent/taskcomponent'

function Completed() {
  const [completedTask, setCompletedtask] = useState(JSON.parse(localStorage.getItem('completedTask')) ?? [])

  return (
    <div className='mainTaskContainer'>
      <div className='taskHeader'>
        <h3>Completed Task</h3>
      </div>
      <div className='taskLoop'>
        {completedTask.map((item, index) => (
          <Taskcomponent taskItem={item} taskIndex={index}
            showDoneButton={false} />
        ))}
      </div>
    </div>
  )
}

export default Completed