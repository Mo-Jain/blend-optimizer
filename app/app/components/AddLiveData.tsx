import { Moon, Sun, FileText, Download, Info, Check, Search, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react";

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
                    <Table>
                        
                        <TableHeader className="bg-gray-100 dark:bg-gray-800" >
                        <TableRow className="border-gray-200 dark:border-gray-700">
                            <TableHead className="text-gray-700 dark:text-gray-300">Concentrates</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Quantity</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Action</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {inventoryData.map((row) => (
                            <TableRow key={row.id} className="border-gray-200 dark:border-gray-700">
                            <TableCell className="text-gray-700 dark:text-gray-300">{row.concentrate}</TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">{row.quantity}</TableCell>
                            <TableCell>
                                <Button  variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900">
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </div>
                </div>
                )}
                {selectedLiveDataTab === "Blends" && (
                <div className="space-y-4">
                    <Button className="mb-4">
                    <Plus className="mr-2 h-4 w-4" /> Add Blend
                    </Button>
                    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                    <Table>
                        <TableHeader className="bg-gray-100 dark:bg-gray-800" >
                        <TableRow className="border-gray-200 dark:border-gray-700">
                            <TableHead className="text-gray-700 dark:text-gray-300">Concentrates</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Consumption</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {blendsData.map((row) => (
                            <TableRow key={row.id} className="border-gray-200 dark:border-gray-700">
                            <TableCell className="text-gray-700 dark:text-gray-300">{row.concentrate}</TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">{row.consumption}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </div>
                </div>
                )}
                {selectedLiveDataTab === "Procurement" && (
                <div className="space-y-4">
                    <Button className="mb-4">
                    <Plus className="mr-2 h-4 w-4" /> Add Procurement
                    </Button>
                    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                    <Table>
                        <TableHeader className="bg-gray-100 dark:bg-gray-800" >
                        <TableRow className="border-gray-200 dark:border-gray-700">
                            <TableHead className="text-gray-700 dark:text-gray-300">Concentrates</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Quantity</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Day of procurement</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {procurementData.map((row) => (
                            <TableRow key={row.id} className="border-gray-200 dark:border-gray-700">
                            <TableCell className="text-gray-700 dark:text-gray-300">{row.concentrate}</TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">{row.quantity}</TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-300">{row.day}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </div>
                </div>
                )}
            </div>
                
  )
};

export default AddLiveData;
