import { Button } from "@/components/ui/button";
import React from "react";
import DataTable from "./DataTable";

const ParameterSetting = () => {
  const concentrate = [
    { id: 1, name: "Copper A", origin: "Chile", leadTime: 30, parcelSize: 5000, mineCapacity: 15000, earnings: 150, cu: 25, fe: 30 },
    { id: 2, name: "Copper B", origin: "Peru", leadTime: 45, parcelSize: 4000, mineCapacity: 12000, earnings: 140, cu: 23, fe: 32 },
    { id: 3, name: "Copper C", origin: "Australia", leadTime: 60, parcelSize: 6000, mineCapacity: 18000, earnings: 160, cu: 26, fe: 28 },
    { id: 4, name: "Copper D", origin: "Canada", leadTime: 40, parcelSize: 4500, mineCapacity: 13500, earnings: 145, cu: 24, fe: 31 },
    { id: 5, name: "Copper E", origin: "USA", leadTime: 35, parcelSize: 5500, mineCapacity: 16500, earnings: 155, cu: 25.5, fe: 29 },
  ];

  const designSpec = [
    { element: "Cu", min: 20.5, max: 30.0 }, // Copper
    { element: "Fe", min: 15.0, max: 25.0 }, // Iron
    { element: "Zn", min: 5.5, max: 10.0 },  // Zinc
    { element: "Pb", min: 2.0, max: 7.5 },   // Lead
    { element: "Ag", min: 0.5, max: 1.5 }    // Silver
  ];

  const productionPlan = [
    { date: "2024-10-29", feedRate: 85.34, operatingHours: 16.4, smelterAvailability: 92.13, smelterUtilization: 78.42 },
    { date: "2024-10-28", feedRate: 103.67, operatingHours: 12.3, smelterAvailability: 87.5, smelterUtilization: 64.28 },
    { date: "2024-10-27", feedRate: 92.41, operatingHours: 20.1, smelterAvailability: 95.0, smelterUtilization: 83.12 },
    { date: "2024-10-26", feedRate: 98.25, operatingHours: 18.6, smelterAvailability: 89.3, smelterUtilization: 74.95 },
    { date: "2024-10-25", feedRate: 106.5, operatingHours: 15.4, smelterAvailability: 90.25, smelterUtilization: 70.87 }
  ];

  const runParams = [
    { bayCapacity: 2000, maxBay: 5, maxConcentrate: 1500, minConcentrate: 500 },
    { bayCapacity: 2500, maxBay: 4, maxConcentrate: 1800, minConcentrate: 700 },
    { bayCapacity: 2200, maxBay: 6, maxConcentrate: 1600, minConcentrate: 600 },
    { bayCapacity: 2100, maxBay: 5, maxConcentrate: 1700, minConcentrate: 550 },
    { bayCapacity: 2400, maxBay: 3, maxConcentrate: 1550, minConcentrate: 650 }
  ];

  return (
    <div className="space-y-6 py-4">
      <div className="flex justify-between items-end">
        <span className=" text-red-500 font-bold text-base">Concentrates</span>
        <div className="flex">
          <div className="px-3">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Export Concentrate
            </Button>
          </div>
          <div>
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Export Commercial Calculation
            </Button>
          </div>
        </div>
      </div>

      {/* Concentrates DataTable */}
      <DataTable
        headers={["Name", "Origin Country", "Lead Time (Days)", "Parcel Size (Tons)", "Mine Capacity (Tons)", "Earnings (USD/DMT)", "Cu(%)", "Fe(%)"]}
        data={concentrate}
      />

      {/* Design Specs and Production Plan side by side */}
      <div className="flex gap-4">
        <div>
          <span className="p-2 text-red-500 font-bold text-base mb-2">Design Specs</span>
          <DataTable
            headers={["Element", "Min (%)", "Max (%)"]}
            data={designSpec}
          />
        </div>

        <div className="">
          <span className="p-2 text-red-500 font-bold text-base mb-2">Production Plan</span>
          <DataTable
            headers={["Date", "Feed Rate (tons/hour)", "Operating hours", "Smelter Availability", "Smelter Utilization"]}
            data={productionPlan}
          />
        </div>
      </div>

      {/* Run Parameters section */}
      <div>
        <span className="p-2 text-red-500 font-bold text-base mb-2">Run Parameters</span>
        <DataTable
          headers={["Bay Capacity", "Max Bay", "Max Concentrate", "Min Concentrate"]}
          data={runParams}
        />
      </div>
    </div>
  );
};

export default ParameterSetting;
