import React from "react";
import java from "../../public/java.png";
import Angular from "../../public/Angular.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
      description:"Single repository for All my java projects" ,
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description:"prortfolio website using ReactJS and Tailwind CSS",
    },,
    {
      id: 2,
      logo: Angular,
      name: "Angular",
      description:"SumUp web application using Angular and Spring Boot",
    },
    
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description:"NodeJS and ExpressJS based web application",
    },
    ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name ,description}) => (
            <div
              className="md:w-[250px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] p-1 rounded-full border-[2px]"
                alt=""
                n
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {description}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded w-15 h-8"> */}
                  {/* Video */}
                {/* </button> */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;