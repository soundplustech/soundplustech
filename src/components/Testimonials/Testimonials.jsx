import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/nexticon.png'
import backicon from '../../assets/backicon.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'
const Testimonials = () => {

    const slider=useRef();
    let tx = 0;

const slideForward= ()=>{
if(tx > -50){
    tx -= 25;
}
slider.current.style.transform = `translatex(${tx}%)`
}
const slideBackward= ()=>{
    if(tx < 0){
    tx += 25;
}
slider.current.style.transform = `translatex(${tx}%)`
}

  return (
    <div className='Testimonials'>
        
        <img src={nexticon } alt='' className='next-btn' onClick=
        {slideForward}/>
         <img src={backicon } alt='' className='back-btn'  onClick=
         {slideBackward}/>
         <div className='slider'>
            <ul ref={slider}>
               <li>
                <div className='slider'>
                    <div className='user-info'>
                        <img src={user1} alt='' />
                        <div>
                            <h3>William jackson</h3>
                            <span>Soundplustech,Nigeria</span>
                        </div>
                    </div>
                        <p>choosing to pusue my diploma at soundplustech was one of the best
                            decision I've ever made. the supportive community,state 
                            of the art facilities and 
                            committment to academic excelence have 
                            truly exceeded my expectations. </p>
                </div>
               </li>
                 <li>
                <div className='slider'>
                    <div className='user-info'>
                        <img src={user2} alt='' />
                        <div>
                            <h3>William jackson</h3>
                            <span>Soundplustech,Nigeria</span>
                        </div>
                    </div>
                        <p>choosing to pusue my diploma at soundplustech was one of the best
                            decision I've ever made. the supportive community,state 
                            of the art facilities and 
                            committment to academic excelence have 
                            truly exceeded my expectations. </p>
                </div>
               </li>
                 <li>
                <div className='slider'>
                    <div className='user-info'>
                        <img src={user3} alt='' />
                        <div>
                            <h3>William jackson</h3>
                            <span>Soundplustech,Nigeria</span>
                        </div>
                    </div>
                        <p>choosing to pusue my diploma at soundplustech was one of the best
                            decision I've ever made. the supportive community,state 
                            of the art facilities and 
                            committment to academic excelence have 
                            truly exceeded my expectations. </p>
                </div>
               </li>
                 <li>
                <div className='slider'>
                    <div className='user-info'>
                        <img src={user4} alt='' />
                        <div>
                            <h3>William jackson</h3>
                            <span>Soundplustech,Nigeria</span>
                        </div>
                    </div>
                        <p>choosing to pusue my diploma at soundplustech was one of the best
                            decision I've ever made. the supportive community,state 
                            of the art facilities and 
                            committment to academic excelence have 
                            truly exceeded my expectations. </p>
                </div>
               </li>
            </ul>  
         </div>
        </div>
  )
}

export default Testimonials
