import React from 'react';
import './Education.css';

import Fade from 'react-reveal/Fade';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdLibraryBooks ,MdChatBubble} from "react-icons/md";
import { MdCastForEducation } from 'react-icons/md';

const Education = () => {
  return (
    <>
<Fade up>
    <h3 className='text-center text-white'>...Education Detailes...</h3>
      <div className="container" id="education">
        <div className="row">
          <div className="col">
            <div className="recent-education">
              <VerticalTimeline lineColor="#138781">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date="2021-2023"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdCastForEducation />}
                >
                  <h5 className="vertical-timeline-element-title">
                 (Adret Infotech India Pvt Ltd)
                  </h5>
                  <h4 className="vertical-timeline-element-subtitle">
                  Associate System Engineer (Banglore)
                  </h4>
                  <p>
           MERN stack developer
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>

            <div className="recent-reverse">
              <VerticalTimeline lineColor="#138781">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date="2019 - 2021"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdLibraryBooks />}
                >
                  <h3 className="vertical-timeline-element-title">
                   MCA
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                   Vikrama Shimhapuri Universty
                  </h4>
                  <p>
                   computer application
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>







          </div>
        </div>{' '}
      </div>







      <div className="container" style={{backgroundColor:"blanchedalmond"}}>
        <div className="row">
          <div className="col">
            <div className="recent-education">
              <VerticalTimeline lineColor="#138781">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date="2015 to 2017"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdLibraryBooks />}
                >
                  <h3 className="vertical-timeline-element-title">
           B.Sc
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                 Sri Chaithanya Degree College
                  </h4>
                  <p>
                   Computer science
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>

            <div className="recent-reverse">
              <VerticalTimeline lineColor="#138781">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date="2012- 2015 "
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdChatBubble />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Inter
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    M.P.C
                  </h4>
                  <p>
              Sir c.v Raman Jr College
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>







          </div>
        </div>{' '}
      </div>
      </Fade>



    </>
  );
};

export default Education;
