import React from 'react'
import styles from '../Contact/ContactStyle.module.css'
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <from action="">
        <div className="formGroup " >
          <label htmlFor="name" hidden>Name</label>
          <input 
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          />
        </div>
        <div className="formGroup " >
          <label htmlFor="email" hidden>Email</label>
          <input 
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
          />
        </div>
          <div className="formGroup " >
          <label htmlFor="message" hidden>Message</label>
          <textarea 
          name="message"
          id="message"
          placeholder="message"
          required
          ></textarea>
        </div>
        <input className="hober btn" value="Submit" type="submit" />
      </from>
    </section>
  )
}

export default Contact
