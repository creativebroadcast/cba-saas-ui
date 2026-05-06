import * as React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DashboardChrome,
  Footer,
  Input,
  LiveDot,
  SidebarNav,
  StateTable,
  StatisticsCallout,
  StatusBadge,
  TopNav,
} from '@/index'

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

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
        {title}
      </h2>
      {children}
    </section>
  )
}

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
            Days 1-2 extraction from creativebroadcast.io. Tailwind v4, Radix UI, no shadcn, no Base UI.
          </p>
        </header>

        <Section title="Button">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button size="xs">XS</Button>
              <Button size="sm">SM</Button>
              <Button size="default">Default</Button>
              <Button size="lg">LG</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Section>

        <Section title="Input">
          <div className="grid gap-3 max-w-md">
            <Input placeholder="Email address" type="email" />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Invalid input" aria-invalid />
          </div>
        </Section>

        <Section title="Card">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>StreamStudio</CardTitle>
              <CardDescription>
                Live production control room. Manage events, route streams, deliver analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Card content area. Use for body copy, lists, or nested components.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="default" size="sm">
                Open
              </Button>
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </Section>

        <Section title="StatusBadge">
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
        </Section>

        <Section title="StatisticsCallout">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatisticsCallout value="5" label="Modules" />
            <StatisticsCallout value="19" label="Roles" />
            <StatisticsCallout value="<200ms" label="Response" />
            <StatisticsCallout value="Dubai" label="HQ" />
          </div>
        </Section>

        <Section title="StateTable">
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
        </Section>

        <Section title="TopNav">
          <Card className="overflow-hidden p-0">
            <TopNav
              noStickyBlur
              brand={
                <a href="#" className="flex items-center gap-2">
                  <span className="size-6 rounded-md bg-gray-900" aria-hidden />
                  <span className="text-sm font-bold text-gray-900 tracking-tight">
                    cba-saas-ui
                  </span>
                </a>
              }
              links={
                <>
                  <a href="#" className="hover:text-gray-900">Products</a>
                  <a href="#" className="hover:text-gray-900">Plan</a>
                  <a href="#" className="hover:text-gray-900">Agency</a>
                </>
              }
              actions={
                <>
                  <Button variant="ghost" size="sm">Sign in</Button>
                  <Button size="sm">Open Studio</Button>
                </>
              }
            />
          </Card>
        </Section>

        <Section title="Footer">
          <Card className="overflow-hidden p-0">
            <Footer
              brand={
                <span className="text-[12px] font-bold text-gray-900">cba-saas-ui</span>
              }
              copyright="© 2026 Creative Broadcast Agency. Dubai, UAE."
              links={
                <>
                  <a href="#" className="hover:text-gray-600">Agency</a>
                  <a href="#" className="hover:text-gray-600">Studio</a>
                  <a href="#" className="hover:text-gray-600">Viewer Platform</a>
                </>
              }
            />
          </Card>
        </Section>

        <Section title="SidebarNav + DashboardChrome">
          <Card className="overflow-hidden p-0 h-[420px]">
            <DashboardChrome
              className="min-h-0 h-full"
              sidebar={
                <SidebarNav
                  brand={
                    <span className="text-sm font-bold text-gray-900">cba-saas-ui</span>
                  }
                  items={[
                    { key: 'overview', label: 'Overview', active: true, href: '#' },
                    { key: 'events', label: 'Events', href: '#' },
                    { key: 'workspaces', label: 'Workspaces', href: '#' },
                    { key: 'analytics', label: 'Analytics', href: '#' },
                    { key: 'settings', label: 'Settings', href: '#' },
                  ]}
                  footer={
                    <div className="flex items-center gap-2 px-2 py-1">
                      <span className="size-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold">
                        CM
                      </span>
                      <span className="text-[12px] text-gray-700">Chris M.</span>
                    </div>
                  }
                />
              }
              topNav={
                <TopNav
                  noStickyBlur
                  brand={
                    <span className="text-[13px] font-semibold text-gray-800">
                      Overview
                    </span>
                  }
                  actions={
                    <>
                      <StatusBadge variant="live">1 Live</StatusBadge>
                      <Button size="sm">New Event</Button>
                    </>
                  }
                />
              }
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatisticsCallout value="5" label="Live" />
                <StatisticsCallout value="12" label="Ready" />
                <StatisticsCallout value="3" label="Setup" />
                <StatisticsCallout value="248" label="Total" />
              </div>
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
                      <span className="text-[12px] font-mono text-gray-600">
                        {r.viewers}
                      </span>
                    ),
                  },
                ]}
                rows={events}
                rowKey={(r) => r.name}
              />
            </DashboardChrome>
          </Card>
        </Section>
      </div>
    </main>
  )
}
