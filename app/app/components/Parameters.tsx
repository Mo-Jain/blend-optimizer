import {  Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react";


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
                    <Table>
                        <TableHeader className="bg-gray-100 dark:bg-gray-800" >
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
    </div>
  )
};

export default Parameters;
