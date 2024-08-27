import { patters } from "../../materials/patters";
import { PatterItem } from "./PatterItem/PatterItem";
import { Container } from "../Container/Container";
import { FULL_TRAINING } from "../App/App";

type PattersProps = {
  trainingType: string
};

export const Patters = ({
  trainingType
}: PattersProps) => {
  const getRandomStrings = (array: string[], count: number) => {
    if (count > array.length) {
      return []
    }
    const shuffledArray = [...array].sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  };

  const isFull = trainingType === FULL_TRAINING;

  return (
    <Container>
      <>
        <h2>Скороговорки</h2>
        <p>Выговаривайте постепенно увеличивая скорость, но сохраняя при этом чёткость произношения</p>
          <ul>
            {patters.map((item, i) => {
              return (
                <PatterItem
                  key={i}
                  title={item.title}
                  content={
                    isFull ? item.content : getRandomStrings(item.content, 10)
                  }
                />
              )
            })}
          </ul>
      </>
    </Container>
  );
};
