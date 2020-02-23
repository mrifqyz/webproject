import React from 'react'
import { Icon } from '@iconify/react';

const CustomIconButton = (props) => {
	const { text, icon, cssClass } = props;

	return (
		<div>
			<button className={cssClass}>
            	<div className="circle-btn mr-1">
                	<Icon icon={icon} color="#A52422" height="18px" />
            	</div>
    
            	<p className="ml-2" style={{color:"#F8F9FF", fontSize:"18pt"}}>{text}</p>
    
        	</button>
		</div>
		)
}

CustomIconButton.defaultProps = {
	cssClass:"",
	icon:null,
	text:"default"
}

export default CustomIconButton;