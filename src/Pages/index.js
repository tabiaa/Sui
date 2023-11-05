import React from 'react'
import "./index.css"
import ssgc from "../images/ssgc.png"
import writing from "../images/writing.png"
import fire from "../images/fire.png"
import Navbar from '../components/Navbar'
import Divs from "../components/Divs.js"
import Footer from '../components/Footer.js'
const Index = () => {
  const circlesData = [
    { backgroundColor: '#339ECC', borderColor: '#339ECC', imageSrc: writing },
    { backgroundColor: 'blue', borderColor: 'navy', imageSrc: writing },
    { backgroundColor: 'red', borderColor: 'darkred', imageSrc: writing },
  ];
  return (
    <div>
        <center>
           <Navbar/>
<section >
    <center> <div class="container" id="cont">
<p><a href="#"><img src={ssgc}  ></img><br></br></a> SUI SOUTHERN GAS LIMITED<br></br><a href="#"> Service with a smile.</a></p>
</div>
</center>
</section>

<section id="section2">
  <div class="container">
  </div>
</section>
<section>
  <Divs/>
</section>
<Footer/>
</center>

    </div>
  )
}

export default Index