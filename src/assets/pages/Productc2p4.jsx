import React from 'react'

import PinProductc2p4 from "../images/pins/pin-c2-04.png"

import { Link } from 'react-router-dom'

const Productc2p4 = () => {
    return (
        <div className="Product">
            <Link to="/Purchase.jsx"><img className="pin-product" src={PinProductc2p4} width="60%"></img></Link>{" "}
        </div>
    )
}

export default Productc2p4
