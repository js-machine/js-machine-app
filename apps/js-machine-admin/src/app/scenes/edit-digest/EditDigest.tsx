import React, { memo, useCallback, useEffect, useState } from 'react';
import { CreateEditDigest } from '@js-machine-app/admin/components/CreateEditDigest';
import { useDigestStore } from '@js-machine-app/admin/services/digest.store';
import { History } from 'history';
import { Digest } from '@js-machine-app/models';
import { match } from 'react-router';

interface Props {
  history: History;
  match: match<{ digestId: string }>;
}

export const EditDigest = memo(
  ({
    history,
    match: {
      params: { digestId },
    },
  }: Props) => {
    const store = useDigestStore();
    const [editDigest, setEditDigest] = useState<Digest>();

    useEffect(() => {
      store.findDigestById(digestId).then(digest => setEditDigest(digest));
    }, [store, digestId]);

    const handleCreateClick = useCallback(
      async (digest: Digest) => {
        await store.saveDigest(digest);
        history.push('/digests');
      },
      [store, history],
    );

    return (
      <CreateEditDigest
        digest={editDigest}
        onCreate={handleCreateClick}
        submitText="save"
      />
    );
  },
);
