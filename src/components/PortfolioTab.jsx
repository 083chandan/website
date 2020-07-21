import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

class PortfolioTab extends React.Component {
  render() {
    let tab1 = "Main skills",
      tab4 = "Awards",
      tab3 = "Experience",
      tab2 = "Education",
      tab5 = "Certifications ";
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
                          August - 2020
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
                          November 2017 - July2019
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a>
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
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
