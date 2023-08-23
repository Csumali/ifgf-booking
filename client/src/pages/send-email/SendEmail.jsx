import React, { useState } from 'react';
import "./sendEmail.css"

const SendEmail = () => {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const mailtoLink = `mailto:zmoly7@gmail.com?subject=Email from ${email}&body=${body}`;
      window.location.href = mailtoLink;
    };
  
    return (
      <div className='email-page'>
        <h2>Send an Email</h2>
        <form onSubmit={handleSubmit} className='email-form'>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="body">Email Body:</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button type="submit" className='send-button'>Send Email</button>
        </form>
      </div>
    );
}

export default SendEmail