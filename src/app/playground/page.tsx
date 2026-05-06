import {
  StatusBadge,
  LiveDot,
} from '@/components/ui/status-badge'
import { StatisticsCallout } from '@/components/ui/statistics-callout'
import { StateTable } from '@/components/ui/state-table'

interface Event {
  name: string
  workspace: string
  status: 'live' | 'ready' | 'setup' | 'ended'
  viewers: string
}

const events: Event[] = [
  { name: 'DefEar 24/7 Music Panel', workspace: 'DefEar', status: 'live', viewers: '342' },
  { name: 'GCC Technology Panel Discussion', workspace: 'Logicom', status: 'ready', viewers: '-' },
  { name: 'Cybersecurity Workshop', workspace: 'Oregon Systems', status: 'setup', viewers: '-' },
  { name: 'AI in Media Panel', workspace: 'Dubai Future', status: 'ended', viewers: '2,156' },
]

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <header>
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
            cba-saas-ui playground
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            v0.1.0 component preview
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Day 1 extraction from creativebroadcast.io. Three primitives: status badge, statistics
            callout, state table. Tailwind v4, no shadcn, no Base UI.
          </p>
        </header>

        <section>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            StatusBadge
          </h2>
          <div className="flex flex-wrap gap-3 items-center">
            <StatusBadge variant="live">Live</StatusBadge>
            <StatusBadge variant="ready">Ready</StatusBadge>
            <StatusBadge variant="setup">Setup</StatusBadge>
            <StatusBadge variant="ended">Ended</StatusBadge>
            <StatusBadge variant="info">Info</StatusBadge>
            <StatusBadge variant="neutral">Neutral</StatusBadge>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
            <LiveDot />
            <span>Standalone LiveDot</span>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            StatisticsCallout
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatisticsCallout value="5" label="Modules" />
            <StatisticsCallout value="19" label="Roles" />
            <StatisticsCallout value="<200ms" label="Response" />
            <StatisticsCallout value="Dubai" label="HQ" />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            StateTable
          </h2>
          <StateTable<Event>
            columns={[
              {
                key: 'name',
                label: 'Event',
                width: '2fr',
                render: (r) => (
                  <span className="font-medium text-gray-800 text-[13px] truncate">
                    {r.name}
                  </span>
                ),
              },
              {
                key: 'workspace',
                label: 'Workspace',
                width: '1.2fr',
                render: (r) => (
                  <span className="text-gray-600 text-[12px]">{r.workspace}</span>
                ),
              },
              {
                key: 'status',
                label: 'Status',
                width: '0.8fr',
                render: (r) => (
                  <StatusBadge variant={r.status}>
                    {r.status[0].toUpperCase() + r.status.slice(1)}
                  </StatusBadge>
                ),
              },
              {
                key: 'viewers',
                label: 'Viewers',
                width: '0.7fr',
                render: (r) => (
                  <span className="text-[12px] font-mono text-gray-600">{r.viewers}</span>
                ),
              },
            ]}
            rows={events}
            rowKey={(r) => r.name}
          />
        </section>
      </div>
    </main>
  )
}
