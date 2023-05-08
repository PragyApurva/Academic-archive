import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsSettings_24px } from '../IconsSettings_24px/IconsSettings_24px';
import classes from './IconButton_ConfigurationStanda.module.css';
import { IconsSettings_24pxIcon } from './IconsSettings_24pxIcon';

interface Props {
  className?: string;
  swap?: {
    iconsSettings_24px?: ReactNode;
  };
}
/* @figmaId 13:1082 */
export const IconButton_ConfigurationStanda: FC<Props> = memo(function IconButton_ConfigurationStanda(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container}>
        <div className={classes.stateLayer}>
          {props.swap?.iconsSettings_24px || (
            <IconsSettings_24px
              swap={{
                icon: <IconsSettings_24pxIcon className={classes.icon} />,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
});
