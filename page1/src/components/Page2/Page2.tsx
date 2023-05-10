import { memo, useState } from 'react';
import type { FC } from 'react';
import resets from '../_resets.module.css';
import { IconSearchEngineIcon2 } from './IconSearchEngineIcon2';
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
                <div className={classes.textBlock10}>: Session : 2022-II</div>
              </li>
              <li>
              <table id="customers1">
                <tr>
                  <th>Quiz 1</th>
                  <th>Midsem</th>
                  <th>Quiz 2</th>
                  <th>Endsem</th>
                </tr>
                <tr>
                  <td><a href="/CS101-Graph-Theory-Tutorial2.pdf" download="file.pdf">Quiz 1 question Paper</a></td>
                  <td><a href="/CS 101 - Part C - Graph Theory - Tutorial 1.pdf" download="file.pdf">Midsem question Paper</a></td>
                  <td><a href="/cs101_quiz2_sem2_2020_21.pdf" download="file.pdf">quiz 2 question Paper</a></td>
                  <td><a href="/cs101_end_semester_examination_part_B.pdf" download="file.pdf">Endsem question Paper</a></td>
                </tr>
                <tr>
                  <td><a href="/quiz2-solutions-questions-1-2-3-5-6-and-9.pdf" download="file.pdf">Quiz 1 Solution </a></td>
                  <td><a href="/quiz2-solutions-questions-4-7-and-8.pdf" download="file.pdf">Midsem solution </a></td>
                  <td><a href="/solutions_cs101_Sem2_2020_21_quiz1-all-questions.pdf" download="file.pdf">quiz 2 solution </a></td>
                  <td><a href="/solutions_cs101_Sem2_2020_21_quiz1-question1.pdf" download="file.pdf">Endsem solution </a></td>
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
