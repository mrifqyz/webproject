import React from 'react'
import { Icon } from '@iconify/react';
import nextIcon from '@iconify/icons-topcoat/next';
 
const ButtonWithText = (props) => {
    const { cssClass, text } = props
    return (
        <button className={cssClass}>
            <div className="circle-btn mr-1">
                <Icon icon={nextIcon} color="#A52422" height="18px" />
            </div>
    
            <p className="ml-2" style={{color:"#F8F9FF", fontSize:"18pt"}}>{text}</p>
    
        </button>
    )
}

ButtonWithText.defaultProps = {
    cssClass : "",
    text:"Button"
}

export default ButtonWithText;