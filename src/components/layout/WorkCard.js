import React from 'react'

const WorkCard = (props) => {
    const { category, headline, image } = props;    
    return (
        <div className="workCard">
            <p style={{marginBottom:"2rem", fontSize:"14pt"}}>{category}</p>
            <img style={{maxHeight:'150px', width:'auto'}} className='my-4' src="" alt=""/>
            <h3 style={{fontSize:"18pt", fontWeight:"700"}} className="my-4">{headline}</h3>
            <a style={{alignItems:'center', justifyContent:'center', display:'flex', color:'#FF7E7C'}}href="/">view work</a>
        </div>
    )
}

WorkCard.defaultProps = {
    category:"Category",
    headline:"Insert your project name here",
    image:""
}

export default WorkCard;
