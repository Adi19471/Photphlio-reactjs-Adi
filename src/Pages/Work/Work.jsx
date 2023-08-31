import "./Work.css"
import React from 'react';

const Work = () => {
  return (
    <>
      <div class="container mt-4" id="work">
        <div class="row">
          <div class="col">
            <h3 className="text-center text-priamry">Top Recent Projects</h3>
            <p class="mute text-center  textcenter">
              Overall responsibility for the project's planning, execution, and
              successful completion. Defines project scope, objectives, and
              deliverables. Creates and manages the project timeline, budget,
              and resources. Coordinates communication among team members,
              stakeholders, and clients. Monitors progress, identifies risks,
              and implements mitigation strategies.
            </p>
          </div>

          <div class="container-fluid px-3">
            <div class="row">
              <div class="col-sm-4 mt-2">
                <div className="card" style={{ width: '20rem' }}>
                  <img
                    src="assets/images/project1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center text-success display-6 fheadingH5">
                      Organization Profile Management Application
                    </h5>
                    <p className="card-text">
                      This application is an in-house project used by the
                      per-sales and sales team to maintain and access data
                      related to existing customers and prospective customers to
                      enable strategic planning of sales activities of ZettaMine
                      for their IT services and solutions division.
                    </p>
                  </div>
                  <ul className="btn-group px-1 btn-sm  bg-white">
                    <li className="btn-sm btn btn-info border-3 shadow">
                      REACT JS
                    </li>
                    <li className="btn-sm btn btn-primary border-3 shadow">
                      NODE JS
                    </li>
                    <li className="btn-sm btn btn-warning border-3 shadow">
                      EXPRESS JS
                    </li>
                    <li className="btn-sm btn btn-success border-3 shadow">
                      MONGODB JS
                    </li>
                  </ul>
                  <div className="card-body text-center">
                    <a href="#" className="card-link ">
                      view more Detailes
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-4 mt-5">
                <div className="card" style={{ width: '20rem' }}>
                  <img
                    src="assets/images/project2.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center text-warning display-6 fheadingH5">
                     RAOS TECHNOLOGY
                    </h5>
                    <p className="card-text">
                    Provides guidance, feedback, and oversight throughout the project.
    Assists in defining the project scope, objectives, and learning outcomes.
    Offers advice on technical challenges and project management.
                    </p>
                  </div>
                  <ul className="btn-group px-1 btn-sm  bg-white">
                    <li className="btn-sm btn btn-info border-3 shadow">
                      REACT JS
                    </li>
                    <li className="btn-sm btn btn-primary border-3 shadow">
                      NODE JS
                    </li>
                    <li className="btn-sm btn btn-warning border-3 shadow">
                      EXPRESS JS
                    </li>
                    <li className="btn-sm btn btn-success border-3 shadow">
                      MONGODB JS
                    </li>
                  </ul>
                  <div className="card-body text-center">
                    <a href="#" className="card-link ">
                      view more Detailes
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div className="card" style={{ width: '20rem' }}>
                  <img
                    src="assets/images/zeesan.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center text-success display-6 fheadingH5">
                    Zeeshan Construction in Kolkata
                    </h5>
                    <p className="card-text">
                    Roles and responsibilities can vary based on the specific needs of the construction application project. Effective collaboration, communication, and a thorough understanding of the construction industry's requirements are key to the success of the project.
                    </p>
                  </div>
                  <ul className="btn-group px-1 btn-sm  bg-white">
                    <li className="btn-sm btn btn-info border-3 shadow">
                      REACT JS
                    </li>
                    <li className="btn-sm btn btn-primary border-3 shadow">
                      NODE JS
                    </li>
                    <li className="btn-sm btn btn-warning border-3 shadow">
                      EXPRESS JS
                    </li>
                    <li className="btn-sm btn btn-success border-3 shadow">
                      MONGODB JS
                    </li>
                  </ul>
                  <div className="card-body text-center">
                    <a href="#" className="card-link ">
                      view more Detailes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
