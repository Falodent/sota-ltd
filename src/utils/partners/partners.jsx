import React from 'react'
import P1 from "../../assets/part1.png"
import P2 from "../../assets/part2.png"
import P3 from "../../assets/part3.png"
import P4 from "../../assets/part4.png"
import P5 from "../../assets/part5.png"
import P6 from "../../assets/part6.png"
import P7 from "../../assets/part7.png"
import P8 from "../../assets/part8.png"

const Partners = () => {
  return (
    <div className='services cream-bg'>
        <p className="title headFont">Our Clients & Partners</p>
        <div className="part-img">
            <img src={P1} alt="" loading='lazy'/>
            <img src={P2} alt="" loading='lazy'/>
            <img src={P3} alt="" loading='lazy'/>
            <img src={P4} alt="" loading='lazy'/>
            <img src={P5} alt="" loading='lazy'/>
            <img src={P6} alt="" loading='lazy'/>
            <img src={P7} alt="" loading='lazy'/>
            <img src={P8} alt="" loading='lazy'/>
        </div>
        {/* <div className="part-img">
            
        </div> */}
    </div>
  )
}

export default Partners