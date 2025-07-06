import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below or contact us directly.</p>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Your Name" required />

        <label>Email</label>
        <input type="email" placeholder="Your Email" required />

        <label>Message</label>
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>

  )
}

export default Contact
