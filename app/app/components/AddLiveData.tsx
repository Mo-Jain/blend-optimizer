import { Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import DataTable from "./DataTable";

const AddLiveData = ({inventoryData,blendsData,procurementData}
    :
    {inventoryData:{ 
        id: number, 
        concentrate: string, 
        quantity: number 
    }[],
    blendsData:{ 
        id: number, 
        concentrate: string, 
        consumption: number 
    }[],
    procurementData:{ 
        id: number, 
        concentrate: string, 
        quantity: number,
        day:string 
    }[],
    }
) => {

    const [selectedLiveDataTab, setSelectedLiveDataTab] = useState("Inventory");

    const liveDataTabs = ["Inventory", "Blends", "Procurement"]

  return (
            <div className="space-y-4">
                <div className="flex space-x-4 mb-4">
                {liveDataTabs.map((tab) => (
                    <button
                    key={tab}
                    className={`pb-2 font-medium transition-colors ${
                        selectedLiveDataTab === tab
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setSelectedLiveDataTab(tab)}
                    >
                    {tab}
                    </button>
                ))}
                </div>
                {selectedLiveDataTab === "Inventory" && (
                <div className="space-y-4">
                    <Button className="mb-4">
                    <Plus className="mr-2 h-4 w-4" /> Add Inventory
                    </Button>
                    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                        <DataTable
                        headers={["Concentrate", "Quantity"]}
                        data={inventoryData}
                        actions={() => (
                            <Button variant="ghost" size="icon" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                            </Button>
                        )}
                        actionName="Actions"
                        />
                    </div>
                </div>
                )}
                {selectedLiveDataTab === "Blends" && (
                <div className="space-y-4">
                    <Button className="mb-4">
                    <Plus className="mr-2 h-4 w-4" /> Add Blend
                    </Button>
                    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                        <DataTable
                        headers={["Concentrates", "Consumption"]}
                        data={blendsData}
                        />
                    </div>
                </div>
                )}
                {selectedLiveDataTab === "Procurement" && (
                <div className="space-y-4">
                    <Button className="mb-4">
                    <Plus className="mr-2 h-4 w-4" /> Add Procurement
                    </Button>
                    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                        <DataTable
                        headers={["Concentrates","Quantity","Day of procurement"]}
                        data={procurementData}
                        />
                    </div>
                </div>
                )}
            </div>
                
  )
};

export default AddLiveData;
