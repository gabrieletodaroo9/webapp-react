import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Homepage from './pages/Homepage'
import Contactspage from './pages/Contactspage'
import Moviepage from './pages/Moviepage'
import SimpleLayout from './layouts/SimpleLayout'
import ErrorPage from './pages/ErrorPage'
import './App.css'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/contacts' element={<Contactspage />} />
            <Route path='/:id' element={<Moviepage />} />
          </Route>

          <Route element={<SimpleLayout />}>
            <Route path='/error' element={<ErrorPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}