import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import Customers from './pages/Customers'
import Employee from './pages/Employee'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inventory from './pages/Inventory'
import Orders from './pages/Orders'


function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/dashboard/employee" element={<Employee/>}/>
            <Route path='/dashboard/inventory' element={<Inventory/>}/>
            <Route path='/dashboard/orders' element={<Orders/>}/>
            <Route path='/dashboard/customers' element={<Customers/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
