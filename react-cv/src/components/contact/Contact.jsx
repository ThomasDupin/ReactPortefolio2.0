import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_rjyxdkr', 'template_x0krix8', form.current, 'i3vMoyddekmfnNRI6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


  };
  return (
    <div className='contact' id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt=""/>  
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form ref={form} onSubmit={handleSubmit} >
             <input type="name" name="name" placeholder="Name"/>
             <input type="subject" name="subject" placeholder="Subject"/>
             <input type="email" required name="email" placeholder="Email"/>
             <textarea name ="message" placeholder="Message"></textarea>
             <button type="submit">send</button>
             {message && <span>Thanks, I'll reply ASAP :)</span>}
          </form>  
        </div>
    </div>
  )
}








