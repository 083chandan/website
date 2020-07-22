import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

class PortfolioTab extends React.Component {
  render() {
    let tab1 = "Technical skills",
      tab4 = "Certifications",
      tab3 = "Experience",
      tab2 = "Education ",
      tab5 = "Awards ";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                    <Tab>{tab5}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <h6>
                            Python
                            <Progress percent={90} />
                          </h6>
                        </li>
                        <li>
                          <h6>
                            Javascript
                            <Progress percent={87} />
                          </h6>
                        </li>
                        <li>
                          <h6>
                            Java
                            <Progress percent={83} />
                          </h6>
                        </li>
                        <li>
                          <h6>
                            React
                            <Progress percent={85} />
                          </h6>
                        </li>
                        <li>
                          <h6>
                            HTML5/CSS
                            <Progress percent={85} />
                          </h6>
                        </li>
                        <li>
                          <h6>
                            MYSQL
                            <Progress percent={90} />
                          </h6>
                        </li>
                        <li>
                          <h6>
                            Git
                            <Progress percent={86} />
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            <h6>
                              Master of Science in Computer Systems Engineering
                            </h6>
                            <span> Northeastern University, Boston, MA</span>
                          </a>
                          May - 2021
                        </li>
                        <li>
                          <a>
                            <h6>
                              Bachelor of Engineering in Automation & Robotics
                            </h6>
                            <span>
                              B V Bhoomaraddi College of Engineering &
                              Technology, Hubli , India
                            </span>
                          </a>
                          June - 2017
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            <h6>Associate Software Engineer</h6>
                            <span> Accenture India</span>
                          </a>
                          November 2017 - July 2019
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1xPjCiq0C7eZvIPZbbnbD8rwk-VSEXAOc/view?usp=sharing"
                            target="_blank"
                          >
                            <h6>
                              Oracle Cloud Infrastructure Foundations 2020
                              Certified Associate
                            </h6>
                            <span>ORACLE</span>
                          </a>
                          July - 2020
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1zVi6qnRYlo5ae7DaY3o0Njj5W8iWZi8U/view?usp=sharing"
                          >
                            <h6>Software Engineering Virtual Experience</h6>
                            <span>JPMORGAN CHASE & CO</span>
                          </a>
                          May - 2020
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1_yResjgTAY97rdzs_AcNb7n_6BuBYf4v/view?usp=sharing"
                            target="_blank"
                          >
                            <h6>Python Bootcamp</h6>
                            <span>UDEMY</span>
                          </a>
                          June - 2020
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1wmhOzyxQG_wA2C5GylofianFHBPSnSrn/view?usp=sharing"
                          >
                            <h6> Leadership Award </h6>
                            <span>
                              B V Bhoomaraddi College of Engineering &
                              Technology
                            </span>
                          </a>{" "}
                          March 2017
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1-WITZtQxjwKxEh3anC9WTfHfSJPacz9D/view?usp=sharing"
                          >
                            <h6> Efficient Contributor </h6>

                            <span>Accenture</span>
                          </a>{" "}
                          May 2019
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1kumz5dG87gm6e9bNksGj71mc-Wdb7Wwm/view?usp=sharing"
                          >
                            <h6>Promising Innovator</h6>
                            <span>KPIT Technologies</span>
                          </a>{" "}
                          August 2016
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default PortfolioTab;
