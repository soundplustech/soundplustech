import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'


const Campus = () => {
  return (

    <div className='Campus'>
        <div className='gallery'>
            <img src={gallery1} alt='' />
            <img src={gallery2} alt='' />
            <img src={gallery3} alt='' />
               <img src={gallery4} alt='' />
                  </div>
      <button className='btn dark-btn'>See more here</button>
    </div>
  )
}

export default Campus
