import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon';
import { Arrow1Icon2 } from './Arrow1Icon2';
import { IconArrowRightCircledIcon } from './IconArrowRightCircledIcon';
import { IconArrowRightCircledIcon2 } from './IconArrowRightCircledIcon2';
import { IconArrowRightCircledIcon3 } from './IconArrowRightCircledIcon3';
import { IconCancelIcon } from './IconCancelIcon';
import { IconCancelIcon2 } from './IconCancelIcon2';
import { IconCancelIcon3 } from './IconCancelIcon3';
import { IconCheckIcon } from './IconCheckIcon';
import { IconPinIcon } from './IconPinIcon';
import { IconSearchEngineIcon } from './IconSearchEngineIcon';
import { IconSearchEngineIcon2 } from './IconSearchEngineIcon2';
import { IconSearchEngineIcon3 } from './IconSearchEngineIcon3';
import { IconSearchEngineIcon4 } from './IconSearchEngineIcon4';
import { IconSearchEngineIcon5 } from './IconSearchEngineIcon5';
import { IconSendIcon } from './IconSendIcon';
import { IconSquareIcon } from './IconSquareIcon';
import classes from './Page3.module.css';
import { Rectangle4Icon } from './Rectangle4Icon';
import { Undraw_mobile_login_ikmvElemen } from './Undraw_mobile_login_ikmvElemen';
import LiveSearch from './liveSearch1';

interface Props {
  className?: string;
}
const goals = [
  { id: "1", name: "Quantitative Analyst" },
  { id: "2", name: "MBA" },
  { id: "3", name: "Software development" },
  { id: "4", name: "Data science" },
  { id: "5", name: "Research" },
];
// const Page2: FC<Props> = (props): JSX.Element => {
//   const [results, setResults] = useState<{ id: string; name: string }[]>();
//   const [show,setShow] = useState<Boolean>(false)
//   // const [show,setShow]=useState(false)
//   const [selectedProfile, setSelectedProfile] = useState<{
//     id: string;
//     name: string;
//   }>();
export const Page3: FC<Props> = memo(function Page3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.mask}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.body}>Based on your goals and previous courses </div>
      {/* <div className={classes.rectangle4}>
        <Rectangle4Icon className={classes.icon} />
      </div> */}
      <div className={classes.textBlockSectionLargeTitleBody}>
        <div className={classes.body2}>Secect the goals for elective recommendations </div>
        <div className={classes.title}>Goals</div>
        
        <div className={classes.IconSearchEngine}>
          <IconSearchEngineIcon className={classes.icon2} />
        </div>
        <div className={classes.rectangle12}>
        {/* <LiveSearch
          results={results}
          value={selectedProfile?.name}
          renderItem={(item) => <p>{item.name}</p>}
          onChange={handleChange}
          onSelect={(item) => setSelectedProfile(item)}
        /> */}
        </div>
        {/* <div className={classes.goals2}>Quantitative Analyst</div>
        <div className={classes.IconSearchEngine2}>
          <IconSearchEngineIcon2 className={classes.icon3} />
        </div>
        <div className={classes.goals3}>MBA</div>
        <div className={classes.IconSearchEngine3}>
          <IconSearchEngineIcon3 className={classes.icon4} />
        </div>
        <div className={classes.goals4}>Software development</div>
        <div className={classes.IconSearchEngine4}>
          <IconSearchEngineIcon4 className={classes.icon5} />
        </div>
        <div className={classes.goals5}>Data science</div>
        <div className={classes.IconSearchEngine5}>
          <IconSearchEngineIcon5 className={classes.icon6} />
        </div> */}
        <div className={classes.title2}>Courses we recommend</div>
      </div>
      <div className={classes.arrow1}>
        <Arrow1Icon className={classes.icon7} />
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.textBlockSectionLargeTitleBody2}>
        <div className={classes.body3}></div>
        {/* <div className={classes.title3}>Course you have taken till now</div>
        <div className={classes.rectangle2}></div>
        <div className={classes.mA515FoundationsOfDataScience}>MA-515 Foundations of Data Science </div>
        <div className={classes.rectangle22}></div>
        <div className={classes.cS101DiscreteMathematicalStruc}>CS101 - Discrete Mathematical Structure</div>
        <div className={classes.rectangle23}></div>
        <div className={classes.cS201DataStructures}>CS201 - Data Structures</div> */}

        <div className={classes.IconCancel}>
          <IconCancelIcon className={classes.icon8} />
        </div>
        <div className={classes.IconCancel2}>
          <IconCancelIcon2 className={classes.icon9} />
        </div>
        <div className={classes.IconCancel3}>
          <IconCancelIcon3 className={classes.icon10} />
        </div>
      </div>
      <div className={classes.IconSquare}>
        <IconSquareIcon className={classes.icon11} />
      </div>
      <div className={classes.arrow12}>
        <Arrow1Icon2 className={classes.icon12} />
      </div>
      <div className={classes.IconSend}>
        <IconSendIcon className={classes.icon13} />
      </div>
      <div className={classes.goals6}>Add your goal</div>
      <div className={classes.IconPin}>
        <IconPinIcon className={classes.icon14} />
      </div>
      <div className={classes.IconCheck}>
        <IconCheckIcon className={classes.icon15} />
      </div>
      <div className={classes.line3}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.cS503MachineLearning}>CS503 - Machine learning</div>
      <div className={classes.IconArrowRightCircled}>
        <IconArrowRightCircledIcon className={classes.icon16} />
      </div>
      <div className={classes.rectangle25}></div>
      <div className={classes.cS712TopicsInAI}>CS712 Topics in AI</div>
      <div className={classes.rectangle26}></div>
      <div className={classes.cS533ReinforcementLearning}>CS533 - Reinforcement learning</div>

      <div className={classes.undraw_mobile_login_ikmvElemen}>
        <Undraw_mobile_login_ikmvElemen className={classes.icon17} />
      </div>
      <div className={classes.IconArrowRightCircled2}>
        <IconArrowRightCircledIcon2 className={classes.icon18} />
      </div>
      <div className={classes.IconArrowRightCircled3}>
        <IconArrowRightCircledIcon3 className={classes.icon19} />
      </div>
    </div>
  );
});
