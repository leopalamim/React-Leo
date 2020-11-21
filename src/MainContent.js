import React from 'react'

import AboutMeSection from "./AboutMeSection"
import LicencesSection from "./LicencesSection"
import ExperiencesSection from "./ExperiencesSection"
import PitchSection from "./PitchSection"
import SoftwaresSection from "./SoftwaresSection"

function MainContent() {
    return (
        <div>
            <AboutMeSection />
            <LicencesSection />
            <ExperiencesSection />
            <PitchSection />
            <SoftwaresSection />
        </div>
    )
}

export default MainContent