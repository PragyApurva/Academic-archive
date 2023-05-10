import { memo,useState } from 'react';
import type { FC } from 'react';
import resets from '../_resets.module.css';
import { Arrow1Icon2 } from './Arrow1Icon2';
import { IconSendIcon } from './IconSendIcon';
import classes from './Page3.module.css';
import { Undraw_mobile_login_ikmvElemen } from './Undraw_mobile_login_ikmvElemen';
import LiveSearch from './liveSearch1';
import "./page3.css"

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

const Page3: FC<Props> = (props): JSX.Element => {
  const [results, setResults] = useState<{ id: string; name: string }[]>();
  const [show,setShow] = useState<Boolean>(false)
  const [selectedProfile, setSelectedProfile] = useState<{
    id: string;
    name: string;
  }>();

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = goals.filter((goals) =>
    goals.name.toLowerCase().startsWith(target.value)
    );
    setResults(filteredValue);
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.mask}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.body}>Based on your goals and previous courses </div>
      <div className={classes.textBlockSectionLargeTitleBody}>
        <div className={classes.body2}>Tick the goals for elective recommendations </div>
        <div className={classes.title}>Goals</div>
        <div className={classes.title2}>Courses we recommend</div>
      </div>
      <div className={classes.rectangle1}>
      <LiveSearch
          results={results}
          value={selectedProfile?.name}
          renderItem={(item) => <p>{item.name}</p>}
          onChange={handleChange}
          onSelect={(item) => setSelectedProfile(item)}
        />
      </div>
      <button>
        <div className={classes.IconSend} onClick={()=>setShow(true)}>
          <IconSendIcon className={classes.icon} />
        </div>
      </button>
      <div className={classes.undraw_mobile_login_ikmvElemen}>
        <Undraw_mobile_login_ikmvElemen className={classes.icon2} />
      </div>
      <div className={classes.table}>
      {show && <div className={classes.realAnalysisSession2022I}>
            <ul className={classes.list}>
              <li>
                <div className={classes.textBlock10}></div>
              </li>
              <li>
              <table id="customers">
                <tr>
                  <th>Recommended Course order</th>
                  <th></th>
                </tr>
                <tr>
                  <td>MA202 Probablity and statistics</td>
                  <td>3-0-0-6-3</td>
                </tr>
                <tr>
                  <td>CS201 Data Science and Algorithum</td>
                  <td>3-1-2-6-4</td>
                </tr>
                <tr>
                  <td>MA515 foundations of data science</td>
                  <td>3-0-2-7-4</td>
                </tr>
                <tr>
                  <td>CS503 Machine learning</td>
                  <td>3-0-2-7-4</td>
                </tr>
                <tr>
                  <td>CS533 Reinforcement Learing</td>
                  <td>2-0-4-6-4</td>
                </tr>
                <tr>
                  <td>CS612 Advanced Machine learning</td>
                  <td>3-0-0-6-3</td>
                </tr>
              </table>
              </li>
            </ul>
            <div className={classes.textBlock11}>
          </div>
      </div>}
      </div>
      {/* <div className={classes.table}>
      {show && <div>
            <ul className={classes.list}>
              <li>
              <table id="customers">
                <tr><td>MA202 Probablity and statistics</td></tr>
                <tr><td>CS201 DSA</td></tr>
                <tr><td>ma515 foundations of data science</td></tr>
                <tr><td>CS503 Machine learning</td></tr>
                <tr><td>CS533 Reinforcement Learing</td></tr>
                <tr><td>CS612 Advanced Machine learning</td></tr>
              </table>
              </li>
            </ul>
            <div className={classes.textBlock11}>
          </div>
      </div>}
      <div className={classes.frame1}>
      </div>
      </div> */}


    </div>
  );
};
export default Page3;