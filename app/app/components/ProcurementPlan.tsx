"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Pen, Check, Info, Search } from "lucide-react"
import DataTable from './DataTable'
import { Input } from '@/components/ui/input'

type Scenario = {
  id: string
  name: string
  createdAt: string
  createdBy: string
  status: 'Planned' | 'Published'
}

const scenarios: Scenario[] = [
  {
    id: '1',
    name: 'Q3 Procurement Plan',
    createdAt: '2023-06-15',
    createdBy: 'john.doe@example.com',
    status: 'Planned',
  },
  {
    id: '2',
    name: 'Emergency Supply Chain',
    createdAt: '2023-06-10',
    createdBy: 'jane.smith@example.com',
    status: 'Published',
  },
  {
    id: '3',
    name: 'Cost Optimization Strategy',
    createdAt: '2023-06-05',
    createdBy: 'mike.johnson@example.com',
    status: 'Planned',
  },
]

export function ProcurementPlanning() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredScnerios = scenarios.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4 flex-col justify-between items-center h-full py-4">
      
      <div className="flex justify-end items-center">
        <Button className='bg-blue-500 text-white hover:bg-blue-600'>
          Create Scenario
        </Button>
      </div>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
            placeholder="Search concentrate name"
            className="pl-8 w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="rounded-md border self-end">
        <DataTable 
        headers={["Scenario Name","Created At","Created By","Status"]}
        data={filteredScnerios}
        actions={()=>(
            <div className="flex space-x-2">
                <Button variant="ghost" size="icon" title="Edit">
                    <Pen className="h-full w-full" />
                    <span className="sr-only">Edit</span>
                </Button>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    title="Publish"
                >
                    <Check className="h-4 w-4 rounded-full" />
                    <span className="sr-only">Publish</span>
                </Button>
                <Button variant="ghost" size="icon" title="Information">
                    <Info className="h-4 w-4 rounded-full" />
                    <span className="sr-only">Information</span>
                </Button>
            </div>
        )}
        actionName='Actions'
        ></DataTable>
      </div>
    </div>
  )
}