import React from 'react'
import './popup.css'

function Popup(props) {
  const { taskTitle, taskDescription, settaskTitle, settaskDescription, addClicked, cancelClicked } = props
  return (
    <div className='pop'>
      <div className='mainPopUp'>
        <p>Add New task</p>
        <input className='popupTitle' type='text' placeholder='Title' value={taskTitle} onChange={(event) => settaskTitle(event.target.value)} />
        <textarea type='text' placeholder='Description' value={taskDescription} onChange={(event) => settaskDescription(event.target.value)} />
        <div className='btn'><button className='addButton' onClick={addClicked}>Add</button>
          <button className='addButton' onClick={cancelClicked}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Popup