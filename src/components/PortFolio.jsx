import React from "react";
import java from "../../public/java.png";
import javascript from "../../public/JavaScript-logo.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import mysql from "../../public/mysql.png";
import tail from "../../public/tail.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
    {
      id: 7,
      logo: mysql,
      name: "MySQL",
    },
    {
      id: 8,
      logo: tail,
      name: "Tailwind CSS",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Technology Known</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] ml-4 p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 ml-6 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              {/* Replaced buttons with an input textbox */}
              <div className="px-6 py-4">
                <input
                  type="text"
                  placeholder="Write something here"
                  className="border rounded px-3 py-2 w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;