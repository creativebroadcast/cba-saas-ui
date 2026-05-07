import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const statusBadgeVariants = cva(
  'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap',
  {
    variants: {
      variant: {
        live: 'bg-red-50 text-red-700',
        ready: 'bg-green-50 text-green-700',
        setup: 'bg-amber-50 text-amber-700',
        ended: 'bg-gray-100 text-gray-600',
        info: 'bg-blue-50 text-blue-700',
        neutral: 'bg-gray-100 text-gray-700',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  }
)

export function LiveDot({ className }: { className?: string }) {
  return (
    <span
      data-slot="live-dot"
      className={cn('relative flex h-2 w-2', className)}
      aria-hidden="true"
    >
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
    </span>
  )
}

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  showDot?: boolean
}

export function StatusBadge({
  className,
  variant,
  showDot,
  children,
  ...props
}: StatusBadgeProps) {
  const renderDot = showDot ?? variant === 'live'
  return (
    <span
      data-slot="status-badge"
      data-variant={variant ?? 'neutral'}
      className={cn(statusBadgeVariants({ variant }), className)}
      {...props}
    >
      {renderDot ? <LiveDot /> : null}
      {children}
    </span>
  )
}
