import React from 'react';
import './About.css';

import Roll from 'react-reveal/Roll';

const About = () => {
  return (
    <Roll right>
      <div className="about-container" id="about">
        <div className="row">
          <div className="col-md-6 border-4 mt-5 about-image-container">
            <img src="assets/images/Adi.jpg" className="about-image" alt="" />
          </div>

          <div className="col-md-6 border-4 mt-5 content-about-container">
            <h2 className="about">About me</h2>
            <p className="lead text-muted p">
              A passionate Frontend Developer and Backend Developer (MERN Stack)
              looking for an opportunity to utilise my skills and contribute to
              the growth of the organisation through building scalable and
              efficient web applications.
            </p>

            <p className="lead text-muted p">
              Web Development As a Front End Dev I'm resposible to create
              creative layouts, That layouts should useful to other Developers
              can they use very easily in their Project and this help they work
              very easier
            </p>

            <p className="lead text-muted p">
              {' '}
              Web Designer I'm Really enthusiastic to design a site before
              developing then the clients and users can get a overview what is
              the final product.
            </p>

            <div className='btn btn-outline-info mx-5 py-2 border-5'>ADI NARAYANA REDDY</div>
          </div>
        </div>
      </div>
    </Roll>
  );
};

export default About;
