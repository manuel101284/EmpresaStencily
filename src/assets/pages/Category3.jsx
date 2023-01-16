import React from 'react'

import logo01 from "../images/image-logo.png"
import imgInfo from "../images/image-bidding.png"
import imgProduct from "../images/image-product.jpg"

import c3pin1 from "../images/pins/pin-c3-01.png"
import c3pin2 from "../images/pins/pin-c3-02.png"
import c3pin3 from "../images/pins/pin-c3-03.png"
import c3pin4 from "../images/pins/pin-c3-04.png"

import { Link } from "react-router-dom"

const Category3 = () => {
    return (
        <section className="category01">
            <div className="container01-01">
                <div className="container02-02">
                    <p id="name-enterprise1">STENCILY</p>
                    <img id="img-logo1" src={logo01} width="100%"></img>
                </div>

                <div className="container03-03">
                    {/* <p id="bidding">OFERTAS</p> */}
                    <img id="img-bidding1" src={imgInfo} width="80%"></img>
                </div>
            </div>

            <div className="container04-04" id="products">
                <Link to="/Productc3p1.jsx"><img className="product" id="pin-01" src={c3pin1} width="60%"></img></Link>{" "}
                <Link to="/Productc3p2.jsx"><img className="product" id="pin-02" src={c3pin2} width="60%"></img></Link>{" "}
                <Link to="/Productc3p3.jsx"><img className="product" id="pin-03" src={c3pin3} width="60%"></img></Link>{" "}
                <Link to="/Productc3p4.jsx"><img className="product" id="pin-04" src={c3pin4} width="60%"></img></Link>{" "}
            </div>
        </section>
    )
}

export default Category3