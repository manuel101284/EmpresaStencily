import React from 'react'

import PinProductc3p1 from "../images/pins/pin-c3-01.png"

import { Link } from 'react-router-dom'

const Productc3p1 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc3p1} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc3p1
