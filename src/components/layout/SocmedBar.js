import React from 'react'
import { Icon } from '@iconify/react';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import dribbbleOutlined from '@iconify/icons-ant-design/dribbble-outlined';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import twitterOutlined from '@iconify/icons-ant-design/twitter-outlined';



const SocmedBar = () => {
    return (
        <div className="flex-row-sb mt-5 pt-5">
            <a className="mx-2" href="https://www.instagram.com/mrifqyz17/">
                <Icon icon={instagramOutlined} color="#A63C3B" height="35px"/>
            </a>
            <a className="mx-2" href="https://dribbble.com/mrifqyz17">
                <Icon icon={dribbbleOutlined} color="#A63C3B" height="35px"/>
            </a>
            <a className="mx-2" href="https://www.linkedin.com/in/mohamad-rifqy-zulkarnaen-210b4216b/">
                <Icon icon={linkedinFilled}  color="#A63C3B" height="35px"/>
            </a>
            <a className="mx-2" href="https://twitter.com/mrifqyz17">
                <Icon icon={twitterOutlined} color="#A63C3B" height="35px"/>
            </a>
        </div>
    )
}

export default SocmedBar;