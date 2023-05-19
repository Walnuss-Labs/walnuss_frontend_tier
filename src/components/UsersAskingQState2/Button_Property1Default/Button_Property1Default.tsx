import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_Property1Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 125:856 */
export const Button_Property1Default: FC<Props> = memo(function Button_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.post}>Post</div>
    </div>
  );
});
