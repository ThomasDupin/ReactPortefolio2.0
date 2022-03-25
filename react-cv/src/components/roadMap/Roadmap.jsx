import React from 'react'
import timelineElements from '../../timelineEvent'
import { ReactComponent as WorkIcon } from "../../styles/icons/work.svg";
import { ReactComponent as SchoolIcon } from "../../styles/icons/school.svg";


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import "react-vertical-timeline-component/style.min.css"

export default function Roadmap() {
  let workIconStyles = { background: "#06D6A0", margin: "4px 0px -0px -30px" };
  let schoolIconStyles = { background: "#f9c74f",margin: "4px 0px -0px -30px" };
  return (
    <div className='roadmap' id="roadmap">
    <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={ isWorkIcon ? workIconStyles : schoolIconStyles }
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <h5 className="vertical-timeline-element-subtitle">
                {element.date}
              </h5>
              <p id="description">{element.description}</p>

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    
  )
}
