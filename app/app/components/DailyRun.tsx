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


const DailyRun = ({dailyRunData}:
    {dailyRunData: {
        id:number,
        creationDate:string,
        status:string
    }[]}
) => {
  return (
    <div>
      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
                    <Table>
                    <TableHeader className="bg-gray-100 dark:bg-gray-800" >
                        <TableRow className="border-gray-200 dark:border-gray-700">
                        <TableHead className="text-gray-900 dark:text-gray-300">Creation Date</TableHead>
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
    </div>
  )
};

export default DailyRun;
