import React from "react";
import react from "../../public/reactjs.png";
import ex from "../../public/express.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import tail from "../../public/tail.png";
import node from "../../public/node.png";
import mong from "../../public/mongodb.jpg";
import my from "../../public/mysql.png";
import bt from "../../public/boot.jpeg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: react,
      name: "React JS",
    },
    {
      id: 2,
      logo: ex,
      name: "Express JS",
    },
    {
      id: 3,
      logo: node,
      name: "Node JS",
    },
    {
      id: 4,
      logo: mong,
      name: "MongoDB",
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 6,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 7,
      logo: tail,
      name: "Tailwind Css",
    },
    {
      id: 8,
      logo: java,
      name: "Java",
    },
    {
      id: 9,
      logo: my,
      name: "MYSQL",
    },
    {
      id: 10,
      logo: bt,
      name: "BOOTSTRAP",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
