import React from 'react'

import PinProductc1p4 from "../images/pins/pin-c1-04.png"

import { Link } from 'react-router-dom'

const Productc1p4 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc1p4} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc1p4
