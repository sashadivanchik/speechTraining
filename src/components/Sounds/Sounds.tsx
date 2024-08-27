import { SoundsType, sounds } from "../../materials/sounds";
import { Container } from "../Container/Container";
import { FULL_TRAINING } from "../App/App";
import { SoundItem } from "./SoundItem/SoundItem";

type RandomProps = {
  trainingType: string;
};

export const Sounds = ({
  trainingType
}: RandomProps) => {
  const getRandomArrays = (allArrays: SoundsType, count: number) => {
    const randomIndices: number[] = [];

    while (randomIndices.length < count) {
      const randomIndex = Math.floor(Math.random() * allArrays.length);

      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    return randomIndices.map((index) => allArrays[index]);
  };

  return (
    <Container>
      <>
        <h2>Различные звукосочетания</h2>
        <p>Отчётливо и ясно произносим вслух, что напечатано ниже</p>
        <ul>
          {trainingType === FULL_TRAINING ? (
            sounds.map((item, i) => {
              return (
                <SoundItem key={i} item={item} />
              )
            })
          ) : (
            getRandomArrays(sounds, 7).map((item, i) => {
              return (
                <SoundItem key={i} item={item} />
              )
            })
          )}
        </ul>
      </>
    </Container>
  );
};
