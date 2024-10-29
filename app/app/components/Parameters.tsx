import {  Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import DataTable from "./DataTable";


const Parameters = ({parametersData}: 
    {parametersData: {
        id:number,
        name:string,
        origin:string,
        eta: number,
        parcelSize:number,
        supply: number, 
        earnings: number, 
        cu: number, 
        fe: number
    }[]}
) => {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredParametersData = parametersData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  return (
    <div>
      <div className="space-y-4">
          <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
              placeholder="Search concentrate name"
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
          </div>
          <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
              <DataTable
                  headers={["Name", "Origin", "ETA", "Parcel Size", "Supply", "Earnings", "Cu", "Fe"]}
                  data={filteredParametersData}
              />
          </div>
      </div>
    </div>
  )
};

export default Parameters;
