import React from "react";

const First =()=>{
    return(

  <div className="background">
    <div className="navigation">
      <p
        className="text"
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "x-large",
          textTransform: "uppercase"
        }}
      >
        <a href="#home">Home</a> &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <a href="#about">About</a> &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <a href="#services">Our services</a> &nbsp;&nbsp;&nbsp;&nbsp; -
        &nbsp;&nbsp;&nbsp;&nbsp; <a href="#port">Portfolio</a>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <a href="#ex">Experience</a> &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;
        &nbsp; <a href="#b">Blog</a> &nbsp;&nbsp;&nbsp; &nbsp; -
        &nbsp;&nbsp;&nbsp; &nbsp; <a href="#cont">Contact</a>
      </p>
    </div>
    <div className="l-constrained-4" id="home">
      <div className="text-2">
        <img
          className="text-3"
          src="images/hello_i_am.png"
          alt="Hello, I AM"
          width={290}
          height={43}
          title="Hello, I AM"
        />
        <img
          className="john"
          src="images/john.png"
          alt="John"
          width={595}
          height={160}
          title="John"
        />
        <img
          className="smith"
          src="images/smith.png"
          alt="Smith"
          width={578}
          height={92}
          title="Smith"
        />
        <img
          className="text-4"
          src="images/i_have_more_then_10_years.png"
          alt="I have more then 10 years of Experience"
          width={602}
          height={20}
          title="I have more then 10 years of Experience"
        />
      </div>
      <div className="rectangle-6-copy-5-holder">
        <a href="">
          <img
            className="text-5"
            src="images/download_cv.png"
            alt="Download CV"
            width={148}
            height={15}
            title="Download CV"
          />
        </a>
      </div>
    </div>
  </div>

    )
}
export default First