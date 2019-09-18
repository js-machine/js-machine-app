import React, { useCallback, MouseEvent } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { observer } from 'mobx-react-lite';
import { DigestCycle } from 'models';
import { UploadButton } from 'components/UploadButton';

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface Props {
  digest: DigestCycle;
  actions: Actions;
}

export interface Actions {
  edit: (digest: DigestCycle) => void;
  hide: (digest: DigestCycle) => void;
  show: (digest: DigestCycle) => void;
  upload: (digest: DigestCycle, file: File) => void;
  download: (digest: DigestCycle) => void;
  delete: (digest: DigestCycle) => void;
}

export const Action = observer(({ digest, actions }: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl],
  );

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleEdit = useCallback(() => {
    actions.edit(digest);
    handleMenuClose();
  }, [actions, digest, handleMenuClose]);

  const handleHide = useCallback(() => {
    actions.hide(digest);
    handleMenuClose();
  }, [actions, digest, handleMenuClose]);

  const handleShow = useCallback(() => {
    actions.show(digest);
    handleMenuClose();
  }, [actions, digest, handleMenuClose]);

  const handleUpload = useCallback(
    (file: File) => {
      actions.upload(digest, file);
      handleMenuClose();
    },
    [actions, digest, handleMenuClose],
  );

  const handleDownload = useCallback(() => {
    actions.download(digest);
    handleMenuClose();
  }, [actions, digest, handleMenuClose]);

  const handleDelete = useCallback(() => {
    actions.delete(digest);
    handleMenuClose();
  }, [actions, digest, handleMenuClose]);

  return (
    <>
      <IconButton aria-label="settings" onClick={handleMenuClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleEdit}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <Typography variant="inherit">Edit</Typography>
        </MenuItem>
        {digest.visible ? (
          <MenuItem onClick={handleHide}>
            <ListItemIcon>
              <VisibilityOffIcon />
            </ListItemIcon>
            <Typography variant="inherit">Hide</Typography>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleShow}>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <Typography variant="inherit">Show</Typography>
          </MenuItem>
        )}
        <UploadButton onUpload={handleUpload}>
          <MenuItem>
            <ListItemIcon>
              <CloudUploadIcon />
            </ListItemIcon>
            <Typography variant="inherit">Upload MD</Typography>
          </MenuItem>
        </UploadButton>
        <MenuItem onClick={handleDownload}>
          <ListItemIcon>
            <CloudDownloadIcon />
          </ListItemIcon>
          <Typography variant="inherit">Download MD</Typography>
        </MenuItem>
        <Divider className={classes.divider} />
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <Typography variant="inherit">Delete</Typography>
        </MenuItem>
      </Menu>
    </>
  );
});

Action.displayName = 'Action';
