import { useState } from "react";
import { FileText, Download, Info, Check, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DataTableProps = {
  headers: string[];
  data: Record<string, any>[];
  actions?: (row: Record<string, any>) => JSX.Element;
};

const DataTable: React.FC<DataTableProps> = ({ headers, data, actions }) => (
  <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
    <Table>
      <TableHeader>
        <TableRow className="border-gray-200 dark:border-gray-700">
          {headers.map((header, index) => (
            <TableHead key={index} className="text-gray-700 dark:text-gray-300">
              {header}
            </TableHead>
          ))}
          {actions && <TableHead className="text-gray-700 dark:text-gray-300">Actions</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index} className="border-gray-200 dark:border-gray-700">
            {headers.map((header) => (
              <TableCell key={header} className="text-gray-700 dark:text-gray-300">
                {row[header]}
              </TableCell>
            ))}
            {actions && <TableCell>{actions(row)}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("Daily run");
  const [selectedLiveDataTab, setSelectedLiveDataTab] = useState("Inventory");
  const [searchTerm, setSearchTerm] = useState("");

  const dailyRunData = [
    { id: 1, creationDate: "2023-05-01", status: "Pending" },
    { id: 2, creationDate: "2023-05-02", status: "Approved" },
    { id: 3, creationDate: "2023-05-03", status: "Rejected" },
    { id: 4, creationDate: "2023-05-04", status: "In Review" },
    { id: 5, creationDate: "2023-05-05", status: "Pending" },
  ]

  const parametersData = [
    { id: 1, name: "Copper Concentrate A", origin: "Chile", eta: 30, parcelSize: 5000, supply: 15000, earnings: 150, cu: 25, fe: 30 },
    { id: 2, name: "Copper Concentrate B", origin: "Peru", eta: 45, parcelSize: 4000, supply: 12000, earnings: 140, cu: 23, fe: 32 },
    { id: 3, name: "Copper Concentrate C", origin: "Australia", eta: 60, parcelSize: 6000, supply: 18000, earnings: 160, cu: 26, fe: 28 },
    { id: 4, name: "Copper Concentrate D", origin: "Canada", eta: 40, parcelSize: 4500, supply: 13500, earnings: 145, cu: 24, fe: 31 },
    { id: 5, name: "Copper Concentrate E", origin: "USA", eta: 35, parcelSize: 5500, supply: 16500, earnings: 155, cu: 25.5, fe: 29 },
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
    { id: 1, concentrate: "Copper Concentrate A", quantity: 10000, day: "2023-06-01" },
    { id: 2, concentrate: "Copper Concentrate B", quantity: 8000, day: "2023-06-15" },
    { id: 3, concentrate: "Copper Concentrate C", quantity: 12000, day: "2023-06-30" },
  ]

  const filteredParametersData = parametersData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex">
      {selectedTab === "Daily run" && (
        <DataTable
          headers={["Creation Date", "Status"]}
          data={dailyRunData}
          actions={(row) => (
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <FileText className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          )}
        />
      )}
      {selectedTab === "Parameters" && (
        <div className="space-y-4">
          <Input
            placeholder="Search concentrate name"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <DataTable
            headers={["Name", "Origin", "ETA", "Parcel Size", "Supply", "Earnings", "Cu", "Fe"]}
            data={filteredParametersData}
          />
        </div>
      )}
      {selectedTab === "Add Live Data" && selectedLiveDataTab === "Inventory" && (
        <DataTable
          headers={["Concentrate", "Quantity"]}
          data={inventoryData}
          actions={(row) => (
            <Button variant="ghost" size="icon" className="text-red-500">
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        />
      )}
      {/* Other tabs */}
    </div>
  );
}
