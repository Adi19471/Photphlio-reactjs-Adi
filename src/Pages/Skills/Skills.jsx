import React from 'react';
import "./Skills.css"
import { Techskills } from '../../data/Techskills/Techskills';

console.log(Techskills);

const Skills = () => {
  return (
    <>
      <div className="container mt-5">
        <div class="row">
          <div class="col">
            <h1 className="text-center ">Technical Skills</h1>
            <p className="text-center">
              🔜🔜 including programing Langugaes ,framework,databases,front-end
              and back-end tools and API'S
            </p>
          </div>

          <div className="container shadow-lg">
            <div className="row">

                {Techskills.map((tools, index) => {
                  return(
                    <>
                    <div className="col-sm-4 card border-3 p-1 my-2  skillboard">
                  <div class="card-body">
                    <div class="card-title mr-3">
                      <h4>{tools.name}</h4>
                      <img className='img-thumbnail hover-effect ' width="250px" height="50px" src={tools.image} alt="" />
                    </div>
                  </div>
                  </div>
                    </>
                  )
                })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
