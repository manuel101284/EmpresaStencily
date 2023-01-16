import React from 'react'

import PinProductc1p2 from "../images/pins/pin-c1-02.png"

import { Link } from 'react-router-dom'

const Productc1p2 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc1p2} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc1p2
