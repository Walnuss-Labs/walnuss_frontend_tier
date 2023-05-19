import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_Property1Variant2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 125:858 */
export const Button_Property1Variant2: FC<Props> = memo(function Button_Property1Variant2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.post}>Post</div>
    </div>
  );
});
