import React from 'react'

const Home = () => {
  return (
    <div>
      
      <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>
        This is the home page of our React app. We're excited to have you here!
        Explore our features, learn more about us, and don't hesitate to get in touch.
      </p>

      <div className="home-highlights">
        <div className="card">
          <h3>Who We Are</h3>
          <p>We are a passionate team building modern web applications using the latest technologies.</p>
        </div>
        <div className="card">
          <h3>What We Do</h3>
          <p>From UI design to full-stack development, we create fast and responsive applications.</p>
        </div>
        <div className="card">
          <h3>Contact Us</h3>
          <p>Have a question or want to collaborate? Head over to our Contact page.</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home
