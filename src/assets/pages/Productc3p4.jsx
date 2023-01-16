import React from 'react'

import PinProductc3p4 from "../images/pins/pin-c3-04.png"

import { Link } from 'react-router-dom'

const Productc3p4 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc3p4} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc3p4
