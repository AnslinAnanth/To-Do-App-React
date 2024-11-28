import React, { useEffect, useState } from 'react'
import Taskcomponent from '../../components/taskcomponent/taskcomponent'
import './tasks.css'
import Popup from '../../components/popup/popup'

function Tasks() {
  //To make the popup screen visible 
  const [ismodalVisible, setismodalVisible] = useState(false)
  //To validate input fields in popup
  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  //To store the list 
  const [taskList, settaskList] = useState(JSON.parse(localStorage.getItem('tasklist')) ?? [])
  const [completedTask, setCompletedtask] = useState(JSON.parse(localStorage.getItem('completedTask')) ?? [])
  //update the list whenever changes
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(taskList))
  }, [taskList])

  useEffect(() => {
    localStorage.setItem('completedTask', JSON.stringify(completedTask))
  }, [completedTask])


  function onAddTaskClicked() {
    setismodalVisible(true)
  }
  function addClicked() {

    let task = {
      taskTitle: taskTitle,
      taskDescription: taskDescription
    }
    // let list = taskList
    // list.push(task)
    // settaskList(list)
    settaskList([...taskList, task])//...is to include the previous tasks
    setismodalVisible(false)
    settaskTitle('')
    settaskDescription('')
  }
  function cancelClicked() {
    setismodalVisible(false)
    settaskTitle('')
    settaskDescription('')
  }
  function doneClicked(taskIndex) {
    console.log('done', taskIndex)
    let doneTask = taskList[taskIndex]
    setCompletedtask([...completedTask, doneTask])
    let oldlist = taskList
    let updatedlist = []
    oldlist.map((item, index) => {
      if (taskIndex !== index) {
        updatedlist.push(item)
      }
      settaskList(updatedlist)
    })
  }
  return (
    <div className='mainTaskContainer'>
      <div className='taskHeader'>
        <h3>To do Task</h3>
        <button className='addButton' onClick={onAddTaskClicked}>Add Task</button>
      </div>
      <div className='taskLoop'>
        {taskList.map((item, index) => (
          <Taskcomponent taskItem={item} taskIndex={index} doneClicked={doneClicked}
            showDoneButton={true} />
        ))}
      </div>


      {ismodalVisible && (
        <div className='mainPop'>
          <Popup setismodalVisible={setismodalVisible} taskTitle={taskTitle} settaskTitle={settaskTitle} taskDescription={taskDescription} settaskDescription={settaskDescription} addClicked={addClicked} cancelClicked={cancelClicked} />
        </div>)}
    </div>
  )
}

export default Tasks