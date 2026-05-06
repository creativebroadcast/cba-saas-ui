import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SidebarNavItem {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  href?: string
  active?: boolean
  /** Custom click handler (alternative to href). */
  onSelect?: () => void
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Items rendered as the primary nav list. */
  items: SidebarNavItem[]
  /** Brand or logo block at the top of the sidebar. */
  brand?: React.ReactNode
  /** Footer content (typically user avatar / settings). */
  footer?: React.ReactNode
  /** Render link items as <a> when href is set; otherwise <button>. Override by passing renderItem. */
  renderItem?: (item: SidebarNavItem, defaultElement: React.ReactNode) => React.ReactNode
}

export function SidebarNav({
  items,
  brand,
  footer,
  renderItem,
  className,
  ...props
}: SidebarNavProps) {
  return (
    <aside
      data-slot="sidebar-nav"
      className={cn(
        'flex flex-col w-60 shrink-0 border-r border-gray-100 bg-white',
        className
      )}
      {...props}
    >
      {brand ? (
        <div className="px-5 py-4 border-b border-gray-100">{brand}</div>
      ) : null}

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="flex flex-col gap-0.5">
          {items.map((item) => {
            const itemClass = cn(
              'group flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors',
              item.active
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            )

            const inner = (
              <>
                {item.icon ? (
                  <span
                    className={cn(
                      'flex size-4 items-center justify-center [&_svg]:size-4',
                      item.active ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-700'
                    )}
                  >
                    {item.icon}
                  </span>
                ) : null}
                <span className="truncate">{item.label}</span>
              </>
            )

            const defaultElement = item.href ? (
              <a href={item.href} className={itemClass}>
                {inner}
              </a>
            ) : (
              <button
                type="button"
                onClick={item.onSelect}
                className={cn(itemClass, 'w-full text-left')}
              >
                {inner}
              </button>
            )

            return (
              <li key={item.key}>
                {renderItem ? renderItem(item, defaultElement) : defaultElement}
              </li>
            )
          })}
        </ul>
      </nav>

      {footer ? (
        <div className="px-3 py-3 border-t border-gray-100">{footer}</div>
      ) : null}
    </aside>
  )
}
