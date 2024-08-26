import './App.css'
import { Patters } from "../Patters/Patters";
import { RandomSounds } from "../RandonSounds/RandomSounds";
import { SoundSeries } from "../SoundSeries/SoundSeries";
import { useState } from "react";
import { Tabs } from "../Tabs/Tabs";

const tabs = [
  {
    name: 'Большая',
    value: 'full'
  },
  {
    name: 'Короткая',
    value: 'short'
  }
];

export const App = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <>
      <h1>Speech</h1>
      <Tabs tabs={tabs} onClick={setCurrentTab} />
      <SoundSeries trainingType={currentTab.value} />
      <RandomSounds trainingType={currentTab.value} />
      <Patters trainingType={currentTab.value} />
    </>
  )
};
