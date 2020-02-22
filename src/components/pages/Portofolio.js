import React from 'react'
import ButtonWithoutText from "../layout/ButtonWithText"
import WorkCard from "../layout/WorkCard"

const Portofolio = () => {
    return (
        <div className="main flex-row-sb">
            <div style={{marginRight:"80px", minWidth:"400px"}}>
                <h3 style={{fontSize:"20pt", margin:0}}>SECTION 1:</h3>
                <h1 style={{fontSize:"44pt", fontWeight:700}}>Portofolio</h1>
                <p style={{maxWidth: 25 +'rem', paddingTop: 1 + "rem", paddingBottom:2+"rem" }}>
                    Some recollection of my works during my journey to become a professional web developer.
                </p>

                <div className="flex-row-sb" style={{width:"130px"}}>
                    <ButtonWithoutText angle="180" scale="1.25"/>
                    <ButtonWithoutText scale="1.25"/>
                </div>
            </div>

            <div className="workCard-container flex-row" style={{position:"relative"}}>
                <WorkCard category="UI/UX Design" headline="PMB Fasilkom UI 2019 Website"/>
                <WorkCard category="Web Development" headline="TOSKA Kemas UI 2020"/>
                <WorkCard category="Web Development" headline="Rifqy Zulkarnaen's Website"/>
            </div>
        </div>
    )
}

export default Portofolio;