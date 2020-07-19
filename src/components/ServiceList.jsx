import React from "react";
import { FaGithub } from "react-icons/fa";

const ServiceList = [
  {
    icon: <FaGithub />,
    title: "Video Browser App",
    skills: "React.js, JavaScript, Axios, YouTube API",
    description:
      "Built a Video Browser App, implementing all life cycle methods of React.js. Integrated YouTube API provided by google developer tools. Implemented Semantic UI for frontend styling & light weight user experience",
    link: "https://github.com/dheerajhiremath92",
  },
  {
    icon: <FaGithub />,
    title: "Smart Variable Speed Governor",
    skills: "Amazon Web Services, Python, Ubidots, RESTful API, DynamoDB",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FaGithub />,
    title: "News App",
    skills: "React.js, JavaScript",
    link: "https://github.com/dheerajhiremath92/NewsApp",
    description:
      "News app using MERN stack which enables users to read real-time news. Built using ReactJS, Redux, Bootstrap, HTML5, CSS3, NodeJS, MongoDB and JavaScript",
  },
  {
    icon: <FaGithub />,
    title: "Daycare UI",
    skills: "Java, MVC, Factory design pattern",
    description:
      "Created Daycare UI using java. MVC pattern was implemented .forged front end using Java swing concepts in Eclipse,, Used SQLite with JDBC API to store data",
    link: "https://github.com/dheerajhiremath92/DayCare",
  },
  {
    icon: <FaGithub />,
    title: "Autonoumous Ground Vehicle",
    skills: "Python, Embedded systems, DFS algorithm, Raspberry Pi, Git",
    description:
      "The goal of the project was to prototype and design an autonomous ground vehicle, that in future days would solve complicated problems like Road Accidents, Unplanned city traffic etc. This project happens to be a work on widely researched topic SLAM using Real Time Video Processing, making autonomy more affordable.",
    link:
      "https://drive.google.com/file/d/1ZaTiqJFDthuhyLCxh_DdC8JLMzZPDoxw/view",
  },
];

class ServiceThree extends React.Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a>
                <div className="service service__style--2">
                  <div className="icon">
                    <a href={val.link} target="_blank">
                      {val.icon}
                    </a>
                  </div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <h6>{val.skills}</h6>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
