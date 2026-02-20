import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import play from '../../assets/play.png'
const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about} alt='' className='about-img'></img>
        <img src={play} alt='' className='play-icon' onClick={() => { setPlayState(true) }}></img>
      </div>
      <div className='about-right'>
        <h3>About Soundplustech</h3>
        <h2>Become a great sound enginer today!</h2>
        <p>SoundPlusTech Sound Engineering Academy, we believe that sound is more than just audio—it’s an art, a science, and a powerful tool for creativity and communication. Our mission is to empower the next generation of audio professionals with the skills,
          knowledge, and hands-on experience needed to thrive in the ever-evolving world of sound technology.</p>
        <p>SoundPlusTech is a premier training institution dedicated to sound engineering, music production, and audio technology.
          We bring together industry experts, cutting-edge equipment, and a passion for innovation to create an environment where students can explore, experiment, and excel.</p>

      </div>

    </div>
  )
}

export default About
