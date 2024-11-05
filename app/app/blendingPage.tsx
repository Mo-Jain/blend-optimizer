"use client"

import Header from "./components/Header"
import BlendPlanning from "./components/BlendPlanning"
import SideBar from "./components/SideBar"
import { useRecoilValue } from "recoil"
import { selectedOptions } from "./store/selectedOption"

export default function blendingPage() {
  const selectedOption = useRecoilValue(selectedOptions);
  
  return (
      <div className="min-h-screen flex">
        {/* Main content */}
        <main className={`flex-1 p-8 transition-colors }`}>
          {/* Theme toggle button */}
          <Header selectedOption={selectedOption} />
          {/* Content area */}
          {selectedOption === "Blend Planning" &&
            <div>
              <BlendPlanning/>
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