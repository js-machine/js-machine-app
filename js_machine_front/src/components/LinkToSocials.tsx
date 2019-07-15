import React, { memo } from 'react';
import VkIcon from 'images/vk-icon.png';
import TelegramIcon from 'images/telegram-icon.png';
import 'styles/linkToSocials.css';

const sectionStyle = {
    height: '100vh',
    position: 'absolute' as 'absolute',
    justifyContent: 'center',
    display: 'flex',
    flexFlow: 'column nowrap',
    right: '10vh',
};

export const LinkToSocials: React.FC = memo(() => {
    return (
        <div style={ sectionStyle }>
            <a href="https://t.me/js_machine_channel" target="_blank" rel="noopener noreferrer"><img className ="link-to-socials__img" src={TelegramIcon} alt="telegram-icon"/></a>
            <a href="https://vk.com/jsmachine" target="_blank" rel="noopener noreferrer"><img className ="link-to-socials__img" src={VkIcon} alt="vk-icon"/></a>
        </div>
    );
});
