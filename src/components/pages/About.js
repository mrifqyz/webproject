import React from 'react';
import ButtonWithText from '../layout/ButtonWithText'

const About = () => {
    return (
        <div className="main flex-row-sb">
            <div style={{marginRight:"80px", minWidth:"400px"}}>
                <h3 style={{fontSize:"20pt", margin:0}}>SECTION 1:</h3>
                <h1 style={{fontSize:"44pt", fontWeight:700}}>About Me</h1>
                <p style={{maxWidth: 25 +'rem', paddingTop: 1 + "rem", paddingBottom:2+"rem" }}>
                    A page that tells my great adventure from i was born until my great daily life.
                </p>
                <ButtonWithText text="Next" css="my-3"/>
            </div>
        </div>
    )
}

export default About;