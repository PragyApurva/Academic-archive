import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Footer.module.css';
import { IconSocialInstagramCopy2Icon } from './IconSocialInstagramCopy2Icon';
import { IconSocialInstagramCopy3Icon } from './IconSocialInstagramCopy3Icon';
import { IconSocialInstagramCopy4Icon } from './IconSocialInstagramCopy4Icon';
import { IconSocialInstagramCopyIcon } from './IconSocialInstagramCopyIcon';
import { IconSocialInstagramIcon } from './IconSocialInstagramIcon';

interface Props {
  className?: string;
}
/* @figmaId 119:3568 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes.unnamed}>@2023</div>
      <div className={classes.home}>Home</div>
      <div className={classes.about}>About</div>
      <div className={classes.contact}>Contact</div>
      <div className={classes.iconSocialInstagram}>
        <IconSocialInstagramIcon className={classes.icon} />
      </div>
      <div className={classes.iconSocialInstagramCopy}>
        <IconSocialInstagramCopyIcon className={classes.icon2} />
      </div>
      <div className={classes.iconSocialInstagramCopy2}>
        <IconSocialInstagramCopy2Icon className={classes.icon3} />
      </div>
      <div className={classes.iconSocialInstagramCopy3}>
        <IconSocialInstagramCopy3Icon className={classes.icon4} />
      </div>
      <div className={classes.iconSocialInstagramCopy4}>
        <IconSocialInstagramCopy4Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.logoLandie}>
        <div className={classes.landie}>Landing</div>
      </div>
    </div>
  );
});
