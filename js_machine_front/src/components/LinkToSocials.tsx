import React from 'react';
import VkIcon from '../images/vk-icon.png';
import TelegramIcon from '../images/telegram-icon.png';
import '../styles/linkToSocials.css';

const sectionStyle = {
    height: '100vh',
    position: 'absolute' as 'absolute',
    justifyContent: 'center',
    display: 'flex',
    flexFlow: 'column nowrap',
    right: '10vh',
};

const LinkToSocials: React.FC = () => {
    return (
        <div style={ sectionStyle }>
            <a href="https://t.me/js_machine_channel" target="_blank"><img className ="imgStyle" src={TelegramIcon} alt="telegram-icon"/></a>
            <a href="https://vk.com/jsmachine" target="_blank"><img className ="imgStyle" src={VkIcon} alt="vk-icon"/></a>
        </div>
    );
};

export default LinkToSocials;
