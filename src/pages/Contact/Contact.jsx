import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import './Contact.css';


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const formRef = useRef();

  const SendEmail = (e, subject) => {
    e.preventDefault();
    if (isSubmitting === true) {
      console.log("IT IS TRUUUUUUUU TRUUUUUUUUUUUU")
      return;
    }
    setIsSubmitting(true);

    if (subject === "I'd like to hire you for a front-end project") {
      setStateMessage('Easteregg #3 found');
      setTimeout(() => {
        setStateMessage('Currently I do not take on any new front-end work, please try again later.');
        setTimeout(() => {
          //setStateMessage(null);
          //setIsSubmitting(false);
        }, 4000);
      }, 1000);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_EJS_SID,
          process.env.REACT_APP_EJS_TID,
          formRef.current,
          {
            publicKey: process.env.REACT_APP_EJS_PK
          })
        .then(() => {
          setStateMessage('Message sent!');
          //formRef.current.reset();
          setTimeout(() => {
            //setStateMessage(null);
            //setIsSubmitting(false);
          }, 5000); // hides message after 5s

        },
          (error) => {
            setStateMessage('Something went wrong, please try again later', error.text);
            setTimeout(() => {
              //setStateMessage(null);
              //setIsSubmitting(false);
            }, 5000);

          }
        );
      setStateMessage(null);
      setIsSubmitting(false);
    }
  };
  return (
    <>


      <div className="side-border"></div>
      <div className="divider">
        <section className="content-container">
          <article className="contanct-container">
            <h1 className="contact-header">Contact Me</h1>

            {stateMessage && <div className="info-box-contact-form">{<h3>{stateMessage}</h3>}</div>}

            <form ref={formRef} onSubmit={(e) => SendEmail(e, document.getElementById('subject_input').value)} id="contact-form">

              <div className="name">
                <label htmlFor="name"></label>
                <input type="text" placeholder="My name is" name="from_name" id="name_input" required />
              </div>

              <div className="email">
                <label htmlFor="email"></label>
                <input type="email" placeholder="My e-mail is" name="email" id="email_input" required />
              </div>

              <div className="phone">
                <label htmlFor="phone"></label>
                <input type="text" placeholder="My phone number is" name="phone" id="phone_input" required />
              </div>

              <div className="subject">
                <label htmlFor="subject"></label>
                <select name="subject" id="subject_input" placeholder="Subject" required>
                  <option disabled hidden defaultValue>Subject</option>
                  <option >I'd like to get into contact</option>
                  <option >I'd like to make a project proposal</option>
                  <option >I'd like to hire you for a project</option>
                  <option >I'd like to hire you for a front-end project</option>
                  <option >I would like to contact you about something else</option>
                </select>
              </div>
              <div className="message">
                <label htmlFor="message"></label>
                <textarea name="message" placeholder="I would like to talk about" id="message_input" cols="30" rows="5" required />
              </div>

              <div className="submit">
                <input type="submit" className="contact-submit-button" id="form_button" value="Contact Me" />
              </div>
            </form>
          </article>
        </section>
      </div>
      <div className="side-border"></div>
    </>
  );
}