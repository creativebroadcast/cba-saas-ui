import * as React from 'react'
import { cn } from '../../lib/utils'

export interface StateTableColumn<T> {
  key: string
  label: React.ReactNode
  /** CSS grid track size (e.g. "2fr", "1.2fr", "0.7fr"). Defaults to "1fr". */
  width?: string
  align?: 'left' | 'right'
  render: (row: T, index: number) => React.ReactNode
}

export interface StateTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  columns: StateTableColumn<T>[]
  rows: T[]
  rowKey: (row: T, index: number) => string | number
  onRowClick?: (row: T, index: number) => void
  /** Empty-state node when rows.length === 0. */
  empty?: React.ReactNode
}

export function StateTable<T>({
  columns,
  rows,
  rowKey,
  onRowClick,
  empty,
  className,
  ...props
}: StateTableProps<T>) {
  const gridTemplateColumns = columns.map((c) => c.width ?? '1fr').join(' ')

  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 overflow-hidden bg-white',
        className
      )}
      {...props}
    >
      <div
        className="grid gap-3 px-5 py-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100 bg-gray-50/50"
        style={{ gridTemplateColumns }}
      >
        {columns.map((c) => (
          <div
            key={c.key}
            className={c.align === 'right' ? 'text-right' : ''}
          >
            {c.label}
          </div>
        ))}
      </div>

      {rows.length === 0 ? (
        <div className="px-5 py-10 text-center text-sm text-gray-400">
          {empty ?? 'No rows'}
        </div>
      ) : (
        rows.map((row, i) => (
          <div
            key={rowKey(row, i)}
            className={cn(
              'grid gap-3 px-5 py-2.5 text-sm items-center transition-colors',
              onRowClick && 'hover:bg-gray-50/80 cursor-pointer',
              i < rows.length - 1 && 'border-b border-gray-50'
            )}
            style={{ gridTemplateColumns }}
            onClick={onRowClick ? () => onRowClick(row, i) : undefined}
            role={onRowClick ? 'button' : undefined}
          >
            {columns.map((c) => (
              <div
                key={c.key}
                className={c.align === 'right' ? 'text-right' : ''}
              >
                {c.render(row, i)}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  )
}
