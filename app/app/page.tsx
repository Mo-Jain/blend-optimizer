"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, FileText, Download, Info, Check, Search, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlendPlanning from "./components/BlendPlanning"
import SideBar from "./components/SideBar"



export default function Dashboard() {
  const [theme, setTheme] = useState("light")
  const [selectedOption, setSelectedOption] = useState("Blend Planning")

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  
  

  const sidebarOptions = [
    "Blend Planning",
    "Procurement Planning",
    "Commercial-Calculator",
    "Parameter Setting"
  ]

  const tabs = ["Daily run", "Parameters", "Add Live Data"]
  const liveDataTabs = ["Inventory", "Blends", "Procurement"]

  return (
    <div className="min-h-screen flex">

      <SideBar sidebarOptions={sidebarOptions} selectedOption={selectedOption} setSelectedOption ={setSelectedOption}/>
      {/* Main content */}
      <main className={`flex-1 p-8 transition-colors ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
        {/* Theme toggle button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{selectedOption}</h1>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleTheme}
            className={`transition-colors ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`}
          >
            {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

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