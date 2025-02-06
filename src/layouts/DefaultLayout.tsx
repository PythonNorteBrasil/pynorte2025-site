import React from 'react';
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export function DefaultLayout() {
  return (
    <div className="min-h-screen bg-theme-cream">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
