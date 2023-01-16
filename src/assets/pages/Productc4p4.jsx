import React from 'react'

import PinProductc4p4 from "../images/pins/pin-c4-04.png"

import { Link } from 'react-router-dom'

const Productc4p4 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc4p4} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc4p4
