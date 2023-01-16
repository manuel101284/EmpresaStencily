import React from 'react'

import PinProductc3p2 from "../images/pins/pin-c3-02.png"

import { Link } from 'react-router-dom'

const Productc3p2 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc3p2} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc3p2
