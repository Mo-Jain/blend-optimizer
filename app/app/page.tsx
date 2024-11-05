"use client"

import Header from "./components/Header"
import BlendPlanning from "./components/BlendPlanning"
import SideBar, { options } from "./components/SideBar"
import { useRecoilValue } from "recoil"
import { selectedOptions } from "./store/selectedOption"
import { ProcurementPlanning } from "./components/ProcurementPlan"
import CommecialCaluclator from "./components/CommecialCaluclator"
import ParameterSetting from "./components/ParameterSetting"

export default function Home() {
  const selectedOption = useRecoilValue(selectedOptions);
  
  
  return (
      <div className="min-h-screen flex">
        {/* Main content */}
        <main className={`flex-col w-full h-screen items-between p-5 transition-colors }`}>
          {/* Theme toggle button */}
          <Header selectedOption={selectedOption} />
          {/* Content area */}
          
          {selectedOption === options.BlendPlanning &&
            <div>
              <BlendPlanning/>
            </div>
          } 
          {selectedOption === options.ProcurementPlanning &&
            <div>
              <ProcurementPlanning/>
            </div>
          } 
          {selectedOption === options.CommercialCalculator &&
            <div>
              <CommecialCaluclator/>
            </div>
          } 
          {selectedOption === options.ParameterSetting &&
            <div>
              <ParameterSetting/>
            </div>
          } 

          {!selectedOption && 
          <div className="mt-4 text-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-8 rounded-lg shadow">
            No content available for this section.
          </div>}
        </main>
      </div>
  )
}