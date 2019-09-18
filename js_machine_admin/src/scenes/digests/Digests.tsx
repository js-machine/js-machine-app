import React, { useEffect, useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useDigestStore } from './services/digest.store';
import { Digest } from './components/Digest';
import { Dial } from './components/Dial';
import { Actions } from './components/Action';
import { makeStyles } from '@material-ui/core';
import { History } from 'history';
import { DigestCycle } from 'models';

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
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    store.loadDigests();
  }, [store]);

  const handleFabClick = useCallback(() => {
    history.push('/new-digest');
    setIsNew(!isNew);
  }, [isNew, setIsNew, history]);

  const handleEdit = useCallback(
    (digest: DigestCycle) => {
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
        <Digest
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
