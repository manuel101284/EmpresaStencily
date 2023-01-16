import React from 'react'

import PinProductc2p1 from "../images/pins/pin-c2-01.png"

import { Link } from 'react-router-dom'

const Productc2p1 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc2p1} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc2p1
