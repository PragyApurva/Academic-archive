import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon';
import { Arrow2Icon } from './Arrow2Icon';
import { ElementCardInfoCardSmallIconPo } from './ElementCardInfoCardSmallIconPo';
import { ElementCardInfoCardSmallIconPo2 } from './ElementCardInfoCardSmallIconPo2';
import { ElementCardInfoCardSmallIconPo3 } from './ElementCardInfoCardSmallIconPo3';
import { Frame26Icon } from './Frame26Icon';
import { IconButton_ConfigurationStanda } from './IconButton_ConfigurationStanda/IconButton_ConfigurationStanda';
import { IconsArrow_back_24px } from './IconsArrow_back_24px/IconsArrow_back_24px';
import { IconsArrow_back_24pxIcon } from './IconsArrow_back_24pxIcon';
import { IconSearchEngineIcon } from './IconSearchEngineIcon';
import { IconSearchEngineIcon2 } from './IconSearchEngineIcon2';
import { IconsMore_vert_24px } from './IconsMore_vert_24px/IconsMore_vert_24px';
import { IconsMore_vert_24pxIcon } from './IconsMore_vert_24pxIcon';
import classes from './Page2.module.css';
import { StateLayerIcon } from './StateLayerIcon';
import { StateLayerIcon2 } from './StateLayerIcon2';
import { StateLayerIcon3 } from './StateLayerIcon3';

interface Props {
  className?: string;
}
/* @figmaId 119:3153 */
export const Page2: FC<Props> = memo(function Page2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.textBlockSectionLargeTitleBody}>
        <div className={classes.body}>Discuss with peers or seniors about courses</div>
        <div className={classes.title}>Discuss room</div>
        <div className={classes.realAnalysis}>Real Analysis</div>
      </div>
      <div className={classes.IconSearchEngine}>
        <IconSearchEngineIcon className={classes.icon3} />
      </div>
      <div className={classes.elementCardInfoCardMediumIconT}>
        <div className={classes.body2}>
          <div className={classes.textBlock}>course instructor: Dr M Prabhakar</div>
          <div className={classes.textBlock2}>session: 2022-I</div>
          <div className={classes.textBlock3}>3-1-0-5-3</div>
        </div>
        <div className={classes.elementCardInfoCardSmallIconPo}>
          <div className={classes.icon4}>
            <ElementCardInfoCardSmallIconPo className={classes.icon5} />
          </div>
        </div>
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
        <div className={classes.rectangle12}></div>
        <div className={classes.realAnalysis2}>Real Analysis</div>
        <div className={classes.IconSearchEngine2}>
          <IconSearchEngineIcon2 className={classes.icon10} />
        </div>
        <div className={classes.title4}>Real Analysis</div>
        <div className={classes.arrow1}>
          <Arrow1Icon className={classes.icon11} />
        </div>
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
      <div className={classes.arrow2}>
        <Arrow2Icon className={classes.icon12} />
      </div>
      <div className={classes.detailPage}>
        <div className={classes.frame22}>
          <div className={classes.searchBar}>
            <div className={classes.stateLayer}>
              <div className={classes.leadingIcon}>
                <div className={classes.container}>
                  <div className={classes.stateLayer2}>
                    <StateLayerIcon className={classes.icon13} />
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
                      <StateLayerIcon2 className={classes.icon14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame40}></div>
          <div className={classes.frame31}>
            <div className={classes.frame26}>
              <Frame26Icon className={classes.icon15} />
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
                  <StateLayerIcon3 className={classes.icon16} />
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
    </div>
  );
});
