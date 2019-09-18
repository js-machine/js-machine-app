import React, { memo, useCallback } from 'react';
import { CreateEditDigest } from 'components/CreateEditDigest';
import { useDigestStore } from 'scenes/digests/services/digest.store';
import { History } from 'history';
import { DigestCycle } from 'models';

interface Props {
  history: History;
}

export const NewDigest = memo(({ history }: Props) => {
  const store = useDigestStore();

  const handleCreateClick = useCallback(
    async (digest: DigestCycle) => {
      await store.createDigest(digest);
      history.push('/digests');
    },
    [store, history],
  );

  return <CreateEditDigest onCreate={handleCreateClick} />;
});
