import React from 'react'

function Greet(props) {
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1>Hii {props.name}, Thank You for Registration !</h1>
        <br />
        <p>we have sent you a confirmation on {props.email}</p>
    </div>
  )
}

export default Greet; 