import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import App from '../App'
import Location from '../components/Location'
import Dogs from '../components/Dogs'


// Main Router component
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Location />} />
          <Route path="dog" element={<Dogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}