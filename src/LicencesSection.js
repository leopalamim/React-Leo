import React from 'react'
import logopoli from './images/logopoli.jpg'
import logobaja from './images/logobaja.png'
import logoanbima from './images/logoanbima.png'

function LicencesSection() {
    return (
        <section class='container-fluid sectioncream' id="lic">
            <h2 class='gray separate center'>Licenças</h2>
            <div class='row center'>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div class='shrink'>
                        <img src={logopoli} />
                        <h3>Escola Politécnica da USP</h3>
                        <p class='gray'>Engenharia Mecânica (2017-Presente)</p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div class='shrink'>
                        <img src={logobaja} />
                        <h3>Equipe Poli de Baja</h3>
                        <p class='gray'>(2017-Presente)</p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="shrink">
                        <img src={logoanbima} />
                        <h3>Certificação de Especialista em Investimentos ANBIMA (CEA)</h3>
                        <p class='gray'>Nº da credencial: U2Y0-C3N7-V1I3</p>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default LicencesSection