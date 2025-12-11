import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Homepage from './pages/Homepage'
import Contactspage from './pages/Contactspage'
import './App.css'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/contacts' element={<Contactspage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}