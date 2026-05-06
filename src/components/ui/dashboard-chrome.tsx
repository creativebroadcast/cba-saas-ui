import * as React from 'react'
import { cn } from '../../lib/utils'

export interface DashboardChromeProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode
  topNav?: React.ReactNode
  /** Inner padding around the main content. */
  contentClassName?: string
}

export function DashboardChrome({
  sidebar,
  topNav,
  contentClassName,
  className,
  children,
  ...props
}: DashboardChromeProps) {
  return (
    <div
      data-slot="dashboard-chrome"
      className={cn('flex min-h-screen bg-gray-50', className)}
      {...props}
    >
      {sidebar ? <div className="hidden md:flex">{sidebar}</div> : null}
      <div className="flex flex-col flex-1 min-w-0">
        {topNav}
        <main className={cn('flex-1 px-6 py-6', contentClassName)}>{children}</main>
      </div>
    </div>
  )
}
