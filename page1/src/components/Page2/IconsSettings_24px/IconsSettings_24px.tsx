import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsSettings_24px.module.css';
import { IconsSettings_24pxIcon } from './IconsSettings_24pxIcon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 13:1086 */
export const IconsSettings_24px: FC<Props> = memo(function IconsSettings_24px(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconsSettings_24pxIcon className={classes.icon2} />}</div>
    </div>
  );
});
