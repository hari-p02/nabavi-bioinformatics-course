import React from 'react'
import Welcome from './pages/Welcome.js'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Lessons from './pages/Lessons.js'
import Mod1 from './pages/Mod1.js'
import { Button } from '@material-ui/core'
import introbio from './images/introbio.jpg'
import ethics from './images/ethics.jpg'
import ml from './images/ml.jpg'
import protein from './images/protein.jpg'
import pylogo from './images/pylogo.png'
import geneome from './images/geneome.jpg'
import gene_var from './images/gene_var.jpg'
import foren from './images/foren.jpg'
import evolution from './images/evolution.jpg'

const courses = [
  {
      module_num: 1,
      title: "Introduction to Bioinformatics",
      imgpath: introbio,
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
      imgpath: geneome,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 4,
      title: "Gene & Protein Expression",
      imgpath: protein,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 5,
      title: "Geneomic Variations",
      imgpath: gene_var,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 6,
      title: "Evolution",
      imgpath: evolution,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",},
  {
      module_num: 7,
      title: "Machine Learning Applications",
      imgpath: ml,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",
    },
  {
      module_num: 8,
      title: "Applications of Bioinformatics",
      imgpath: foren,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",
     },
  {
      module_num: 9,
      title: "Ethics",
      imgpath: ethics,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore ipsam quisquam! Cum incidunt praesentium blanditiis fugiat, iste ipsam facilis!",
    },
]
const App = () => {
  return (
    // <Lessons />
    <BrowserRouter>
    {/* <SideBar /> */}
    <nav>
      <h1>Nabavi Bioinformatics</h1>
      <Button variant='text'><Link to="/" style={{textDecoration: 'none'}}>Home</Link></Button>
      <Button variant='text'><Link to="/lessons" style={{textDecoration: 'none'}}>Lessons</Link></Button>
    </nav>
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