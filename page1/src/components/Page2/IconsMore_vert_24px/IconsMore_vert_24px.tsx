import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsMore_vert_24px.module.css';
import { IconsMore_vert_24pxIcon } from './IconsMore_vert_24pxIcon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 13:1092 */
export const IconsMore_vert_24px: FC<Props> = memo(function IconsMore_vert_24px(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconsMore_vert_24pxIcon className={classes.icon2} />}</div>
    </div>
  );
});
