import React from 'react';
import VkIcon from '../images/vk-icon.png';
import TelegramIcon from '../images/telegram-icon.png';
import InstaIcon from '../images/instagram-icon.png';
import '../styles/socialLinks.css';
import '../styles/socialLinksMedia.css';

const sectionStyle = {
    height: '100%',
    alignItems: 'center',
    display: 'flex',
};

export const SocialLinks: React.FC = () => {
    return (
        <div style={ sectionStyle }>
            <div className="social-links">
                <a href="https://t.me/js_machine_channel" target="_blank" rel="noopener noreferrer"><img className ="social-links__img" src={TelegramIcon} alt="telegram-icon"/></a>
                <a href="https://vk.com/jsmachine" target="_blank" rel="noopener noreferrer"><img className ="social-links__img" src={VkIcon} alt="vk-icon"/></a>
                <a href="https://www.instagram.com/js.machine" target="_blank" rel="noopener noreferrer"><img className ="social-links__img" src={InstaIcon} alt="inst-icon"/></a>
            </div>
        </div>
    );
};
