import React, { useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useDigestStore } from '@js-machine-app/admin/services/digest.store';
import { DigestCard } from './components/Digest';
import { Dial } from './components/Dial';
import { Actions } from './components/Action';
import { makeStyles } from '@material-ui/core';
import { History } from 'history';
import { Digest } from '@js-machine-app/models';

const useStyles = makeStyles(theme => ({
  digest: {
    marginBottom: theme.spacing(2),
  },
}));

interface Props {
  history: History;
}

export const Digests = observer(({ history }: Props) => {
  const classes = useStyles();
  const store = useDigestStore();

  useEffect(() => {
    store.loadDigests();
  }, [store]);

  const handleFabClick = useCallback(() => {
    history.push('/new-digest');
  }, [history]);

  const handleEdit = useCallback(
    (digest: Digest) => {
      history.push(`/digests/${digest.id}`);
    },
    [history],
  );

  const actions: Actions = {
    edit: handleEdit,
    hide: store.hideDigest,
    show: store.showDigest,
    upload: store.uploadDigest,
    download: store.downloadDigest,
    delete: store.deleteDigest,
  };

  return (
    <>
      <Dial onClick={handleFabClick} />
      {store.sortedDigests.map(digest => (
        <DigestCard
          className={classes.digest}
          key={digest.id}
          digest={digest}
          actions={actions}
        />
      ))}
    </>
  );
});

Digests.displayName = 'Digests';
