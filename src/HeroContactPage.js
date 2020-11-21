import React from 'react'
import {Link} from "react-router-dom"

function HeroContactPage() {
    return (
        <div className="hero">
            <header>
                <h2 class='leoCorner'>Leo</h2>
                <div class='menu'>
                    <Link to="/" class="navlink">Home</Link>
                </div>
            </header>
            <div class='frontpage'>
                <div>
                    <h1>Leonardo Palamim Cardozo</h1>
                    <h1>_</h1>
                    <h3>Fale comigo!</h3>
                </div>
            </div>

        </div>
    )
}

export default HeroContactPage