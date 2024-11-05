import { Button } from "@/components/ui/button";
import React from "react";
import DataTable from "./DataTable";
import { Upload } from "lucide-react";

const CommecialCaluclator = () => {
  const concentrateData= [
  { name: "Copper A", mineCapacity: 19834223, originCountry: "Chile", earningUSD: 261.23, parcelSize: 15000, leadTime: 45, cuPercentage: 25 },
  { name: "Copper B", mineCapacity: 17382387, originCountry: "Peru", earningUSD: 148.34, parcelSize: 15000, leadTime: 45, cuPercentage: 25 },
  { name: "Copper C", mineCapacity: 20543212, originCountry: "Australia", earningUSD: 190.45, parcelSize: 12000, leadTime: 40, cuPercentage: 24 },
  { name: "Copper D", mineCapacity: 15098234, originCountry: "USA", earningUSD: 175.78, parcelSize: 13000, leadTime: 50, cuPercentage: 26 },
  { name: "Copper E", mineCapacity: 18943210, originCountry: "Canada", earningUSD: 210.67, parcelSize: 14000, leadTime: 42, cuPercentage: 27 }
];

  return (
    <div className="space-y-4 flex-col justify-between items-center h-full py-2">
      <div className="flex justify-center items-center">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <Upload className="h-4 w-4" />
          Upload Concentrate File to Calculate
        </Button>
      </div>
      <div className="flex justify-end items-center">
        <div className="px-3">
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Calculate
          </Button>
        </div>
        <div>
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Export Commercial Calculation
          </Button>
        </div>
      </div>
      <div className="rounded-md border self-end">
        <DataTable
          headers={["Name","Mine Capacity(Tons)","Origin Country","Earning (USD/DMT)","Parcel size","Lead Time","Cu(%)"]}
          data={concentrateData}
        />
      </div>
    </div>
  );
};

export default CommecialCaluclator;
