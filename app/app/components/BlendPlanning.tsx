"use client"

import { useState, useEffect } from "react"
import DailyRun from "./DailyRun";
import Parameters from "./Parameters";
import AddLiveData from "./AddLiveData";
import DailyBun from "./DailyBun";
import Barameters from "./Barameters";


const BlendPlanning = () => {
    const [selectedTab, setSelectedTab] = useState("Daily run")

    const dailyRunData = [
        { id: 1, creationDate: "2023-05-01", status: "Pending" },
        { id: 2, creationDate: "2023-05-02", status: "Approved" },
        { id: 3, creationDate: "2023-05-03", status: "Rejected" },
        { id: 4, creationDate: "2023-05-04", status: "In Review" },
        { id: 5, creationDate: "2023-05-05", status: "Pending" },
    ]

    const parametersData = [
        { id: 1, name: "Copper A", origin: "Chile", eta: 30, parcelSize: 5000, supply: 15000, earnings: 150, cu: 25, fe: 30 },
        { id: 2, name: "Copper B", origin: "Peru", eta: 45, parcelSize: 4000, supply: 12000, earnings: 140, cu: 23, fe: 32 },
        { id: 3, name: "Copper C", origin: "Australia", eta: 60, parcelSize: 6000, supply: 18000, earnings: 160, cu: 26, fe: 28 },
        { id: 4, name: "Copper D", origin: "Canada", eta: 40, parcelSize: 4500, supply: 13500, earnings: 145, cu: 24, fe: 31 },
        { id: 5, name: "Copper E", origin: "USA", eta: 35, parcelSize: 5500, supply: 16500, earnings: 155, cu: 25.5, fe: 29 },
    ]

    const inventoryData = [
        { id: 1, concentrate: "Copper Concentrate A", quantity: 5000 },
        { id: 2, concentrate: "Copper Concentrate B", quantity: 4000 },
        { id: 3, concentrate: "Copper Concentrate C", quantity: 6000 },
    ]

    const blendsData = [
        { id: 1, concentrate: "Blend X", consumption: 2000 },
        { id: 2, concentrate: "Blend Y", consumption: 3000 },
        { id: 3, concentrate: "Blend Z", consumption: 2500 },
    ]

    const procurementData = [
        { id: 1, concentrate: "Copper A", quantity: 10000, day: "2023-06-01" },
        { id: 2, concentrate: "Copper B", quantity: 8000, day: "2023-06-15" },
        { id: 3, concentrate: "Copper C", quantity: 12000, day: "2023-06-30" },
    ]

    const tabs = ["Daily run", "Parameters", "Add Live Data"]

    return (
            <div>
                <div className="flex space-x-4 mb-4">
                    {tabs.map((tab) => (
                    <button
                    key={tab}
                    className={`pb-2 font-medium transition-colors ${
                        selectedTab === tab
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setSelectedTab(tab)}
                    >
                    {tab}
                    </button>
                ))}
                </div>

                {/* Tab content */}
                {selectedTab === "Daily run" && (
                <DailyBun dailyRunData={dailyRunData}/>
                )}
                {selectedTab === "Parameters" && (
                <Barameters parametersData={parametersData}/>
                )}
                {selectedTab === "Add Live Data" && (
                    <AddLiveData inventoryData={inventoryData} blendsData={blendsData} procurementData={procurementData} />
                )}
            </div>
  )
};

export default BlendPlanning;
