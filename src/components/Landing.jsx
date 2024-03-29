import React from "react";
import Header from "./Header";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import TextLoop from "react-text-loop";
import Footer from "./Footer";
import PortfolioTab from "./PortfolioTab";
import Contact from "./ContactDetails";
import ServiceList from "./ServiceList";
import BlogContent from "./BlogContent";
import Slider from "react-slick";
import { slickDot } from "./slickdot";
import AboutImage from "../assets/images/about/about-10.jpeg";
import ContactImage from "../assets/images/about/about-13.JPG";

const PostList = BlogContent.slice(0, 9);

const SlideList = [
  {
    textPosition: "text-left",
    category: "Welcome to my World",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];
const Landing = () => {
  let title = "About Me",
    description =
      "Currently pursuing a Master of Science in Computer Systems Engineering at Northeastern University with an emphasis on Object Oriented Programming - Java, Web Development, Program Structures and Algorithms,  Data Networking  and Connected Devices",
    description1 =
      "Seeking an environment that would utilize my talent and nurture my knowledge in parallel, would provide an opportunity to grow both as a professional and as an individual. Also, at a micro level I want to learn and work on innovative and dynamic projects that will allow me to be better prepared to counter challenges and convert them into opportunities.";
  return (
    <div className="active-dark">
      <Header homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--33"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      <h1 className="title">
                        Hi, I’m Dheeraj Hiremath <br />
                        <TextLoop>
                          <span> Web Developer.</span>
                          <span> Full Stack Developer.</span>
                          <span> Travel Photographer</span>
                        </TextLoop>{" "}
                      </h1>
                      <h2>based in Boston, USA.</h2>
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        " "
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={AboutImage}
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                      <p className="description">{description1}</p>
                    </div>
                    <div className="row mt--30">
                      <PortfolioTab tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="portfolio" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h1 className="title">Projects</h1>
                  <p>
                    <h3>
                      <TextLoop interval={3000}>
                        <span> Click on the GitHub icon. </span>
                        <span> To know more about the project. </span>
                      </TextLoop>{" "}
                    </h3>
                  </p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}
      <div id="blog" className="fix">
        <div className="rn-blog-area pt--120 pb--140 bg_color--5">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h1>Travel Photography</h1>
                  <p>
                    <h4>
                      <TextLoop interval={3000}>
                        <span>
                          {" "}
                          You'll get to see world from a diffrent perspective.
                          croyez-moi!
                        </span>
                        <span>
                          experience millions of other ways to live. Ich glaube!
                        </span>
                        <span>
                          {" "}
                          Breaking the ice has never been easier after
                          travelling. mijn begrip!{" "}
                        </span>
                        <span>
                          {" "}
                          You’ll discover how resourceful you are when travel.
                        </span>
                        <span>
                          {" "}
                          Learning is a strong reason why you should travel.{" "}
                        </span>
                      </TextLoop>
                    </h4>
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
              <div className="col-lg-12">
                <Slider {...slickDot}>
                  {PostList.map((value, i) => (
                    <div className="blog blog-style--1" key={i}>
                      <div className="thumbnail">
                        <a href="/blog-details">
                          <img
                            src={require(`../assets/images/blog/blog-${value.images}.jpg`)}
                            alt="Blog Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.category}</p>
                        <h4 className="title">
                          <a href="/blog-details">{value.title}</a>
                        </h4>
                        <div className="blog-btn">
                          <a className="rn-btn text-white">Enjoy!</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <Contact contactImages={ContactImage} contactTitle="Let's connect" />
        </div>
      </div>
      {/* End COntact Area */}

      <Footer />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default Landing;
