import { useState } from "react"
import {  FileText, Download, Info, Check, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
  const [selectedTab, setSelectedTab] = useState("Daily run")
  const [selectedLiveDataTab, setSelectedLiveDataTab] = useState("Inventory")
  const [searchTerm, setSearchTerm] = useState("")

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
            
            {/* Tab content */}
            {selectedTab === "Daily run" && (
              <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200 dark:border-gray-700">
                      <TableHead className="text-gray-700 dark:text-gray-300">Creation Date</TableHead>
                      <TableHead className="text-gray-700 dark:text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-700 dark:text-gray-300">Reports</TableHead>
                      <TableHead className="text-gray-700 dark:text-gray-300">Approvals</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dailyRunData.map((row) => (
                      <TableRow key={row.id} className="border-gray-200 dark:border-gray-700">
                        <TableCell className="text-gray-700 dark:text-gray-300">{row.creationDate}</TableCell>
                        <TableCell className="text-gray-700 dark:text-gray-300">{row.status}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-black hover:bg-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">View report</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-black hover:bg-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download report</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-black hover:bg-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Report information</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <Check className="h-4 w-4 text-green-500" />
                            <Check className="h-4 w-4 text-green-500" />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
            {selectedTab === "Parameters" && (
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
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200 dark:border-gray-700">
                        <TableHead className="text-gray-700 dark:text-gray-300">Name of concentrate</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">Origin Country</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">ETA (Days)</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">Parcel size (tons)</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">Supply (tons)</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">Earnings (USDT/DMT)</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">Cu (%)</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">Fe (%)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredParametersData.map((row) => (
                        <TableRow key={row.id} className="border-gray-200 dark:border-gray-700">
                          <TableCell className="text-gray-700 dark:text-gray-300">{row.name}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{row.origin}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{row.eta}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{row.parcelSize}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{row.supply}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{row.earnings}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{row.cu}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{row.fe}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
            {selectedTab === "Add Live Data" && (
              <div className="space-y-4">
                {selectedLiveDataTab === "Inventory" && (
                  <div className="space-y-4">
                    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                      <Table>
                        <TableHeader>
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
                    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-gray-200 dark:border-gray-700">
                            <TableHead className="text-gray-700 dark:text-gray-300">Concentrate</TableHead>
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
                    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                      <Table>
                        <TableHeader>
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
            )}
          </div>
        ) 
}