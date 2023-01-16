import React from 'react'

import { Link } from 'react-router-dom'

const Summary = () => {
    return (
        <div>
            <h1 className="summary-01">RESUMEN DE LA COMPRA</h1>

            <textarea className="description-purchase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </textarea>

            <Link to="/"><p>COMPRAR</p></Link>
        </div>
    )
}

export default Summary
