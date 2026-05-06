import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode
  /** Inline links between brand and right cluster. */
  links?: React.ReactNode
  /** Right-side actions (CTA, user avatar, settings, etc.). */
  actions?: React.ReactNode
  /** Constrain inner width (default: max-w-6xl). */
  innerClassName?: string
  /** Disable the sticky-blur treatment. */
  noStickyBlur?: boolean
}

export function TopNav({
  brand,
  links,
  actions,
  className,
  innerClassName,
  noStickyBlur,
  ...props
}: TopNavProps) {
  return (
    <nav
      data-slot="top-nav"
      className={cn(
        'border-b border-gray-100',
        !noStickyBlur && 'sticky top-0 z-50 bg-white/85 backdrop-blur-xl',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'mx-auto flex items-center justify-between py-3 px-6',
          innerClassName ?? 'max-w-6xl'
        )}
      >
        <div className="flex items-center gap-6">
          {brand}
          {links ? (
            <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-gray-500">
              {links}
            </div>
          ) : null}
        </div>
        {actions ? (
          <div className="flex items-center gap-3">{actions}</div>
        ) : null}
      </div>
    </nav>
  )
}
