import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

interface FeedbackDialogProps {
  open: boolean;
  anchorEl: any;
  setClose: () => any;
  onSend: (text: string) => void;
  children: any;
}

export function FeedbackDialog(props: FeedbackDialogProps): JSX.Element {
  const [feedbackText, setFeedbackText] = useState<string>('');

  return (
    <Popover
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.setClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
      <form noValidate autoComplete="off">
        <div className="feedback-dialog__wrapper">
          {props.children}
          <div className="feedback-dialog__header">Оставь свой фидбек!</div>
          <div className="feedback-dialog__content">
            Ваше мнение поможет в развитии комьюнити. Любые идеи и пожелания приветсвуются)
          </div>
          <TextField
            required
            id="outlined-required"
            className="feedback-dialog__input"
            placeholder="Ваше мнение"
            margin="dense"
            variant="outlined"
            multiline
            rows="5"
            onChange={(event) => setFeedbackText(event.target.value)} />
          <Button disabled={!feedbackText} className="feedback-dialog__btn"
                  onClick={() => props.onSend(feedbackText)}>Отправить</Button>
        </div>
      </form>
    </Popover>
  );
}
