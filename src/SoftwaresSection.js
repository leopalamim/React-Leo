import React from 'react'

import logoexcel from "./images/logoexcel.png"
import logophotoshop from "./images/logophotoshop.png"
import logoillustrator from "./images/logoillustrator.png"
import logosolidworks from "./images/logosolidworks.png"

function SoftwaresSection() {
    return (
        <section class='container-fluid sectioncream' id="soft">
            <h2 class='gray separate center'>Softwares</h2>
            <div class='row'>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div class='shrink'>
                        <img src={logoexcel} />
                    </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div class='shrink'>
                        <img src={logophotoshop} />
                    </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div class='shrink'>
                        <img src={logoillustrator} />
                    </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div class='shrink'>
                        <img src={logosolidworks} />
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default SoftwaresSection