import React, { useRef, useState } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/nexticon.png'
import backicon from '../../assets/backicon.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'
const Testimonials = () => {


    const slider = useRef();
    const [index, setIndex] = useState(0);
    const testimonials = [
        {
            img: user1,
            name: 'William jackson',
            location: 'Soundplustech,Nigeria',
            text: `choosing to pusue my diploma at soundplustech was one of the best decision I've ever made. the supportive community,state of the art facilities and committment to academic excelence have truly exceeded my expectations.`
        },
        {
            img: user2,
            name: 'William jackson',
            location: 'Soundplustech,Nigeria',
            text: `choosing to pusue my diploma at soundplustech was one of the best decision I've ever made. the supportive community,state of the art facilities and committment to academic excelence have truly exceeded my expectations.`
        },
        {
            img: user3,
            name: 'William jackson',
            location: 'Soundplustech,Nigeria',
            text: `choosing to pusue my diploma at soundplustech was one of the best decision I've ever made. the supportive community,state of the art facilities and committment to academic excelence have truly exceeded my expectations.`
        },
        {
            img: user4,
            name: 'William jackson',
            location: 'Soundplustech,Nigeria',
            text: `choosing to pusue my diploma at soundplustech was one of the best decision I've ever made. the supportive community,state of the art facilities and committment to academic excelence have truly exceeded my expectations.`
        },
    ];

    const slideForward = () => {
        setIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    };
    const slideBackward = () => {
        setIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
    };

    return (
        <div className='Testimonials'>
            <img src={nexticon} alt='' className='next-btn' onClick={slideForward} />
            <img src={backicon} alt='' className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul
                    ref={slider}
                    style={{
                        display: 'flex',
                        width: `${testimonials.length * 100}%`,
                        transform: `translateX(-${index * (100 / testimonials.length)}%)`,
                        transition: 'transform 0.6s cubic-bezier(0.77,0,0.18,1)',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {testimonials.map((t, i) => (
                        <li key={i} style={{ width: `${100 / testimonials.length}%`, listStyle: 'none' }}>
                            <div className='slider'>
                                <div className='user-info'>
                                    <img src={t.img} alt='' />
                                    <div>
                                        <h3>{t.name}</h3>
                                        <span>{t.location}</span>
                                    </div>
                                </div>
                                <p>{t.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
