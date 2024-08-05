import './App.css'
import { Patters } from "../Patters/Patters";
import { RandomSounds } from "../RandonSounds/RandomSounds";
import { SoundSeries } from "../SoundSeries/SoundSeries";

export const App = () => {
  return (
    <div>
      <h1>Speech</h1>
      <SoundSeries />
      <RandomSounds />
      <Patters />
    </div>
  )
};
