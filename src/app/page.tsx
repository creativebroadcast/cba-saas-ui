import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl text-center px-6">
        <h1 className="text-3xl font-bold tracking-tight mb-3">cba-saas-ui</h1>
        <p className="text-gray-600 mb-6">
          Shared SaaS UI substrate for the CBA portfolio. v0.1.0.
        </p>
        <Link
          href="/playground"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all text-sm"
        >
          Open playground &rarr;
        </Link>
      </div>
    </main>
  )
}
