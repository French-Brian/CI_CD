
import './App.css'
import React from 'react'
import logo from './assets/lightLogo_800X800.png'


function App() {
  return (
    <>
      <div className="card" style={{ width: '300px', height: '300px', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        <img src={logo} style={{ width: '75%', height: '75%', objectFit: 'scale-down' }} />      
      <div className = "buttons">
        <button>
          Login
        </button>
        <button>
          Sign Up
          </button>
         
      </div>
      </div>

      </>
  )
}

export default App
