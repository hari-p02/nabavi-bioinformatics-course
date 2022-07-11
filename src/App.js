import React from 'react'
import Welcome from './pages/Welcome.js'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Lessons from './pages/Lessons.js'
import Mod1 from './pages/Mod1.js'
import { Button } from '@material-ui/core'
import cat from './images/cat.jpg'
import pylogo from './images/pylogo.png'

const courses = [
  {
      module_num: 1,
      title: "Introduction to Bioinformatics",
      imgpath: cat,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",
  },
  {
      module_num: 2,
      title: "Introduction to Programming",
      imgpath: pylogo,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 3,
      title: "Geneome & Seqeunce Alignment",
      imgpath: cat,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 4,
      title: "Gene & Protein Expression",
      imgpath: cat,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 5,
      title: "Geneomic Variations",
      imgpath: cat,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 6,
      title: "Evolution",
      imgpath: cat,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 7,
      title: "Machine Learning Applications",
      imgpath: cat,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",
    },
  {
      module_num: 8,
      title: "Applications of Bioinformatics",
      imgpath: cat,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",
     },
  {
      module_num: 9,
      title: "Ethics",
      imgpath: cat,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",
    },
]
const App = () => {
  return (
    // <Lessons />
    <BrowserRouter>
    {/* <SideBar /> */}
    <div class="navigation">
      <nav>
        <ul class="nav-type">
          <li><Link to="/"><a href=" " class="active">Home</a></Link></li>
          <li><Link to="/"><a href=" " class="active1">About</a></Link></li>
          <li><Link to="/lessons"><a href=" " class="active2">Lessons</a></Link></li>
          <li><Link to="/"><a href=" " class="active3">Support</a></Link></li>
          <div class="line"></div>
        </ul>
      </nav>
    </div>
    {/* <nav>
      <h1>Nabavi Bioinformatics</h1>
      <Button variant='text'><Link to="/" style={{textDecoration: 'none'}}>Home</Link></Button>
      <Button variant='text'><Link to="/lessons" style={{textDecoration: 'none'}}>Lessons</Link></Button>
    </nav> */}
    <Routes>
      <Route path="/" element={<Welcome courses={courses} />} />
      {/* <Route path="/about/*" element={<About />} /> */}
      <Route path="/lessons" element={<Lessons courses={courses}/>} />
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