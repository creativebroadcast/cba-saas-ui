import * as React from 'react'
import { cn } from '@/lib/utils'

export interface StatisticsCalloutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode
  label: React.ReactNode
  /** Optional accent class layered onto the card (e.g. "hover:border-orange-200"). */
  accentClassName?: string
}

export function StatisticsCallout({
  value,
  label,
  className,
  accentClassName,
  ...props
}: StatisticsCalloutProps) {
  return (
    <div
      className={cn(
        'text-center py-6 px-4 rounded-xl border border-gray-100 bg-white/80 transition-all',
        'hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]',
        accentClassName,
        className
      )}
      {...props}
    >
      <div className="text-2xl font-bold text-gray-900 font-mono tracking-tight">
        {value}
      </div>
      <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-1 font-medium">
        {label}
      </div>
    </div>
  )
}
