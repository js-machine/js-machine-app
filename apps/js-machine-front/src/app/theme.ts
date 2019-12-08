import { createMuiTheme, Theme } from '@material-ui/core/styles';

const _theme = createMuiTheme();

export const theme: Theme = {
  ..._theme,
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
        paddingLeft: _theme.spacing(4),
        [_theme.breakpoints.up('sm')]: {
          paddingLeft: _theme.spacing(6),
          paddingRight: _theme.spacing(4),
        },
        [_theme.breakpoints.up('md')]: {
          paddingLeft: _theme.spacing(8),
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
