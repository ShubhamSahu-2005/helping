'use client'

import { Progress } from "@/components/ui/progress"

export default function FundBar({ raised, target }) {
  const percentage = Math.min(Math.round((raised / target) * 100), 100)

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-2 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          ${raised.toLocaleString()} raised
        </span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          ${target.toLocaleString()} goal
        </span>
      </div>
      <Progress value={percentage} className="h-4" />
      <div className="mt-2 text-center">
        <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {percentage}% of goal reached
        </span>
      </div>
    </div>
  )
}

