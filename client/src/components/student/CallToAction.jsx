import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div>
      <h1>Learn Anything</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa in voluptate corporis?</p>
      <div>
        <button>Get Started</button>
        <button>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></button>
      </div>
    </div>

  )
}

export default CallToAction