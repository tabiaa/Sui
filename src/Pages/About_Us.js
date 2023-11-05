import React from 'react'
import "../Pages/index.css"
import Navbar from '../components/Navbar'
import ssgc from "../images/ssgc.png"
import Footer from '../components/Footer'
const About_Us = () => {
  return (
    <div> <center>
    <Navbar/>

<section >
<center> <div class="container" id="cont">
<p><a href="#"><img src={ssgc}  ></img><br></br></a> ABOUT US <br></br></p>
</div>
</center>
</section>

<section id="section2">
<div class="container">
</div>
</section>
</center>
<section>
    <div class="container" ><p style={{fontSize:"18px"}}><h2>Profile</h2><br></br><hr></hr>Sui Southern Gas Company (SSGC) is Pakistan’s leading integrated public-limited large-scale natural gas utility Company. The Government of Pakistan directly and indirectly owns the majority of the shareholdings of the Company. SSGC has been engaged in the business of transmission and distribution of natural gas besides installation of high-pressure transmission and low-pressure distribution systems in the franchise provinces of Sindh and Balochistan since 1954. Being a downstream company, the Company buys gas in bulk from more than twenty-four local and foreign Exploration and Production Companies (E&P) companies, for supply across its franchise areas.<br></br>SSGC’s transmission system comprises over 4,143 KM of high-pressure pipeline ranging from 12″ to 42″ in diameter. The distribution activities covering over 160 cities and towns and 3,800 villages in Sindh and Balochistan are managed through its regional offices. About 343,664 million cubic feet per day (MMCFD) gas was sold in FY 2020-21 to around 3.21 million industrial, commercial and domestic consumers through a distribution network of 48,254 kms. SSGC operates its own meter manufacturing plant (MMP), the only one of its kind in the entire South East Asia, established under license from M/s. Itron, France. The Plant manufactures G-4 and G-1.6 meters for local consumption along with some exports to international buyers. During FY 2020-21, MMP produced 222,390 G-1.6 and 230,624 G-4 gas meters. SSGC ensures top class customer service through a right blend of technology and human touch and operates 24 Customer Facilitation Centers (CFCs) in Sindh and Balochistan to cater to customer’s gas-related queries.<br></br><br></br>SSGC-LPG (Pvt.) Ltd. is SSGC’s wholly-owned fully integrated subsidiary Company engaged in the marketing and distribution of LPG across Pakistan. The subsidiary company has been in operation since 2012.<br></br><br/>SSGC is managed by an autonomous Board of Directors comprising of 11 members. The Managing Director/ Chief Executive is appointed by the Government of Pakistan and has been delegated with such powers as vested by the Board of Directors necessary to effectively conduct the business of the company.<br></br><br/><br/><hr></hr></p></div>
</section>
<Footer/>
    </div>
  )
}

export default About_Us