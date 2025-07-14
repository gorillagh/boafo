import React from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'

export default function RootLayout() {
  const location = useLocation()
  const hideFooterOn = ['/onboarding', '/login', '/dashboard']

  const showFooter = !hideFooterOn.some((p) =>
    location.pathname.startsWith(p)
  )

  return (
    <div>
      <ScrollRestoration />
      <Outlet />
      {showFooter && <Footer />}
    </div>
  )
}
