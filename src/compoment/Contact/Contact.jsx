import React from 'react'
import Styles from './ContactStyles.module.css'

const Contact = () => {
  return (
    <section id='contact' className={Styles.container}>
   <h1 className='sectionTitle'> Contact</h1>
   <form action="">
    <div className="formGroup">
        <label htmlFor="name" hidden> Name</label>
    <input type="text" name='name' id='name' placeholder='name' required />
    </div>

    <div className="formGroup">
        <label htmlFor="email" hidden> Email</label>
    <input type="email" name='email' id='email' placeholder='Email' required />
    </div>
    <div className="formGroup">
        <label htmlFor="message" hidden> Message</label>
    <textarea type="text" name='message' id='message' placeholder='message' required />
    </div>
    <input className='hover btn' type="submit"  submit value="Submit"/>
   </form>
    </section>
  )
}

export default Contact
