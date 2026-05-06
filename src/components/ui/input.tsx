import * as React from 'react'
import { cn } from '../../lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          'flex h-9 w-full rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm',
          'placeholder:text-gray-400',
          'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-gray-300/40 focus-visible:border-gray-400',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'aria-invalid:border-red-400 aria-invalid:ring-3 aria-invalid:ring-red-100',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
