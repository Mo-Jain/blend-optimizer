import React from "react"

const SideBar = ({sidebarOptions,selectedOption,setSelectedOption} : 
    {sidebarOptions: string[],
    selectedOption:string,
    setSelectedOption: (option:string) => void
    }
) => {
  return (
    <div>
      <aside className="w-64 h-full bg-gray-800 text-white p-4">
        <nav className="space-y-2">
          {sidebarOptions.map((option) => (
            <a
              key={option}
              href="#"
              className={`block py-2 px-4 rounded transition-colors ${
                selectedOption === option
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  )
};

export default SideBar;
