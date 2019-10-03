import React, { useState } from 'react';
import VkIcon from '../images/vk-icon.png';
import TelegramIcon from '../images/telegram-icon.png';
import InstaIcon from '../images/instagram-icon.png';
import '../styles/socialLinks.css';
import '../styles/socialLinksMedia.css';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { FeedbackDialog } from './FeedbackDialog';
import { sendFeedback } from '../services/main.api';
import LinearProgress from '@material-ui/core/LinearProgress';
import { observer } from 'mobx-react-lite';
import { useStore } from 'stores';

const sectionStyle = {
  height: '100%',
  alignItems: 'center',
  display: 'flex',
};

interface SocialLinksProps {
  onSendFeedbackSuccess: () => void;
  onSendFeedbackError: () => void;
}

export const SocialLinks = observer((props: SocialLinksProps) => {
  const { authStore } = useStore();
  const [isFeedbackOpened, setIsFeedbackOpened] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
    setIsFeedbackOpened(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsFeedbackOpened(false);
  };

  const handleSend = (text: string) => {
    setIsLoading(true);
    sendFeedback(text)
      .then(props.onSendFeedbackSuccess)
      .catch(props.onSendFeedbackError)
      .finally(() => {
        setIsLoading(false);
        setIsFeedbackOpened(false);
      });
  };

  return (
    <div style={sectionStyle}>
      <div className="social-links">
        <a
          href="https://t.me/js_machine_channel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-links__img"
            src={TelegramIcon}
            alt="telegram-icon"
          />
        </a>
        <a
          href="https://vk.com/jsmachine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-links__img" src={VkIcon} alt="vk-icon" />
        </a>
        <a
          href="https://www.instagram.com/js.machine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-links__img" src={InstaIcon} alt="inst-icon" />
        </a>
        {authStore.user && (
          <>
            <ChatBubbleIcon
              className="social-links__img"
              onClick={event => handleClick(event as any)}
            />
            <FeedbackDialog
              onSend={handleSend}
              anchorEl={anchorEl}
              open={isFeedbackOpened}
              setClose={handleClose}
            >
              <div style={{ padding: '10px' }}>
                {isLoading && <LinearProgress variant="query" />}
              </div>
            </FeedbackDialog>
          </>
        )}
      </div>
    </div>
  );
});
