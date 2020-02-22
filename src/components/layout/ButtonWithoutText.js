import React from 'react'
import { Icon } from '@iconify/react';
import nextIcon from '@iconify/icons-topcoat/next';
 
const ButtonWithoutText = (props) => {
    const { cssClass, angle, scale } = props
    return (
        <button className={cssClass} style={{transform:"rotate("+angle+"deg) scale(" + scale + ", " + scale + ")"}}>
            <div className="circle-btn">
                <Icon icon={nextIcon} color="#A52422" height="18px" />
            </div>
        </button>
    )
}

ButtonWithoutText.defaultProps = {
    cssClass : "",
    angle:"0",
    scale:"1"
}

export default ButtonWithoutText;