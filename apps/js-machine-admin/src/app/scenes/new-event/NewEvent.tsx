import React, { memo, useCallback } from 'react';
import { CreateEditEvent } from '@js-machine-app/admin/components/CreateEditEvent';
import { useEventStore } from '@js-machine-app/admin/services/event.store';
import { History } from 'history';
import { Event } from '@js-machine-app/models';

interface Props {
  history: History;
}

export const NewEvent = memo(function NewEvent({ history }: Props) {
  const store = useEventStore();

  const handleCreateClick = useCallback(
    async (event: Event) => {
      await store.createEvent(event);
      history.push('/events');
    },
    [store, history],
  );

  return <CreateEditEvent onCreate={handleCreateClick} />;
});
