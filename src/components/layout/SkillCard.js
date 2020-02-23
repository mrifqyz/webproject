import React from 'react'

const SkillCard = (props) => {
	const { image, percentage } = props;
    return (
    	<div className="flex-col-center mr-3">
    		<div className="skill-cardbox">
    			<img src={image} style={{height:"auto", width:"120px"}}/>
    		</div>
    		<p style={{paddingTop: 1 + "rem", paddingBottom:2+"rem" }}>
    			{percentage} %
    		</p>

    	</div>
        )
}

SkillCard.defaultProps = {
    image:"",
    percentage:"0"
}

export default SkillCard;