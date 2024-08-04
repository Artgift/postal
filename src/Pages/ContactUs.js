import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = ({message }) => {
  const form = useRef();
  const [feedback, setFeedback] = useState('');
  const [mailmas,  setmailmas] = useState(message);
  useEffect(() => {
    if (form.current) {
      
      form.current.message.value = message;
    }
  }, [ message]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zgy6x5m', 'template_x471n6s', form.current, 'QJrvZaZKuKYyXSJhh')
      .then(
        () => {
          //setFeedback('SUCCESS!');
          alert("SUCCESS");
          console.log('SUCCESS!');
        },
        (error) => {
          setFeedback('FAILED... ' + error.text);
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        
        
        
       <input type="text" name="message" defaultValue={message} className="r3-input" />
       
       
        <input type="submit" value="       Send Order     "  className="invov2" />
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

