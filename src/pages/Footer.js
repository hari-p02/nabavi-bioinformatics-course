import React from 'react'

const Footer = () => {
  return (
    <div className='footer-grid'>
        <div>
            <img className="uconnfooter" src='../images/uconnfooter.jpg' alt=''/>
        </div>
        <ul className='footer1'>
            <li className='footer1-item'>One</li>
            <li className='footer1-item'>Two</li>
            <li className='footer1-item'>Three</li>
        </ul>
        <ul className='footer2'>
            <li className='footer2-item'>Four</li>
            <li className='footer2-item'>Five</li>
            <li className='footer2-item'>Six</li>
        </ul>
    </div>
  )
}

export default Footer