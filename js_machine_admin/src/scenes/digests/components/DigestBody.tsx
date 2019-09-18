import React, { useCallback, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { observer } from 'mobx-react-lite';
import { DigestCycle } from 'models';
import { Markdown } from 'components/Markdown';

interface Props {
  digest: DigestCycle;
}

export const DigestBody = observer(({ digest }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  return (
    <>
      <CardActionArea onClick={handleExpandClick}>
        <CardContent>
          <Typography variant="body2" component="p">
            {digest.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Markdown markdown={digest.content} />
        </CardContent>
      </Collapse>
    </>
  );
});

DigestBody.displayName = 'DigestBody';
