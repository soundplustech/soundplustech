import React from 'react'
import './Programs.css'
import rec1 from '../../assets/rec1.jpg'
import rec2 from '../../assets/rec2.jpg'
import rec4 from '../../assets/rec4.jpg'
import icon1 from '../../assets/icon1.png'
const programs = () => {
  return (
    <div className='programs' >
    <div className="program">
      <img src={rec1} alt=''></img>
      <div className='caption'>
        <img src={icon1}alt=''/>
        <p>Mixing session</p>
      </div>
      
    </div>
 <div className="program">
      <img src={rec2} alt=''></img>
       <div className='caption'>
        <img src={icon1}alt=''/>
        <p>Recording session</p>
      </div>
      
    </div>
 <div className="program">
      <img src={rec4} alt=''></img>
       <div className='caption'>
        <img src={icon1}alt=''/>
        <p>live session</p>
      </div>
      
    </div>
    </div>
   
  )
}

export default programs
