import React from "react";
import "./Carousel.css";
import { Typewriter } from "react-simple-typewriter";
export const Carousel = () => {
  return (
    <div className="carousel" id="catalogueCarousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" id="carousel-inner">
          <div
            className="carousel-item active text-center"
            data-bs-interval="7000"
          >
            <img
              src="assets/GroupHackers.jpg"
              className="d-block w-100 img img-fluid carousel-image" style={{height:"90vh"}}
              alt="Group Hackers"
            />
            <div className="carousel-caption">
              <h5 className="carousel-header attacker">
                <Typewriter
                  words={[
                    "You are Not Safe!!!",
                    "You are Not Beware!!!",
                    "You are not Alert!!!",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={20}
                  delaySpeed={2000}
                />
              </h5>
              <p className="carousel-text attacker  ">
                Attackers are on the way.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img
              src="assets/SecurityExpert.jpg"
              className="image w-100 carausel-image img img-fluid carousel-image"
              alt="You have been hacked!!!" style={{height:"90vh"}}
            />
            <div className="carousel-caption">
              <h5 className="carousel-header security">
                <Typewriter
                  words={["Learn !!!", " Implement !!!", "Fun !!!"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={20}
                  delaySpeed={2000}
                />
              </h5>
              <p className="carousel-text security">
                IO Dump presents Cyber Tronic
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img
              src="assets/Protect.jpg" style={{height:"90vh"}}
              className="d-block w-100 img-fluid img"
              alt="assets"
            />
            <div className="carousel-caption">
              <h5 className="carousel-header expert">
                <Typewriter
                  words={["Stay Safe!!!", " Beware!!!", "Alert!!!"]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={20}
                  delaySpeed={2000}
                />
              </h5>
              <p className="carousel-text expert">Cyber Team Ahead .</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
  );
};
