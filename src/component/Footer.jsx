import React from 'react'

const Footer = () => {
  return (
    <div style={{display: "flex",justifyContent: "space-around",flexWrap: "wrap",width:"100%"}}>
    <footer style={{backgroundColor:"003366",color:"black",width:"100%",display:"flex"}}>
    <div style={{display: "flex",justifyContent: "space-around",flexWrap: "wrap",backgroundColor:"lightpink", width: "100%"}}>
          <h2>Vruksha <br></br>Landscape</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Quick links</li>
            <li>VCPL</li>
            <li>Pre-cast</li>
            <li>Real Estate</li>
            <li>Vruksha</li>
            <li>Contact Us</li>
          </ul>
          <h4>Who we are</h4>
          <ul style={{ listStyle: "none", padding: 0}}>
            <li>About Us</li>
            <li>Award & Recognition</li>
            <li>Clintele & Alliances</li>
            <li>projects</li>
          </ul>
          <h4>Contact Details</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>phone: +91 9907453210</li>
            <li>email: sindag@gmail.com</li>
            <li>Place: Mysore</li>
           
            
          </ul>
        </div>
      {/* <p style={{ textAlign: "center", marginTop: "20px" }}>© 2025 Surana College. All Rights Reserved.</p> */}
    </footer>
    </div>
  )
}

export default Footer
