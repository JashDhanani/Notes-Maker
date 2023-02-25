import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div id="navbar">
      <nav>
        <div className="listItem">
          <ul>
            <li><b>Notes Maker</b></li>
            <li className='navResp'><Link to="/"><button>Home</button> </Link> </li>
            <li className='navResp'><Link to="/about"><button>About</button> </Link> </li>
            <li className='navResp'><Link to="/settings"><button>Settings</button> </Link> </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
