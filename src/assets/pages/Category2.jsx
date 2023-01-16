import React from 'react'

import logo01 from "../images/image-logo.png"
import imgInfo from "../images/image-bidding.png"
import imgProduct from "../images/image-product.jpg"

import c2pin1 from "../images/pins/pin-c2-01.png"
import c2pin2 from "../images/pins/pin-c2-02.png"
import c2pin3 from "../images/pins/pin-c2-03.png"
import c2pin4 from "../images/pins/pin-c2-04.png"

import { Link } from "react-router-dom"

const Category2 = () => {
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
                <Link to="/Productc2p1.jsx"><img className="product" id="pin-01" src={c2pin1} width="60%"></img></Link>{" "}
                <Link to="/Productc2p2.jsx"><img className="product" id="pin-02" src={c2pin2} width="60%"></img></Link>{" "}
                <Link to="/Productc2p3.jsx"><img className="product" id="pin-03" src={c2pin3} width="60%"></img></Link>{" "}
                <Link to="/Productc2p4.jsx"><img className="product" id="pin-04" src={c2pin4} width="60%"></img></Link>{" "}
            </div>
        </section>
    )
}

export default Category2