import Image from "next/image";
import React from "react";
import logo from "./../logo.png";
import { useRecoilState } from "recoil";
import { selectedOptions } from "../store/selectedOption";
import { useRouter } from "next/navigation";

export enum options {
  BlendPlanning = "Blend Planning",
  ProcurementPlanning = "Procurement Planning",
  CommercialCalculator = "Commercial-Calculator",
  ParameterSetting = "Parameter Setting",
}

const SideBar = () => {
  const [selectedOption, setSelectedOption] = useRecoilState(selectedOptions);

  const router = useRouter();

  console.log(selectedOption);

  const sidebarOptions = [
    options.BlendPlanning,
    options.ProcurementPlanning,
    options.CommercialCalculator,
    options.ParameterSetting,
  ];

  function handleSelection(option:string){
    setSelectedOption(option)
  }

  return (
    <div>
      <aside className="w-64 h-full bg-gray-800 text-white p-4">
        <nav className="space-y-2">
          <Image src={logo} alt="logo" style={{ objectPosition: "left" }} />
          {sidebarOptions.map((option) => (
            <div
              key={option}
              className={`block py-2 px-4 rounded transition-colors ${
                selectedOption === option
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={(e) => {
                e.preventDefault();
                console.log("option is "+ option+ "selected option is"+selectedOption);
                handleSelection(option);
              }}
            >
              {option}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
