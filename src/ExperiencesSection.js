import React from 'react'
import photobaja1 from "./images/photobaja1.png"
import photobaja2 from "./images/photobaja2.PNG"

function ExperiencesSection() {
    return (
        <section class='container-fluid sectionyellow' id="exp">
            <div class='row'>
                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <img src={photobaja1} class='card' />
                </div>
                <div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <h2 class='gray'>Experiências</h2>
                    <h2 class='gray'>_</h2>
                    <p class='gray'>Desde 2017, sou membro da <em class='cream'>Equipe Poli de Baja</em>. Dentro do time, fui chefe de transmissão, diretor de projeto e <em class='cream'>capitão</em>, e hoje atuo como diretor administrativo. Lá, desenvolvi e desenvolvo até hoje habilidades de <em class='cream'>projetos</em> de engenharia, de <em class='cream'>gestão</em> de pessoas e de recursos, habilidades de <em class='cream'>oratória</em> e de <em class='cream'>apresentação</em>. Quando fui capitão, a equipe foi vice-campeã Nacional, chegando a competir em Rochester-NY, na competição Mundial de BAJA SAE.</p>
                    <img src={photobaja2} class='shadowed' />
                </div>
            </div>
        </section> 
    )
}

export default ExperiencesSection