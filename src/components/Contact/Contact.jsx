import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'

const Contact = () => {


   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6387f9dd-90ce-4f68-a0e8-7e39bf4b5b47");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
  
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3> Send us a message <img src={msg} alt='' /></h3>
            <p>feel free to reach out through contact form or find our contact information
                below.your feedback, questions,and suggestions are 
                important to us as we strive to provide exceptional service to our
                Academy community.
            </p>
            <ul>
                <li><img src={mail} alt='' />soundplustech01@gamil.com</li>
                  <li> <img src={phone} alt='' />+234 7035158727</li>
                    <li> <img src={location} alt='' />No 5, olorunsogo road,behid rccg Agape parish,Abeokuta,Ogun State,Nigeria.</li>
            </ul>
        </div>
         <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input text='text' name='name' placeholder='Enter your name'required></input>
            <label>Phone number </label>
            <input type='Tel' name='phone' placeholder='Enter your moible number' required></input>
            <label>write your message here</label>
            <textarea name="message" rows='6' placeholder='enter your message'required></textarea>
            <button type='submit' className='btn dark-btn' >Submit Now </button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
