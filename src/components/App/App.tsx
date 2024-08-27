import './App.css'
import { Patters } from "../Patters/Patters";
import { Sounds } from "../Sounds/Sounds";
import { Series } from "../Series/Series";
import { useState } from "react";
import { Tabs } from "../Tabs/Tabs";

export const FULL_TRAINING = 'FULL';
export const SHORT_TRAINING = 'SHORT';

const tabs = [
  {
    name: 'Большая',
    value: FULL_TRAINING
  },
  {
    name: 'Короткая',
    value: SHORT_TRAINING
  }
];

export const App = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <>
      <h1>Speech</h1>
      <Tabs tabs={tabs} onClick={setCurrentTab} />
      <Series trainingType={currentTab.value} />
      <Sounds trainingType={currentTab.value} />
      <Patters trainingType={currentTab.value} />
    </>
  )
};
