import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>
          Hi, I’m  Colin.
        </h1>

        <p>
          I’m an engineer turned UX Designer from the east coast who happily found his way to Chicago. Currently, I’m actively looking for work and writing case studies to publish here (as I learn react).
        </p>
        <p>
          Ask me about the work I did while at <a href="https://designation.io">DESIGNATION</a>, previous life as an engineer, or really anything at all (feel free to poke around my Instagram for inspiration).
        </p>
        <div className = 'halfBreak'></div>
        <a className = 'infoLink' href="Resume.pdf">Resume</a>
        <a className='box'></a>
        <a className = 'infoLink' href="https://linkedin.com/in/colin-kuntz">Linkedin</a>
        <a className='box'></a>
        <a className = 'infoLink' href="https://www.instagram.com/colkuntz/">Instagram</a>
        <div className = 'break'></div>
        <a className = 'contactMe' href="mailto:colin.kuntz@gmail.com?subject=Hi">Shoot me an email</a>
        <div className = 'halfBreak'></div>

      </div>

    );
  }
}

export default Homepage;
