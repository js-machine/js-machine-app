import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { DigestCycle } from 'models';
import { DigestHeader } from './DigestHeader';
import { DigestBody } from './DigestBody';
import { Actions } from './Action';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  card: {
    minWidth: 270,
  },
}));

interface Props {
  className?: string;
  digest: DigestCycle;
  actions: Actions;
}

export const Digest = observer(({ className, digest, actions }: Props) => {
  const classes = useStyles();

  return (
    <Card className={clsx(className, classes.card)}>
      <DigestHeader digest={digest} actions={actions} />
      <DigestBody digest={digest} />
    </Card>
  );
});

Digest.displayName = 'Digest';
