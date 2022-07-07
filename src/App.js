import React from 'react'
import Welcome from './pages/Welcome.js'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Lessons from './pages/Lessons.js'
import Mod1 from './pages/Mod1.js'
import { Button } from '@material-ui/core'
const App = () => {
  return (
    // <Lessons />
    <BrowserRouter>
    <nav>
      <h1>Nabavi Bioinformatics</h1>
      <Button variant='text'><Link to="/" style={{textDecoration: 'none'}}>Home</Link></Button>
      <Button variant='text'><Link to="/lessons" style={{textDecoration: 'none'}}>Lessons</Link></Button>
      {/* <Link to="/products">Products</Link> */}
    </nav>
    <Routes>
      <Route path="/" element={<Welcome />} />
      {/* <Route path="/about/*" element={<About />} /> */}
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/mod1" element={<Mod1 />} />
      <Route path="/test" element={(
        <div>
          <h2>Test page</h2>
        </div>
      )} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;