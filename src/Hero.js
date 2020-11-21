import React from 'react'
import {Link as OtherPageLink} from "react-router-dom"
import {Link as ScrollLink} from "react-scroll"

function Hero() {
    return (
        <div className="hero">
            <header>
                <h2 class='leoCorner'>Leo</h2>
                <div class='menu'>
                    <ScrollLink to="aboutme" class='navlink' smooth={true} duration={1000}>Sobre</ScrollLink>
                    <ScrollLink to='lic' class='navlink' smooth={true} duration={1000}>Licenças</ScrollLink>
                    <ScrollLink to='exp' class='navlink' smooth={true} duration={1000}>Experiências</ScrollLink>
                    <ScrollLink to='pitch' class='navlink' smooth={true} duration={1000}>Pitch</ScrollLink>
                    <ScrollLink to='soft' class='navlink' smooth={true} duration={1000}>Softwares</ScrollLink>
                    <OtherPageLink to="/contact" class="navlink" smooth={true} duration={1000}>Contato</OtherPageLink>
                </div>
            </header>
            <div class='frontpage'>
                <div>
                    <h1>Leonardo Palamim Cardozo</h1>
                    <h1>_</h1>
                    <p>Você tem a <em>visão</em> de um projeto excepcional. Eu vou transformá-la em <em>realidade</em>. </p>
                </div>
            </div>

        </div>
    )
}

export default Hero