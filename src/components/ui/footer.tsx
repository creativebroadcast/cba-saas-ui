import * as React from 'react'
import { cn } from '@/lib/utils'

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand block — typically logo + wordmark. */
  brand?: React.ReactNode
  /** Links cluster on the right. */
  links?: React.ReactNode
  /** Copyright / legal text. Renders below or beside, depending on layout. */
  copyright?: React.ReactNode
  /** Constrain inner width (default: max-w-6xl). */
  innerClassName?: string
}

export function Footer({
  brand,
  links,
  copyright,
  className,
  innerClassName,
  ...props
}: FooterProps) {
  return (
    <footer
      data-slot="footer"
      className={cn('border-t border-gray-100', className)}
      {...props}
    >
      <div
        className={cn(
          'mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-gray-400',
          innerClassName ?? 'max-w-6xl'
        )}
      >
        <div className="flex items-center gap-3">
          {brand}
          {copyright ? <span>{copyright}</span> : null}
        </div>
        {links ? <div className="flex items-center gap-6">{links}</div> : null}
      </div>
    </footer>
  )
}
