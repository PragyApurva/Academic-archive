import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon';
import { Arrow1Icon2 } from './Arrow1Icon2';
import { Arrow1Icon3 } from './Arrow1Icon3';
import { Arrow2Icon } from './Arrow2Icon';
import { CourseSpecificResourcesIcon } from './CourseSpecificResourcesIcon';
import { ElementCardInfoCardSmallIconPo } from './ElementCardInfoCardSmallIconPo';
import { ElementCardInfoCardSmallIconPo2 } from './ElementCardInfoCardSmallIconPo2';
import { ElementCardInfoCardSmallIconPo3 } from './ElementCardInfoCardSmallIconPo3';
import { ElementCardInfoCardSmallIconPo4 } from './ElementCardInfoCardSmallIconPo4';
import { Frame26Icon } from './Frame26Icon';
import { HeroIcon } from './HeroIcon';
import { IconArrowRightCircledIcon } from './IconArrowRightCircledIcon';
import { IconButton_ConfigurationStanda } from './IconButton_ConfigurationStanda/IconButton_ConfigurationStanda';
import { IconCancelIcon } from './IconCancelIcon';
import { IconCancelIcon2 } from './IconCancelIcon2';
import { IconCancelIcon3 } from './IconCancelIcon3';
import { IconCheckIcon } from './IconCheckIcon';
import { IconPinIcon } from './IconPinIcon';
import { IconsArrow_back_24px } from './IconsArrow_back_24px/IconsArrow_back_24px';
import { IconsArrow_back_24pxIcon } from './IconsArrow_back_24pxIcon';
import { IconSearchEngineIcon } from './IconSearchEngineIcon';
import { IconSearchEngineIcon2 } from './IconSearchEngineIcon2';
import { IconSearchEngineIcon3 } from './IconSearchEngineIcon3';
import { IconSearchEngineIcon4 } from './IconSearchEngineIcon4';
import { IconSearchEngineIcon5 } from './IconSearchEngineIcon5';
import { IconSearchEngineIcon6 } from './IconSearchEngineIcon6';
import { IconSearchEngineIcon7 } from './IconSearchEngineIcon7';
import { IconSendIcon } from './IconSendIcon';
import { IconsMore_vert_24px } from './IconsMore_vert_24px/IconsMore_vert_24px';
import { IconsMore_vert_24pxIcon } from './IconsMore_vert_24pxIcon';
import { IconSocialInstagramCopy2Icon } from './IconSocialInstagramCopy2Icon';
import { IconSocialInstagramCopy2Icon2 } from './IconSocialInstagramCopy2Icon2';
import { IconSocialInstagramCopy3Icon } from './IconSocialInstagramCopy3Icon';
import { IconSocialInstagramCopy3Icon2 } from './IconSocialInstagramCopy3Icon2';
import { IconSocialInstagramCopy4Icon } from './IconSocialInstagramCopy4Icon';
import { IconSocialInstagramCopy4Icon2 } from './IconSocialInstagramCopy4Icon2';
import { IconSocialInstagramCopyIcon } from './IconSocialInstagramCopyIcon';
import { IconSocialInstagramCopyIcon2 } from './IconSocialInstagramCopyIcon2';
import { IconSocialInstagramIcon } from './IconSocialInstagramIcon';
import { IconSocialInstagramIcon2 } from './IconSocialInstagramIcon2';
import { IconSquareIcon } from './IconSquareIcon';
import classes from './LandingPage.module.css';
import { LandingPageIcon } from './LandingPageIcon';
import { Rectangle4Icon } from './Rectangle4Icon';
import { RectangleIcon } from './RectangleIcon';
import { StateLayerIcon } from './StateLayerIcon';
import { StateLayerIcon2 } from './StateLayerIcon2';
import { StateLayerIcon3 } from './StateLayerIcon3';
import { Undraw_mention_6k5dIcon } from './Undraw_mention_6k5dIcon';
import { Undraw_mobile_login_ikmvElemen } from './Undraw_mobile_login_ikmvElemen';

interface Props {
  className?: string;
}
/* @figmaId 108:1324 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.hero}>
        <HeroIcon className={classes.icon3} />
      </div>
      <div className={classes.textBlockHeroTitleBodyActionRo}>
        <div className={classes.body}>
          An online platform for students to access academic resources for their specific courses, connect with peers,
          and access course statistics.
        </div>
      </div>
      <div className={classes.title}>Academic Resource Archive</div>
      <div className={classes.logoLandie}>
        <div className={classes.landie}>Home Page</div>
      </div>
      <div className={classes.rectangle}></div>
      <div className={classes.home}>Home</div>
      <div className={classes.about}>About</div>
      <div className={classes.contact}>Contact</div>
      <button className={classes.elementButtonSmallFilled}>
        <div className={classes.bG}></div>
        <div className={classes.buttonLabel}>Login</div>
      </button>
      <button className={classes.elementButtonSmallFilled2}>
        <div className={classes.bG2}></div>
        <div className={classes.buttonLabel2}>Sign up</div>
      </button>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.textBlockSectionLargeTitleBody}>
        <div className={classes.body2}>Discuss with peers or seniors about courses</div>
        <div className={classes.title2}>Discuss room</div>
        <div className={classes.realAnalysis}>Real Analysis</div>
      </div>
      <div className={classes.IconSearchEngine}>
        <IconSearchEngineIcon className={classes.icon4} />
      </div>
      <div className={classes.elementCardInfoCardMediumIconT}>
        <div className={classes.body3}>
          <div className={classes.textBlock}>course instructor: Dr M Prabhakar</div>
          <div className={classes.textBlock2}>session: 2022-I</div>
          <div className={classes.textBlock3}>3-1-0-5-3</div>
        </div>
        <div className={classes.elementCardInfoCardSmallIconPo}>
          <div className={classes.icon5}>
            <ElementCardInfoCardSmallIconPo className={classes.icon6} />
          </div>
        </div>
      </div>
      <div className={classes.mask}></div>
      <div className={classes.elementCardInfoCardMediumIconT2}>
        <div className={classes.elementCardInfoCardSmallIconPo2}>
          <div className={classes.icon7}>
            <ElementCardInfoCardSmallIconPo2 className={classes.icon8} />
          </div>
          <div className={classes.title3}>Real Analysis</div>
        </div>
        <div className={classes.courseInstructorDrMPrabhakarSe}>
          <div className={classes.textBlock4}>course instructor: Dr M Prabhakar</div>
          <div className={classes.textBlock5}>session: 2021-I</div>
          <div className={classes.textBlock6}>3-1-0-5-3</div>
        </div>
      </div>
      <div className={classes.elementCardInfoCardMediumIconT3}>
        <div className={classes.body4}>
          <div className={classes.textBlock7}>course instructor: Dr M Prabhakar</div>
          <div className={classes.textBlock8}>session: 2022-I</div>
          <div className={classes.textBlock9}>3-1-0-5-3</div>
        </div>
        <div className={classes.elementCardInfoCardSmallIconPo3}>
          <div className={classes.icon9}>
            <ElementCardInfoCardSmallIconPo3 className={classes.icon10} />
          </div>
        </div>
      </div>
      <div className={classes.textBlockSectionLargeTitleBody2}>
        <div className={classes.body5}>You can find research paper, question parer in one click</div>
        <div className={classes.title4}>Course Resources</div>
        <div className={classes.rectangle12}></div>
        <div className={classes.realAnalysis2}>Real Analysis</div>
        <div className={classes.IconSearchEngine2}>
          <IconSearchEngineIcon2 className={classes.icon11} />
        </div>
        <div className={classes.title5}>Real Analysis</div>
        <div className={classes.arrow1}>
          <Arrow1Icon className={classes.icon12} />
        </div>
      </div>
      <div className={classes.rectangle3}></div>
      <div className={classes.textBlockSectionLargeTitleBody3}>
        <div className={classes.body6}>
          <div className={classes.textBlock10}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus{' '}
          </div>
          <div className={classes.textBlock11}>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </div>
        </div>
        <div className={classes.title6}>Light, Fast &amp; Powerful</div>
      </div>
      <button className={classes.elementButtonMediumFilled}>
        <div className={classes.bG3}></div>
        <div className={classes.buttonLabel3}>Purchase Now</div>
      </button>
      <div className={classes.undraw_mention_6k5d}>
        <Undraw_mention_6k5dIcon className={classes.icon13} />
      </div>
      <div className={classes.rectangle4}>
        <RectangleIcon className={classes.icon14} />
      </div>
      <button className={classes.elementButtonMediumFilled2}>
        <div className={classes.bG4}></div>
        <div className={classes.buttonLabel4}>Purchase Now</div>
      </button>
      <div className={classes.body7}>See, One price. Simple.</div>
      <div className={classes.title7}>UI Design Kit</div>
      <div className={classes.price}>$40</div>
      <div className={classes.textBlockSectionLargeTitleBody4}>
        <div className={classes.body8}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus{' '}
        </div>
        <div className={classes.title8}>A Price To Suit Everyone</div>
      </div>
      <div className={classes.rectangle5}></div>
      <button className={classes.elementButtonSmallFilled3}>
        <div className={classes.bG5}></div>
        <div className={classes.buttonLabel5}>Purchase now</div>
      </button>
      <div className={classes.unnamed}>©2023 Yourcompany</div>
      <div className={classes.home2}>Home</div>
      <div className={classes.about2}>About</div>
      <div className={classes.contact2}>Contact</div>
      <div className={classes.iconSocialInstagram}>
        <IconSocialInstagramIcon className={classes.icon15} />
      </div>
      <div className={classes.iconSocialInstagramCopy}>
        <IconSocialInstagramCopyIcon className={classes.icon16} />
      </div>
      <div className={classes.iconSocialInstagramCopy2}>
        <IconSocialInstagramCopy2Icon className={classes.icon17} />
      </div>
      <div className={classes.iconSocialInstagramCopy3}>
        <IconSocialInstagramCopy3Icon className={classes.icon18} />
      </div>
      <div className={classes.iconSocialInstagramCopy4}>
        <IconSocialInstagramCopy4Icon className={classes.icon19} />
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.logoLandie2}>
        <div className={classes.landie2}>Landing</div>
      </div>
      <div className={classes.table}></div>
      <div className={classes.realAnalysisSession2022I}>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock12}>Real Analysis: Session : 2022-I</div>
          </li>
          <li>
            <div className={classes.textBlock13}>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.frame1}></div>
      <div className={classes.arrow2}>
        <Arrow2Icon className={classes.icon20} />
      </div>
      <div className={classes.elementCardInfoCardSmallIconPo4}>
        <div className={classes.icon21}>
          <ElementCardInfoCardSmallIconPo4 className={classes.icon22} />
        </div>
        <div className={classes.title9}>
          <div className={classes.textBlock14}>  Electives Recommendations</div>
          <div className={classes.textBlock15}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={classes.body9}>Recommend useful electives that align with the interest/goals of student</div>
      <div className={classes.body10}>
        Resources such as previous course examination papers and valuable citations during the course such as non
        copyrighted books
      </div>
      <div className={classes.courseSpecificResources}>
        <div className={classes.icon23}>
          <CourseSpecificResourcesIcon className={classes.icon24} />
        </div>
        <div className={classes.title10}>Course-specific resources</div>
      </div>
      <div className={classes.icon25}>
        <LandingPageIcon className={classes.icon26} />
      </div>
      <div className={classes.title11}>
        <div className={classes.textBlock16}>Peer discussion panel</div>
        <div className={classes.textBlock17}>
          <p></p>
        </div>
      </div>
      <div className={classes.body11}>
        Peers Discussion panel to get insights and help from the seniors of the course
      </div>
      <div className={classes.detailPage}>
        <div className={classes.frame22}>
          <div className={classes.searchBar}>
            <div className={classes.stateLayer}>
              <div className={classes.leadingIcon}>
                <div className={classes.container}>
                  <div className={classes.stateLayer2}>
                    <StateLayerIcon className={classes.icon27} />
                  </div>
                </div>
              </div>
              <div className={classes.content}>
                <div className={classes.supportingText}>Type message here...</div>
              </div>
              <div className={classes.trailingElements}>
                <div className={classes._1stTrailingIcon}>
                  <div className={classes.container2}>
                    <div className={classes.stateLayer3}>
                      <StateLayerIcon2 className={classes.icon28} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame40}></div>
          <div className={classes.frame31}>
            <div className={classes.frame26}>
              <Frame26Icon className={classes.icon29} />
            </div>
            <div className={classes.frame28}>
              <div className={classes._10AM}>10 aM</div>
            </div>
          </div>
        </div>
        <div className={classes.frame34}>
          <div className={classes.frame32}>
            <div className={classes.frame312}>
              <div className={classes.frame262}></div>
              <div className={classes.frame282}>
                <div className={classes._10AM2}>10 aM</div>
              </div>
            </div>
          </div>
          <div className={classes.frame33}>
            <div className={classes.frame313}>
              <div className={classes.frame263}></div>
              <div className={classes.frame283}>
                <div className={classes._10AM3}>10 aM</div>
              </div>
            </div>
          </div>
          <div className={classes.frame402}>
            <div className={classes.frame314}>
              <div className={classes.frame264}></div>
              <div className={classes.frame284}>
                <div className={classes._10AM4}>10 aM</div>
              </div>
            </div>
          </div>
          <div className={classes.frame315}>
            <div className={classes.frame265}></div>
            <div className={classes.frame285}>
              <div className={classes._10AM5}>10 aM</div>
            </div>
          </div>
          <div className={classes.frame38}>
            <div className={classes.frame316}>
              <div className={classes.frame266}></div>
              <div className={classes.frame27}>
                <div className={classes._10AM6}>10 aM</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.topAppBar}>
          <IconButton_ConfigurationStanda
            swap={{
              iconsSettings_24px: (
                <IconsArrow_back_24px
                  swap={{
                    icon: <IconsArrow_back_24pxIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
          />
          <div className={classes.headline}>Real Analysis 2022-1</div>
          <div className={classes.trailingIcon}>
            <div className={classes.trailingIcon2}>
              <div className={classes.container3}>
                <div className={classes.stateLayer4}>
                  <StateLayerIcon3 className={classes.icon30} />
                </div>
              </div>
            </div>
            <IconButton_ConfigurationStanda
              swap={{
                iconsSettings_24px: (
                  <IconsMore_vert_24px
                    swap={{
                      icon: <IconsMore_vert_24pxIcon className={classes.icon2} />,
                    }}
                  />
                ),
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.mask2}></div>
      <div className={classes.rectangle32}></div>
      <div className={classes.body12}>Based on your goals and previous courses </div>
      <div className={classes.rectangle42}>
        <Rectangle4Icon className={classes.icon31} />
      </div>
      <div className={classes.textBlockSectionLargeTitleBody5}>
        <div className={classes.body13}>Tick the goals for elective recommendations </div>
        <div className={classes.title12}>Goals</div>
        <div className={classes.goals}>Research</div>
        <div className={classes.IconSearchEngine3}>
          <IconSearchEngineIcon3 className={classes.icon32} />
        </div>
        <div className={classes.goals2}>Quantitative Analyst</div>
        <div className={classes.IconSearchEngine4}>
          <IconSearchEngineIcon4 className={classes.icon33} />
        </div>
        <div className={classes.goals3}>MBA</div>
        <div className={classes.IconSearchEngine5}>
          <IconSearchEngineIcon5 className={classes.icon34} />
        </div>
        <div className={classes.goals4}>Software development</div>
        <div className={classes.IconSearchEngine6}>
          <IconSearchEngineIcon6 className={classes.icon35} />
        </div>
        <div className={classes.goals5}>Data science</div>
        <div className={classes.IconSearchEngine7}>
          <IconSearchEngineIcon7 className={classes.icon36} />
        </div>
        <div className={classes.title13}>Courses we recommend</div>
      </div>
      <div className={classes.arrow12}>
        <Arrow1Icon2 className={classes.icon37} />
      </div>
      <div className={classes.rectangle13}></div>
      <div className={classes.textBlockSectionLargeTitleBody6}>
        <div className={classes.body14}>Search for the Course You need help for</div>
        <div className={classes.title14}>Course you have taken till now</div>
        <div className={classes.rectangle22}></div>
        <div className={classes.mA515FoundationsOfDataScience}>MA-515 Foundations of Data Science </div>
        <div className={classes.rectangle23}></div>
        <div className={classes.cS101DiscreteMathematicalStruc}>CS101 - Discrete Mathematical Structure</div>
        <div className={classes.rectangle24}></div>
        <div className={classes.cS201DataStructures}>CS201 - Data Structures</div>
        <div className={classes.IconCancel}>
          <IconCancelIcon className={classes.icon38} />
        </div>
        <div className={classes.IconCancel2}>
          <IconCancelIcon2 className={classes.icon39} />
        </div>
        <div className={classes.IconCancel3}>
          <IconCancelIcon3 className={classes.icon40} />
        </div>
      </div>
      <div className={classes.IconSquare}>
        <IconSquareIcon className={classes.icon41} />
      </div>
      <div className={classes.arrow13}>
        <Arrow1Icon3 className={classes.icon42} />
      </div>
      <div className={classes.IconSend}>
        <IconSendIcon className={classes.icon43} />
      </div>
      <div className={classes.goals6}>Add your goal</div>
      <div className={classes.IconPin}>
        <IconPinIcon className={classes.icon44} />
      </div>
      <div className={classes.IconCheck}>
        <IconCheckIcon className={classes.icon45} />
      </div>
      <div className={classes.line3}></div>
      <div className={classes.rectangle25}></div>
      <div className={classes.cS503MachineLearning}>CS503 - Machine learning</div>
      <div className={classes.IconArrowRightCircled}>
        <IconArrowRightCircledIcon className={classes.icon46} />
      </div>
      <div className={classes.rectangle26}></div>
      <div className={classes.cS712TopicsInAI}>CS712 Topics in AI</div>
      <div className={classes.rectangle27}></div>
      <div className={classes.cS533ReinforcementLearning}>CS533 - Reinforcement learning</div>
      <div className={classes.line2}></div>
      <div className={classes.undraw_mobile_login_ikmvElemen}>
        <Undraw_mobile_login_ikmvElemen className={classes.icon47} />
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.unnamed2}>@2023</div>
      <div className={classes.home3}>Home</div>
      <div className={classes.about3}>About</div>
      <div className={classes.contact3}>Contact</div>
      <div className={classes.iconSocialInstagram2}>
        <IconSocialInstagramIcon2 className={classes.icon48} />
      </div>
      <div className={classes.iconSocialInstagramCopy5}>
        <IconSocialInstagramCopyIcon2 className={classes.icon49} />
      </div>
      <div className={classes.iconSocialInstagramCopy22}>
        <IconSocialInstagramCopy2Icon2 className={classes.icon50} />
      </div>
      <div className={classes.iconSocialInstagramCopy32}>
        <IconSocialInstagramCopy3Icon2 className={classes.icon51} />
      </div>
      <div className={classes.iconSocialInstagramCopy42}>
        <IconSocialInstagramCopy4Icon2 className={classes.icon52} />
      </div>
      <div className={classes.rectangle8}></div>
    </div>
  );
});
