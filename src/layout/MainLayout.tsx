import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-blush-glow opacity-90" />
      <div className="pointer-events-none absolute right-[-7rem] top-20 -z-10 h-56 w-56 rounded-full bg-secondary/40 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-[-5rem] left-[-4rem] -z-10 h-48 w-48 rounded-full bg-primary/30 blur-3xl sm:h-64 sm:w-64" />

      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
