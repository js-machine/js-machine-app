import React, {
    useState,
    ChangeEvent,
    useCallback,
    memo,
    useMemo,
    useEffect,
  } from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import Button from '@material-ui/core/Button';
  import Box from '@material-ui/core/Box';
  import TextField from '@material-ui/core/TextField';
  import { Event } from '@js-machine-app/models';
  import DateFnsUtils from '@date-io/date-fns';
  import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import Hidden from '@material-ui/core/Hidden';
  
  const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 275,
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
  }));
  
  interface Props {
    event?: Event;
    submitText?: string;
    onCreate: (event: Event) => void;
  }
  
  const emptyEvent: Event = {
    link: '',
    date: new Date().toString(),
    description: '',
    id: 'new-event-id',
    title: '',
  };
  
  export const CreateEditEvent = memo(function CreateEditEvent({
    event = emptyEvent,
    onCreate,
    submitText,
  }: Props) {
    const classes = useStyles();
  
    const [editEvent, setEditEvent] = useState(event);
    const [previewExpanded, setPreviewExpanded] = useState(false);
  
    useEffect(() => {
      setEditEvent(event);
    }, [event]);
  
    const handleTitleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setEditEvent({
          ...editEvent,
          title: event.target.value,
        });
      },
      [editEvent],
    );
  
    const handleDescriptionChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setEditEvent({
          ...editEvent,
          description: event.target.value,
        });
      },
      [editEvent],
    );
  
    const handleDateChange = useCallback(
      (date: Date | null) => {
        setEditEvent({
          ...editEvent,
          date: (date as Date).toString(),
        });
      },
      [editEvent],
    );
  
    const handleMobileDateChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setEditEvent({
          ...editEvent,
          date: new Date(event.target.value).toString(),
        });
      },
      [editEvent],
    );
  
    const handleLinkChange = useCallback(
      async (event: ChangeEvent<HTMLInputElement>) => {
        setEditEvent({
          ...editEvent,
          link: event.target.value,
        });
      },
      [editEvent],
    );
  
    const handlePreviewClick = useCallback(() => {
      setPreviewExpanded(!previewExpanded);
    }, [previewExpanded, setPreviewExpanded]);
  
    const handleCreateClick = useCallback(() => {
      onCreate(editEvent);
    }, [onCreate, editEvent]);
  
    const createDisabled = useMemo(
      () =>
        !editEvent.title ||
        !editEvent.description ||
        !editEvent.link ||
        !editEvent.date,
      [editEvent],
    );
  
    const previewDisabled = useMemo(() => !editEvent.link, [editEvent]);
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Hidden smDown>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                label="Date"
                value={editEvent.date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Hidden>
          <Hidden mdUp>
            <Box>
              <TextField
                label="Date"
                type="date"
                margin="dense"
                value={
                    editEvent.date &&
                    new Date(editEvent.date).toISOString().slice(0, 10)
                }
                onChange={handleMobileDateChange}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Hidden>
          <Box>
            <TextField
              label="Title"
              value={editEvent.title}
              onChange={handleTitleChange}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              label="Description"
              value={editEvent.description}
              onChange={handleDescriptionChange}
              multiline
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              label="Link"
              value={editEvent.link}
              onChange={handleLinkChange}
              multiline
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleCreateClick}
            color="primary"
            disabled={createDisabled}
          >
            {submitText || 'Create'}
          </Button>
        </CardActions>
      </Card>
    );
  });
  