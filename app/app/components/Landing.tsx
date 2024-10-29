"use client"

import { useState, useEffect, useContext } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import SideBar from "./SideBar"
import BlendPlanning from "./BlendPlanning"
import MyThemeContext from "../context/themeContext"
import Header from "./Header"


export default function Landing() {
  const [selectedOption, setSelectedOption] = useState("Blend Planning")

  const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  
  return (
      <div className="min-h-screen flex">

        <SideBar selectedOption={selectedOption} setSelectedOption ={setSelectedOption}/>
        {/* Main content */}
        <main className={`flex-1 p-8 transition-colors ${themeCtx.isDarkTheme ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
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