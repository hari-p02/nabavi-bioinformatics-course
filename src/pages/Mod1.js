// import { Typography } from '@material-ui/core'
import React from 'react'
import JupyterViewer from "react-jupyter-notebook";
import hw_09_1 from "./hw_09_1.json"; // You need to read the .ipynb file into a JSON Object.
const Mod1 = () => {
  return (
    <div className='module'>
        <h5>Module 1 - Introduction to Bioinformatics</h5>
        <p>Lorem ipsum dolor sit amet. Quo eaque quia aut culpa autem ex expedita nesciunt aut 
          nemo accusamus vel optio expedita et expedita voluptatem! Qui animi enim qui enim dolore 
          quo dolores voluptatem est pariatur quibusdam At vero voluptatum. Est Quis ratione sit 
          illum quasi aut sapiente exercitationem et quidem rerum et quam numquam ea molestiae 
          fugit. Eum Quis unde deleniti nemo est excepturi quod et voluptatem tempora.
          Sed nihil vitae et dolore quidem est natus animi aut vitae velit et natus voluptatem est porro 
          illum eos deleniti consequatur. Aut iusto sapiente aut corporis sint est dolor autem. Qui veniam 
          dolor eos iste dolorem ab commodi odit. Et omnis perspiciatis est sequi quas id voluptas nemo ab 
          voluptatem eius a repellat nobis.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W-Ov2cUaYQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    </div>

        // <JupyterViewer rawIpynb={hw_09_1}/>

    );
}

export default Mod1