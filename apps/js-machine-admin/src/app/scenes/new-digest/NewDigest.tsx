import React, { memo, useCallback } from 'react';
import { CreateEditDigest } from '@js-machine-app/admin/components/CreateEditDigest';
import { useDigestStore } from '@js-machine-app/admin/services/digest.store';
import { History } from 'history';
import { Digest } from '@js-machine-app/models';

interface Props {
  history: History;
}

export const NewDigest = memo(({ history }: Props) => {
  const store = useDigestStore();

  const handleCreateClick = useCallback(
    async (digest: Digest) => {
      await store.createDigest(digest);
      history.push('/digests');
    },
    [store, history],
  );

  return <CreateEditDigest onCreate={handleCreateClick} />;
});
