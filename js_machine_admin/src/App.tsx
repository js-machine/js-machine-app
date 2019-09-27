import React, { memo } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Shell } from 'shell';
import { Digests } from 'scenes/digests';
import { Users } from 'scenes/users';
import { NewDigest } from 'scenes/new-digest';
import { EditDigest } from 'scenes/edit-digest';

const theme = createMuiTheme();

export const App = memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <Shell>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={'/digests'} />} />
          <Route exact path="/digests" component={Digests} />
          <Route exact path="/digests/:digestId" component={EditDigest} />
          <Route exact path="/new-digest" component={NewDigest} />
          <Route exact path="/users" component={Users} />
          <Redirect to={'/'} />
        </Switch>
      </Shell>
    </ThemeProvider>
  );
});

App.displayName = 'App';
