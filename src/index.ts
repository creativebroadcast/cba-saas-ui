// Public API for cba-saas-ui v0.1.0.
// Consumers import from this barrel: `import { Button, Card, StateTable } from 'cba-saas-ui'`.

// Utilities
export { cn } from './lib/utils'

// UI primitives
export { Button, buttonVariants, type ButtonProps } from './components/ui/button'
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './components/ui/card'
export { Input, type InputProps } from './components/ui/input'

// Status / state
export {
  StatusBadge,
  LiveDot,
  type StatusBadgeProps,
} from './components/ui/status-badge'
export {
  StatisticsCallout,
  type StatisticsCalloutProps,
} from './components/ui/statistics-callout'
export {
  StateTable,
  type StateTableColumn,
  type StateTableProps,
} from './components/ui/state-table'

// Layout primitives
export { Footer, type FooterProps } from './components/ui/footer'
export { TopNav, type TopNavProps } from './components/ui/top-nav'
export {
  SidebarNav,
  type SidebarNavItem,
  type SidebarNavProps,
} from './components/ui/sidebar-nav'
export {
  DashboardChrome,
  type DashboardChromeProps,
} from './components/ui/dashboard-chrome'
