import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Landing } from './pages/Landing'
import { CodigoConduta } from './pages/CodigoConduta'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/cdc" element={<CodigoConduta />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
