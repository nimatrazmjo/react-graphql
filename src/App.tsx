import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='bg-zinc-400'>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Location</Link></li>
            <li><Link to="/dog">Dogs</Link></li>
          </ul>
        </nav>
      </header>

      {/* Render the child routes at this position */}
      <Outlet />

      <footer>Footer content here</footer>
    </div>
  )
}

export default App
