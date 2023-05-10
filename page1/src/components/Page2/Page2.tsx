import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ElementCardInfoCardSmallIconPo2 } from './ElementCardInfoCardSmallIconPo2';
import { ElementCardInfoCardSmallIconPo3 } from './ElementCardInfoCardSmallIconPo3';
import { IconSearchEngineIcon2 } from './IconSearchEngineIcon2';
import classes from './Page2.module.css';
import LiveSearch from './liveSearch';
import Select,{ SingleValue } from 'react-select';

interface Props {
  className?: string;
}
const courses = [
  { id: "1", name: "Allie Grater" },
  { id: "2", name: "Aida Bugg" },
  { id: "3", name: "Gabrielle" },
  { id: "4", name: "Grace" },
  { id: "5", name: "Hannah" },
  { id: "6", name: "Heather" },
  { id: "7", name: "John Doe" },
  { id: "8", name: "Anne Teak" },
  { id: "9", name: "Audie Yose" },
  { id: "10", name: "Addie Minstra" },
  { id: "11", name: "Anne Ortha" },
];

const arr = [{
  "id": 2,
  "service_name": "benny"
  },{
  "id": 5,
  "service_name": "ready"
  },{
  "id": 6,
  "service_name": "chitty"
  },{
  "id": 9,
  "service_name": "robby"
  }]
// const six = arr.find(i => i.id === 6)
// console.log(six.service_name)
const Page2: FC<Props> = (props): JSX.Element => {
  const [results, setResults] = useState<{ id: string; name: string }[]>();
  const [selectedProfile, setSelectedProfile] = useState<{
    id: string;
    name: string;
  }>();

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = courses.filter((courses) =>
    courses.name.toLowerCase().startsWith(target.value)
    );
    setResults(filteredValue);
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.elementCardInfoCardMediumIconT}>
      </div>
      <div className={classes.mask}></div>
      <div className={classes.elementCardInfoCardMediumIconT2}>
        <div className={classes.elementCardInfoCardSmallIconPo2}>
          <div className={classes.icon6}>
            <ElementCardInfoCardSmallIconPo2 className={classes.icon7} />
          </div>
          <div className={classes.title2}>Real Analysis</div>
        </div>
        <div className={classes.courseInstructorDrMPrabhakarSe}>
          <div className={classes.textBlock4}>course instructor: Dr M Prabhakar</div>
          <div className={classes.textBlock5}>session: 2021-I</div>
          <div className={classes.textBlock6}>3-1-0-5-3</div>
        </div>
      </div>
      <div className={classes.elementCardInfoCardMediumIconT3}>
        <div className={classes.body3}>
          <div className={classes.textBlock7}>course instructor: Dr M Prabhakar</div>
          <div className={classes.textBlock8}>session: 2022-I</div>
          <div className={classes.textBlock9}>3-1-0-5-3</div>
        </div>
        <div className={classes.elementCardInfoCardSmallIconPo3}>
          <div className={classes.icon8}>
            <ElementCardInfoCardSmallIconPo3 className={classes.icon9} />
          </div>
        </div>
      </div>
      <div className={classes.textBlockSectionLargeTitleBody2}>
        <div className={classes.body4}>You can find research paper, question parer in one click</div>
        <div className={classes.title3}>Course Resources</div>
        <div className={classes.rectangle12}>
        <LiveSearch
      results={results}
      value={selectedProfile?.name}
      renderItem={(item) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
        </div>
        <div className={classes.realAnalysis2}>
        </div>
        <div className={classes.IconSearchEngine2}>
          <IconSearchEngineIcon2 className={classes.icon10} />
        </div>
        <div className={classes.title4}>Real Analysis</div>
        {/* <div className={classes.arrow1}>
          <Arrow1Icon className={classes.icon11} />
        </div> */}
      </div>
      <div className={classes.table}></div>
      <div className={classes.realAnalysisSession2022I}>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock10}>Real Analysis: Session : 2022-I</div>
          </li>
          <li>
            <div className={classes.textBlock11}>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.frame1}></div>

    </div>
  );
};
export default Page2;
