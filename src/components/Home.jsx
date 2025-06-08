import React from "react";

import pic from "/mypic.jpg";

import { FaGithub, FaTelegram, FaSquareFacebook, FaWhatsapp } from "react-icons/fa6";
import { SiAngular, SiJavascript, SiMongodb, SiMysql, SiSpringboot } from "react-icons/si";
import { FaReact, FaLinkedin, FaJava } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Experienced and goal-oriented Full Stack Developer with over 3 years of professional experience 
              in building scalable Java-based web applications. Adeptive at modernizing legacy systems, implementing 
              microservices architecture, and integrating secure authentication in Spring Boot, React using Firebase
               and Google OAuth2.O an JWT. Hands-on experience in legacy Java (J2SE 1.8) to modern Java (Java 11/17) 
               migration, and actively working on RESTful APIs, MVC patterns, and backend authentication systems. Keen knowlegdge
               on service now, dynatrace, and JIRA for project management. AWS certified clous prationer with a strong focus on cloud-native development and deployment.
               Strong knowledge on Java, Spring Boot, React, and Angular. Proficient in unit testing with JUnit and Mockito, API testing with Postman, and database management with MySQL and MongoDB.
              Skilled in version control with Git and GitHub, adept at collaborating in cross-functional teams,
              and experienced in Agile methodologies. Passionate about continuous learning and staying updated with the latest technologies.

              <br />
               AWS certified clous prationer with a strong focus on cloud-native development and deployment.
              <br />
              ITI4 foundation certified.
              <img
                src="itil.png"
                alt="ITI4 Foundation Certified"
                className="w-32 h-10 mt-2"></img>

            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center  hover:scale-110 duration-200 ">Available on</h1>
                <ul className="flex space-x-3">
                  <li>
                    <a href="https://www.facebook.com/gnanenda.kumar/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer  hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/gnanendra-chinthamani-1114b521a/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer  hover:scale-110 duration-200" />
                    </a>
                  </li>

                  <li>
                    <a href="https://t.me/8555854688" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer  hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/918555854688" target="_blank">
                      <FaWhatsapp className="text-2xl cursor-pointer   hover:scale-110 duration-200" />
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/gnanu45229" target="_blank"><FaGithub className="text-2xl cursor-pointer  hover:scale-110 duration-200" /> </a>
                  </li>
                </ul>

              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-3">
                  <FaJava className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <SiMysql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiSpringboot className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiAngular className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiJavascript className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />

                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;