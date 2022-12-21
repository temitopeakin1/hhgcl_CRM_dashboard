import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Ticketpage from './pages/TicketPage'
import Navbar from './components/Navbar'
import CategoriesContext from './context'
import {useState} from 'react'


const App = () => {
  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }
  return (
    <div className="app">
      <CategoriesContext.Provider value={value}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/ticket" element={<Ticketpage />} />
          <Route path="/ticket/:id" element={<Ticketpage editMode={true} />} />
        </Routes>
      </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  )
}

export default App;
