import { memo, useState } from 'react';
import type { FC } from 'react';
import resets from '../_resets.module.css';
import { ElementCardInfoCardSmallIconPo2 } from './ElementCardInfoCardSmallIconPo2';
import { ElementCardInfoCardSmallIconPo3 } from './ElementCardInfoCardSmallIconPo3';
import { IconSearchEngineIcon2 } from './IconSearchEngineIcon2';
import search from './search';
import classes from './Page2.module.css';
import LiveSearch from './liveSearch';
import Select,{ SingleValue } from 'react-select';
import "./page2.css"

interface Props {
  className?: string;
}
const courses = [
  { id: "1", name: "CS543 - REINFORCEMENT LEARNING LAB" },
  { id: "2", name: "CS533 - REINFORCEMENT LEARNING" },
  { id: "3", name: "CS503 - MACHINE LEARNING " },
  { id: "4", name: "MA303 - Computing Lab II" },
  { id: "5", name: "MA302 - Optimization Methods with Applications" },
  { id: "6", name: "HS301 - Industrial Management" },
  { id: "7", name: "MA301 - Computational Algebra" },
  { id: "8", name: "MA514 - Analysis and Design of Algorithms" },
  { id: "9", name: "BM101A - Biology for Engineers" },
  { id: "10", name: "MA515 - Foundations of Data Science" },
  { id: "11", name: "GE111 - Introduction To Environmental Science And Engineering" },
];

const Page2: FC<Props> = (props): JSX.Element => {
  const [results, setResults] = useState<{ id: string; name: string }[]>();
  const [show,setShow] = useState<Boolean>(false)
  // const [show,setShow]=useState(false)
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
        <button>
          <div className={classes.IconSearchEngine2} onClick={()=>setShow(true)}>
            <IconSearchEngineIcon2 className={classes.icon10} />
          </div>
        </button>

      </div>
      <div className={classes.table}></div>
      {show && <div className={classes.realAnalysisSession2022I}>
            <ul className={classes.list}>
              <li>
                <div className={classes.textBlock10}>Real Analysis: Session : 2022-I</div>
              </li>
              <li>
              <table id="customers">
                <tr>
                  <th>Quiz 1</th>
                  <th>midsem</th>
                  <th>quiz 2</th>
                  <th>endsem</th>
                </tr>
                <tr>
                  <td>
                  <a href="https://www..com/">Alfreds Futterkiste</a>
                  </td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                  <td>Germany</td>
                </tr>
              </table>
              </li>
            </ul>
            <div className={classes.textBlock11}>
          </div>
      </div>}
      <div className={classes.frame1}>
      </div>
    </div>
  );
};
export default Page2;
