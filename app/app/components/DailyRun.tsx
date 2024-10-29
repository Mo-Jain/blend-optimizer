import { Moon, Sun, FileText, Download, Info, Check, Search, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

import DataTable from "./DataTable";


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
            <DataTable
                headers={["Creation Date", "Status"]}
                data={dailyRunData}
                actions={() => (
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
                actionName={"Reports"}
                checks={() =>(
                    <div className="flex space-x-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <Check className="h-4 w-4 text-green-500" />
                        <Check className="h-4 w-4 text-green-500" />
                    </div>
                )}
                checkName = {"Approvals"}
            />        
        </div>
    </div>
  )
};

export default DailyRun;
