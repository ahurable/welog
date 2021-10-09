import React from 'react';

const Footer = (props) => {
  return (
    <footer>
      <div className="footer">
        <div className="privacy">All rights are reserved for {props.author}</div>
        <div className="social-media justify-content-center d-flex">
          <span className="icon"><a href="#"><i class="fab fa-instagram"></i></a></span>
          <span className="icon"><a href="#"><i class="fab fa-twitter"></i></a></span>
          <span className="icon"><a href="#"><i class="fab fa-facebook"></i></a></span>
          <span className="icon"><a href="#"><i class="fab fa-youtube"></i></a></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;