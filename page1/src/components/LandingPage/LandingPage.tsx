import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CourseSpecificResourcesIcon } from './CourseSpecificResourcesIcon';
import { ElementCardInfoCardSmallIconPo } from './ElementCardInfoCardSmallIconPo';
import { HeroIcon } from './HeroIcon';
import classes from './LandingPage.module.css';
import { LandingPageIcon } from './LandingPageIcon';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 108:1324 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {

  const navigate = useNavigate();

  const handleUpload= () => {
    navigate("/page2");
  };
  const handleElective= () => {
    navigate("/Page3");
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.hero}>
        <HeroIcon className={classes.icon} />
      </div>
      <div className={classes.body}>
        An online platform for students to access academic resources for their specific courses, connect with peers, and
        access course statistics.
      </div>
      <div className={classes.title}>Academic Resource Archive</div>
      <div className={classes.elementCardInfoCardSmallIconPo}>
        <div className={classes.icon2}>
          <ElementCardInfoCardSmallIconPo className={classes.icon3} />
        </div>
        <button className={classes.home} onClick={handleElective}>
        <div className={classes.title2}>
          <div className={classes.textBlock}>  Electives Recommendations</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        </button>
      </div>
      <div className={classes.body2}>Recommend useful electives that align with the interest/goals of student</div>
      <div className={classes.body3}>
        Resources such as previous course examination papers and valuable citations during the course such as non
        copyrighted books
      </div>
      <button className={classes.home} onClick={handleUpload}>
      <div className={classes.courseSpecificResources}>
        <div className={classes.icon4}>
          <CourseSpecificResourcesIcon className={classes.icon5} />
        </div>
        <div className={classes.title3}>Course-specific resources</div>
      </div>
      </button>
      <div className={classes.icon6}>
        <LandingPageIcon className={classes.icon7} />
      </div>
      <div className={classes.title4}>
        <div className={classes.textBlock3}>Peer discussion panel</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.body4}>
        Peers Discussion panel to get insights and help from the seniors of the course
      </div>
    </div>
  );
});
