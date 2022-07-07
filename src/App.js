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
      title: "INTRODUCTION TO BIOINFORMATICS",
      imgpath: introbio,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
  {
      module_num: 2,
      title: "INTRODUCTION TO PROGRAMMING",
      imgpath: pylogo,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
  {
      module_num: 3,
      title: "GENOME & SEQUENCE ALIGNMENT",
      imgpath: geneome,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
  {
      module_num: 4,
      title: "GENE & PROTEIN EXPRESSION",
      imgpath: protein,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
  {
      module_num: 5,
      title: "GENOMIC VARIATIONS",
      imgpath: gene_var,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
  {
      module_num: 6,
      title: "EVOLUTION",
      imgpath: evolution,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
  {
      module_num: 7,
      title: "Machine Learning Applications",
      imgpath: ml,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
  {
      module_num: 8,
      title: "APPLICATIONS OF BIOINFORMATICS",
      imgpath: foren,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
  {
      module_num: 9,
      title: "ETHICS",
      imgpath: ethics,
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Volutpat sed cras ornare arcu dui vivamus. Eget nunc lobortis mattis aliquam. Aliquam etiam erat velit scelerisque in dictum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Lacus luctus accumsan tortor posuere ac. Consequat semper viverra nam libero justo laoreet sit amet cursus. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nec feugiat nisl pretium fusce id velit ut tortor pretium.",
  },
]
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