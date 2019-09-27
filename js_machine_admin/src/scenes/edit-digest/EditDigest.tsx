import React, { memo, useCallback, useEffect, useState } from 'react';
import { CreateEditDigest } from 'components/CreateEditDigest';
import { useDigestStore } from 'scenes/digests/services/digest.store';
import { History } from 'history';
import { DigestCycle } from 'models';
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
    const [editDigest, setEditDigest] = useState<DigestCycle>();

    useEffect(() => {
      store
        .findDigestById(digestId)
        .then(digest => {
          console.log(digest);
          return digest;
        })
        .then(digest => setEditDigest(digest));
    }, [store, digestId]);

    const handleCreateClick = useCallback(
      async (digest: DigestCycle) => {
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
