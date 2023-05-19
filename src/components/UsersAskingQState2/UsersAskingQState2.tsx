import React, { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AkarIconsCircleXIcon } from './AkarIconsCircleXIcon';
import { Button_Property1Default } from './Button_Property1Default/Button_Property1Default';
import { Button_Property1Variant2 } from './Button_Property1Variant2/Button_Property1Variant2';
import { BxImagesIcon } from './BxImagesIcon';
import classes from './UsersAskingQState2.module.css';
import {useState} from "react";

interface Props {
  className?: string;
}


/* @figmaId 125:767 */
export const UsersAskingQState2: FC<Props> = memo(function UsersAskingQState2(props = {}) {
  const [searchTitle, setSearchTitle] = useState("");
  const [responseTitle, setResponseTitle] = useState("Enter your response here");
  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  function clickMe() {
    setResponseTitle("Here is your response regarding:"+searchTitle);
  }
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangleHeader}></div>
      <div className={classes.frameNew_Question}>
        <div className={classes.frame2579}>
          <div className={classes.frame2603}>
            <div className={classes.frame2639}>
              <div className={classes.writeYourQuestionHere}>{responseTitle}</div>
            </div>
            <div className={classes.frame2638}>
              <div className={classes.newQuestion}>New Question</div>
              <div className={classes.akarIconsCircleX}>
                <AkarIconsCircleXIcon className={classes.icon} />
              </div>
            </div>
            <div className={classes.line91}></div>
            <div className={classes.frame2641}>
              <div className={classes.line86}></div>
              <div className={classes.frame2640}>
                <div className={classes.frame2582}>
                  <div className={classes.aa}>Aa</div>
                  <div className={classes.bxImages}>
                    <BxImagesIcon className={classes.icon2} />
                  </div>
                </div>
                <div className={classes.frame2583}>
                  <button onClick={clickMe} className={classes.button}>
                    <Button_Property1Default />
                    <Button_Property1Variant2 />
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.frame2637}>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Write your question here"
                  value={searchTitle}
                  onChange={onChangeSearchTitle}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frameWalnuss}>
        <div className={classes.frame2605}>
          <div className={classes.image5}></div>
          <div className={classes.dingDong}>Ding Dong Protocol</div>
        </div>
      </div>
      <button onClick={clickMe} className={classes.buttonAsk_Question}>
        <div className={classes.askAQuestion}>Ask a question</div>
      </button>
    </div>
  );
});
