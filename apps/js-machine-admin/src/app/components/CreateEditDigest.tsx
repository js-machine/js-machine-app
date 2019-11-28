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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { UploadButton } from '@js-machine-app/admin/components/UploadButton';
import { Markdown } from '@js-machine-app/admin/components/Markdown';
import { Digest } from '@js-machine-app/models';
import { readMdFromFile } from '@js-machine-app/admin/utils/readMdFromFile';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

interface Props {
  digest?: Digest;
  submitText?: string;
  onCreate: (digest: Digest) => void;
}

const emptyDigest: Digest = {
  content: '',
  date: new Date().toString(),
  description: '',
  id: 'new-digest-id',
  title: '',
  visible: true,
};

export const CreateEditDigest = memo(
  ({ digest = emptyDigest, onCreate, submitText }: Props) => {
    const classes = useStyles();

    const [editDigest, setEditDigest] = useState(digest);
    const [previewExpanded, setPreviewExpanded] = useState(false);

    useEffect(() => {
      setEditDigest(digest);
    }, [digest]);

    const handleTitleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setEditDigest({
          ...editDigest,
          title: event.target.value,
        });
      },
      [editDigest],
    );

    const handleDescriptionChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setEditDigest({
          ...editDigest,
          description: event.target.value,
        });
      },
      [editDigest],
    );

    const handleVisibleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setEditDigest({
          ...editDigest,
          visible: event.target.checked,
        });
      },
      [editDigest],
    );

    const handleDateChange = useCallback(
      (date: Date | null) => {
        setEditDigest({
          ...editDigest,
          date: (date as Date).toString(),
        });
      },
      [editDigest],
    );

    const handleMobileDateChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setEditDigest({
          ...editDigest,
          date: new Date(event.target.value).toString(),
        });
      },
      [editDigest],
    );

    const handleUpload = useCallback(
      async (file: File) => {
        setEditDigest({
          ...editDigest,
          content: await readMdFromFile(file),
        });
      },
      [editDigest],
    );

    const handlePreviewClick = useCallback(() => {
      setPreviewExpanded(!previewExpanded);
    }, [previewExpanded, setPreviewExpanded]);

    const handleCreateClick = useCallback(() => {
      onCreate(editDigest);
    }, [onCreate, editDigest]);

    const createDisabled = useMemo(
      () =>
        !editDigest.title ||
        !editDigest.description ||
        !editDigest.content ||
        !editDigest.date,
      [editDigest],
    );

    const previewDisabled = useMemo(() => !editDigest.content, [editDigest]);

    return (
      <Card className={classes.card}>
        <CardContent>
          <Box>
            <FormControl>
              <FormControlLabel
                control={
                  <Switch
                    checked={editDigest.visible}
                    onChange={handleVisibleChange}
                    color="primary"
                  />
                }
                label="Visibility"
              />
            </FormControl>
          </Box>
          <Hidden smDown>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                label="Date"
                value={editDigest.date}
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
                  editDigest.date &&
                  new Date(editDigest.date).toISOString().slice(0, 10)
                }
                onChange={handleMobileDateChange}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Hidden>
          <Box>
            <TextField
              label="Title"
              value={editDigest.title}
              onChange={handleTitleChange}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              label="Description"
              value={editDigest.description}
              onChange={handleDescriptionChange}
              multiline
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <FormControl margin="dense">
              <UploadButton onUpload={handleUpload}>
                <Button component="span">
                  Upload
                  <CloudUploadIcon
                    className={classes.rightIcon}
                    color="primary"
                  />
                </Button>
              </UploadButton>
            </FormControl>
            <FormControl margin="dense">
              <Button
                onClick={handlePreviewClick}
                component="span"
                disabled={previewDisabled}
              >
                Preview MD
              </Button>
            </FormControl>
          </Box>
          <Collapse in={previewExpanded} timeout="auto" unmountOnExit>
            <Markdown markdown={editDigest.content} />
          </Collapse>
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
  },
);
