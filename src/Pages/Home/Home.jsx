import React from 'react';
import './Home.css';
import Slide from 'react-reveal/Slide';
import Resume from '../../docs/ADI NARAYANA -MERN.docx';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <Slide left>
        <div className="container-fluid container-backside" id="home">
          <div className="row">
            <div className="HomeAnimation">
              <h3>Hi 👋🏿 I'm a </h3>
              <h3 className="effect-color">
                <Typewriter
                  options={{
                    strings: [
                      'i am MERN Stack Developer !',
                      'I am React Js Developer !',
                      'I am Full Stack Developer !',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <div className="btn-group mx-2 py-2">
                <a
                  href="https://api.whatsapp.com/send?phone=9398895448"
                  rel="9398895448"
                  className="btn btn-success"
                  target="_blank"
                >
                  Whatsapp
                </a>
                <a
                  href={Resume}
                  download="ADI_RESUME"
                  className="btn btn-warning"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Home;
