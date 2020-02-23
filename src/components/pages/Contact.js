import React from 'react'
import SocmedBar from '../layout/SocmedBar'
import CustomIconButton from '../layout/CustomIconButton'
import outlineEmail from '@iconify/icons-ic/outline-email';


const Contact = () => {
    return (
        <div className="main flex-row-sb">
            <div className="flex-col" style={{maxWidth: "50rem"}}>
                <div className="flex-col" > 
                    <h4 style={{fontSize:"18pt", fontWeight:700}}>Leave a comment!</h4>
                </div>
                
                <div className="flex-col">
                   <h4 style={{fontSize:"18pt", fontWeight:700, marginBottom:"24px"}}>What they say</h4>
                </div>

            </div>
            <div className="main-container my-5" style={{marginRight:"80px", minWidth:"400px"}}>
                <h3 style={{fontSize:"20pt", margin:0}}>FINAL SECTION:</h3>
                <h1 style={{fontSize:"44pt", fontWeight:700}}>Contact</h1>
                <p style={{maxWidth: 25 +'rem', paddingTop: 1 + "rem", paddingBottom:2+"rem" }} className="mb-5">
                    Interested to have a work with me? Lets grab a coffe and have a chit chat soon!
                </p>
                <CustomIconButton icon={outlineEmail} text='Mail me!' css="my-3"/>
                <SocmedBar />
            </div>
        </div>
    )
}

export default Contact;