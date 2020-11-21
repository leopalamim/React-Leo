import React from 'react'
import photoleo from "./images/photoleo.png"

function AboutMeSection() {
    return (
        <section class='container-fluid' id="aboutme">
            <div class='row'>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h2>Sobre mim</h2>
                    <h2>_</h2>
                    <p>Meu nome é Leonardo Palamim Cardozo. Estudante de Engenharia Mecânica com 22 anos de idade, sou um jovem em início de carreira, com muitos <em>sonhos</em>. Aprecio experiências de <em>aprendizado</em> e troca de conhecimentos, bem como desafios que me fazem crescer pessoal e profissionalmente. Com muito <em>sentimento de equipe</em>, meu sonho é fazer parte de um time de pessoas que possuem o mesmo <em>mindset</em> para correr atrás dos sonhos em conjunto.</p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <img src={photoleo} class='card' />
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection