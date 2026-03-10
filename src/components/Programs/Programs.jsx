import React, { useState } from 'react'
import './Programs.css'
import rec1 from '../../assets/rec1.jpg'
import rec2 from '../../assets/rec2.jpg'
import rec4 from '../../assets/rec4.jpg'
import icon1 from '../../assets/icon1.png'

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const programsData = [
    { id: 1, image: rec1, text: 'Mixing session' },
    { id: 2, image: rec2, text: 'Recording session' },
    { id: 3, image: rec4, text: 'live session' },
  ];

  return (
    <div className='programs'>
      {programsData.map((program) => (
        <div 
          key={program.id} 
          className={`program ${activeProgram === program.id ? 'active' : ''}`}
          onClick={() => setActiveProgram(activeProgram === program.id ? null : program.id)}
        >
          <img src={program.image} alt='' />
          <div className='caption'>
            <img src={icon1} alt='' className="program-icon" />
            <p>{program.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Programs
