import React from 'react'
import ButtonWithText from '../layout/ButtonWithText'
import SocmedBar from '../layout/SocmedBar'
import photo from "./hehe.jpg"

const Landing = () => {
    return (
        <div className="landing-content">
            <div className="photo" style={{backgroundImage: "url(" + photo + ")"}}></div>
            <div className="main-container main">
                <h3 style={{fontSize:"28pt", marginBottom:"10px"}}>Hi there! I'm</h3>
                <h1 style={{fontSize:"63pt", fontWeight:700}}>Rifqy Zulkarnaen</h1>
                <p style={{maxWidth: 34.6 +'rem', marginLeft:' auto', paddingTop: 1.5 + "rem", paddingBottom:1.5+"rem" }}>
                    A 20 years old super fun and passionate web developer. Currently i’m pursuing a computer 
                    science degree at Universitas Indonesia. I love UI designing and code some cool stuff.
                </p>
                <a href="/about"><ButtonWithText text="Next" cssClass="my-3"/></a>
                <SocmedBar/>
            </div>
        </div>
    )
}

export default Landing;