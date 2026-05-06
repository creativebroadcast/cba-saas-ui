import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-gray-300/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
  {
    variants: {
      variant: {
        default:
          'bg-gray-900 text-white hover:bg-gray-800',
        outline:
          'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
        secondary:
          'bg-gray-100 text-gray-900 hover:bg-gray-200',
        ghost:
          'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
        destructive:
          'bg-red-50 text-red-700 hover:bg-red-100 focus-visible:ring-red-200',
        link:
          'text-gray-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 gap-1.5 px-3.5',
        xs: 'h-6 gap-1 rounded-md px-2 text-xs [&_svg:not([class*=size-])]:size-3',
        sm: 'h-7 gap-1 rounded-md px-2.5 text-[0.8rem] [&_svg:not([class*=size-])]:size-3.5',
        lg: 'h-10 gap-1.5 px-4',
        icon: 'size-9',
        'icon-xs': 'size-6 rounded-md [&_svg:not([class*=size-])]:size-3',
        'icon-sm': 'size-7 rounded-md',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { buttonVariants }
