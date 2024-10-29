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
    actions?: () => JSX.Element;
    actionName?:string;
    checks?: () => JSX.Element;
    checkName?:string;
  };
  
const DataTable: React.FC<DataTableProps> = ({ headers, data, actions,actionName,checks,checkName }) => (
    <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-200 dark:border-gray-700">
            {headers.map((header, index) => (
              <TableHead key={index} className="text-gray-700 dark:text-gray-300">
                {header}
              </TableHead>
            ))}
            {actions && <TableHead className="text-gray-700 dark:text-gray-300">{actionName}</TableHead>}
            {checks && <TableHead className="text-gray-700 dark:text-gray-300">{checkName}</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border-gray-200 dark:border-gray-700">
              {Object.entries(row)
              .filter(([key])=>key != "id")
              .map(([key, value]) => (
                <TableCell key={key} className="text-gray-700 dark:text-gray-300">
                    {value}
                </TableCell>
                ))}
              {actions && <TableCell>{actions()}</TableCell>}
              {checks && <TableCell>{checks()}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
  

export default DataTable;
