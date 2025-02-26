import React, { useState } from "react";
import img1 from "../pics/Rent.png";
import { useNavigate } from "react-router-dom";
import img2 from "../pics/IdeaGarage.png";
import img3 from "../pics/Foodenza.png";
import img4 from "../images/Aryan.jpg";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";
import { gsap, Expo, stagger, duration } from "gsap";
import resume from "./resume";

function Pageone() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [formattedTime, setFormattedTime] = useState(getFormattedTime());

  const handleResumeClick = () => {
    window.open("/resume", "_blank");
  };
  function updateTime() {
    setFormattedTime(getFormattedTime());
  }
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  const deeform = () => {
    let prex = 0;
    let prey = 0;

    let scalex = 1;
    let scaley = 1;

    window.addEventListener("mousemove", (e) => {
      prex = e.clientX;
      prey = e.clientY;

      scaley = gsap.utils.clamp(0.5, 2, e.clientY - prey);
      scalex = gsap.utils.clamp(0.5, 2, e.clientX - prex);

      circlemove(scalex, scaley);
    });
  };

  const circlemove = (newx, newy) => {
    window.addEventListener("mousemove", (e) => {
      document.getElementById("movecircle").style = `transform:translate(${e.clientX
        }px,${e.clientY}px) scale(${(newx, newy)})`;
    });
  };

  const movepic = () => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let rotate = 0;
      let diffrot = 0;

      elem.addEventListener("mousemove", (e) => {
        let diffX = e.clientX - elem.getBoundingClientRect().left;
        let diffY = e.clientY - elem.getBoundingClientRect().top;

        diffrot = e.clientX - rotate;
        rotate = e.clientX;

        let image = elem.querySelector("img");
        let head = elem.querySelector("h1");
        gsap.to(head, {
          duration: 1,
          power: 3,
          scale: 0.8,
          opacity: 0.3,
        });

        gsap.to(image, {
          opacity: 1,
          power: 3,
          delay: -1,
          ease: Expo.easeInOut,
          x: diffX - image.clientWidth / 2,
          y: diffY - image.clientHeight / 2,
          rotate: gsap.utils.clamp(-20, 20, diffrot),
        });
      });
    });
  };
  const removepic = () => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let rotate = 0;
      let diffrot = 0;

      elem.addEventListener("mouseleave", (e) => {
        diffrot = e.clientX - rotate;
        rotate = e.clientX;

        let image = elem.querySelector("img");

        let head = elem.querySelector("h1");
        gsap.to(head, {
          duration: 1,
          power: 3,
          scale: 1,
          opacity: 0.6,
        });

        gsap.to(image, {
          opacity: 0,
          duration: 0.5,
          ease: Expo.easeInOut,
        });
      });
    });
  };
  function getFormattedTime() {
    let date = new Date().getTime();

    let currentDate = new Date(date);
    let hours = currentDate.getHours().toString().padStart(2, "0");
    let minutes = currentDate.getMinutes().toString().padStart(2, "0");

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let timezone = "EST";
    let formattedTime = `${hours}.${minutes} ${ampm} ${timezone}`;
    return formattedTime;
  }

  useEffect(() => {
    let t1 = gsap.timeline();
    t1.from("#nav", {
      y: "-20",
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: 0,
        duration: 1,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: 0.2,
      })
      .from(".herofooter", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      })
      .from(".projects", {
        y: "100",
        duration: 4,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: 0.2,
      });

    deeform();
    movepic();
    removepic();
  }, []);

  return (
    <>
    <p class="desktop-warning">This site is best viewed on a desktop.</p>
      <div className="movecircle" id="movecircle"></div>
      <div className="main" ref={scrollRef}>
        <div className="hero">
          <div className="nav" id="nav">
            <a href="#">SUDARSHAN BHUYAN</a>
            {/* <h2>MENU+</h2> */}
          </div>
          <div className="heading">
            <div className="bounding">
              <h1 className="boundingelem"> Fullstack</h1>
            </div>
            <div className="secondhead">
              <div className="bounding">
                <h1 id="h2" className="boundingelem">
                  developer
                </h1>
              </div>
              <div className="headinglast">
                <div className="bounding">
                  <h5 className="boundingelem">Based in India</h5>
                </div>
              </div>
            </div>
            <div className="smallheading">
              <div className="bounding">
                <h5 className="boundingelem"></h5>
              </div>
              <div className="bounding">
                <h5 className="boundingelem"></h5>
              </div>
            </div>
          </div>
          <div className="herofooter">
            <a href="#" >
              Available for freelance<i class="ri-arrow-right-up-line"></i>{" "}
            </a>
            <a href="">
              {/* <i class="ri-arrow-right-up-line"></i> */}
            </a>
            <div className="circles">
              <div className="circle-down-arr">
                <i class="ri-arrow-down-line"></i>
              </div>
              <div className="circle-down-arr">
                <i class="ri-arrow-down-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="bounding">
            <div className="projects">
              <a target="_blank" style={{ cursor: "pointer" }}>
                Some of my work &nbsp; <i class="ri-arrow-down-line"></i>{" "}
              </a>
            </div>
          </div>
          <div className="elem">
            <img src={img1} alt="image" onClick={() => { window.open("https://mycarrental.onrender.com/", "_blank"); }} />
            <h1>Car Rental</h1>
            <h5>2023</h5>
          </div>
          <div className="elem">
            <img src={img2} alt="image" onClick={() => { window.open("https://idea-garage.vercel.app/", "_blank"); }} />
            <h1>IdeaGarage</h1>
            <h5>2023</h5>
          </div>
          <div className="elem">
            <img src={img3} alt="image" onClick={() => { window.open("https://github.com/10Aryan01/Food-Delivery-App", "_blank"); }} />
            <h1>FOODENZA</h1>
            <h5>2022</h5>
          </div>
          <div className="elemlast"></div>
        </div>
        <div className="about">
          <div className="aboutmain">
            <img src={img4} alt="image" />
            <div className="aboutdis">
              <p className="mydesc">
                <span id="aboutspan">(ABOUT ME)</span>
                <br /> I'm a Frontend Developer with a passion for creating
                products that not only look good but also solve real problems.
                When I'm not sketching ideas on paper, you can find me
                binge-watching a Netflix series or playing video games. My
                design philosophy is simple: make it visually appealing,
                functional, and bring a smile to people's faces. I'm the
                developer you want on your team if you want to make people say 'I
                need that in my life!'.
              </p>
              <a href="https://www.linkedin.com/in/sudarshan-bhuyan/" style={{
                fontFamily: "Inika"
              }}>Lets Talk</a>
            </div>
          </div>
        </div>
        <div className="forgot">
          <h4 id="fh41">(Have a look at my)</h4>
          <h4>
        <button onClick={() => window.open("https://drive.google.com/file/d/1VXR_GkByQ0F-i6Zc4yQkaRfhPfUCjS2G/view?usp=sharing", "_blank")}
        style={{
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "inherit",
        }}>
    RESUME
  </button>{" "}
  <i className="ri-arrow-right-up-line"></i>
      </h4>
        </div>
        <div className="footer">
          <div className="footercontent">
            <div className="footerleft">
              <h5>2025 &copy;</h5>
              <h5>{formattedTime}</h5>
            </div>
            <div className="footerright">
              <a href="https://www.linkedin.com/in/sudarshan-bhuyan/" target="_blank">linkedin</a>
              <a href="https://twitter.com/home" target="_blank">twitter</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pageone;
