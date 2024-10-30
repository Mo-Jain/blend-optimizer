import Image from "next/image";
import React from "react";
import logo from "./../logo.png";
import { useRecoilState } from "recoil";
import { selectedOptions } from "../store/selectedOption";

const SideBar = () => {
  const [selectedOption, setSelectedOption] = useRecoilState(selectedOptions);

  const sidebarOptions = [
    "Blend Planning",
    "Procurement Planning",
    "Commercial-Calculator",
    "Parameter Setting",
  ];

  return (
    <div>
      <aside className="w-64 h-full bg-gray-800 text-white p-4">
        <nav className="space-y-2">
          <Image src={logo} alt="logo" style={{ objectPosition: "left" }} />
          {sidebarOptions.map((option) => (
            <a
              key={option}
              href="#"
              className={`block py-2 px-4 rounded transition-colors ${
                selectedOption === option
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedOption(option);
              }}
            >
              {option}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
