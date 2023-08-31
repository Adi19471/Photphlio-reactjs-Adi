import React, { useState } from 'react';
import './Contact.css';

import { VscCallOutgoing } from 'react-icons/vsc';
import { TfiTwitter } from 'react-icons/tfi';

import Zoom from 'react-reveal/Zoom';

import { toast } from 'react-toastify';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    toast.success('Succesfully Submited ');
  };

  return (
    <>
      <Zoom bottom>
        <div className="container-fluid" id="contact">
          <div className="row">
            <div className="col">
              <h3 className="text-center contact-us">
                Contact us
                <TfiTwitter /> <VscCallOutgoing />
              </h3>
              <hr />
              <div className="container ">
                <div className="card mb-3" style={{ Width: 540, height: 420 }}>
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Phone Detailes</h5>

                        <form onSubmit={handlerSubmit}>
                          <div className="">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              User name
                            </label>
                            <input
                              required
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Message
                            </label>
                            <textarea
                              required
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/001/263/984/small/contact-us-concept.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Contact;
