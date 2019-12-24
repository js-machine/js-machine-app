import { createMuiTheme, Theme } from '@material-ui/core/styles';

const _theme = createMuiTheme();

export const theme: Theme = {
  ..._theme,
  mixins: {
    ..._theme.mixins,
    toolbar: {
      minHeight: _theme.spacing(10),
      [_theme.breakpoints.up('sm')]: {
        minHeight: _theme.spacing(13),
      },
      [_theme.breakpoints.up('md')]: {
        minHeight: _theme.spacing(16),
      },
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
      colorPrimary: {
        // transparent
        backgroundColor: '#fff0',
      },
    },
    MuiToolbar: {
      gutters: {
        // TODO: revert paddingLeft value after NY   
        paddingLeft: _theme.spacing(2),
        [_theme.breakpoints.up('sm')]: {
          paddingLeft: _theme.spacing(2),
          paddingRight: _theme.spacing(4),
        },
        [_theme.breakpoints.up('md')]: {
          paddingLeft: _theme.spacing(2),
          paddingRight: _theme.spacing(8),
        },
      },
      regular: {
        minHeight: _theme.spacing(10),
        [_theme.breakpoints.up('sm')]: {
          minHeight: _theme.spacing(13),
        },
        [_theme.breakpoints.up('md')]: {
          minHeight: _theme.spacing(16),
        },
      },
    },
  },
};
