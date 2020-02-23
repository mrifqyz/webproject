import React from 'react';
import SkillCard from '../layout/SkillCard'
import java from './java.png'
import reactImage from './react.png'
import djangoImage from './django.png'
import htmlCSS from './htmlCss.png'
import photo from './cinoy.png'

const About = () => {
    return (
        <div className="main flex-row-sb about-768">
            <div style={{marginRight:"80px", minWidth:"400px"}}>
                <h3 style={{fontSize:"20pt", margin:0}}>SECTION 1:</h3>
                <h1 style={{fontSize:"44pt", fontWeight:700}}>About me</h1>
                <p style={{maxWidth: 25 +'rem', paddingTop: 1 + "rem", paddingBottom:2+"rem" }}>
                    A page that tells my great adventure from i was born until my great daily life.
                </p>
                 <div className="about-photo" style={{backgroundImage: "url(" + photo + ")"}}></div>
            </div>
            <div className="flex-col" style={{maxWidth: "50rem"}}>
                <div className="flex-col" > 
                    <h4 style={{fontSize:"18pt", fontWeight:700}}>Description</h4>
                    <p style={{paddingTop: 1 + "rem", paddingBottom:2+"rem", maxWidth: "50rem" }}>
                    Born at July 17th 2000. i am a big fan of technologies since i was child. Recently i’m pursuing
                     at Computer Science degree at Universitas Indonesia. I have great interest for 
                     website development and artificial intelligence.
                </p>
                </div>
                
                <div className="flex-col">
                   <h4 style={{fontSize:"18pt", fontWeight:700, marginBottom:"24px"}}>Skills</h4>
                   <div className="flex-row">
                        <SkillCard image={java} percentage="80"/>
                        <SkillCard image={reactImage} percentage="40"/>
                        <SkillCard image={djangoImage} percentage="90"/>
                        <SkillCard image={htmlCSS} percentage="100"/>
                   </div> 
                </div>

            </div>
        </div>
    )
}

export default About;   