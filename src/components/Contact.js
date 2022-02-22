import React from 'react';
import './Contact.css'

const Contact = () => {
  return(
    <div className='contact'>
       <h1 className=''>
         So whether you are looking for a
         brand new site or just have a few
         questions on which way to go, feel
         free to send me an email and I'll be
         happy to help in any way I can.
       </h1>
       <div className='contact-button'>
         <a className=''
                 href="mailto:info@ocwebworks.com"
         >
          contact
         </a>
       </div>
    </div>
  )
}
export default Contact;
