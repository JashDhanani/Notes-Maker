import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {

  const [ham, setHam] = useState(false)

  const dropSidebar = () => {
    setHam(!ham)
  }

  return (
    <>
      <div className={ham ? "mside vClass" : "mside"} >
        <div className="side1">
          <h3>Access Your Notes</h3>
        </div>
        <div className="side2">
          <Link to="/addnotes"><button className='sideBtn'>Add Notes</button></Link><br />
          <Link to="/readnotes"><button className='sideBtn'>Read Notes</button></Link><br />
          
          <Link to="/"><button className='sideBtn btnResp'>Home</button> </Link> <br />
          <Link to="/about"><button className='sideBtn btnResp'>About</button> </Link> <br />
          <Link to="/settings"><button className='sideBtn btnResp'>Settings</button> </Link> <br />
        </div>
      </div>

      <div className="ham" id='ham'>
        <button onClick={dropSidebar}>
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
      </div>
    </>
  )
}
