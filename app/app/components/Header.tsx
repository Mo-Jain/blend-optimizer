"use client"

import { useState, useEffect, useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import MyThemeContext from "../context/themeContext";

const Header = ({selectedOption}:{selectedOption:string}) => {

    const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

    function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
    }

  return (
    <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{selectedOption}</h1>
        <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleThemeHandler}
            className={`transition-colors ${themeCtx.isDarkTheme ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`}
        >
            {!themeCtx.isDarkTheme  ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    </div>
  )
};

export default Header;
