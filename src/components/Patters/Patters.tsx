import { patters } from "../../materials/patters";
import { PatterItem } from "./PatterItem/PatterItem";
import { Container } from "../Container/Container";

type PattersProps = {
  trainingType: string
};

export const Patters = ({
  trainingType
}: PattersProps) => {

  function getRandomStrings(array: string[], count: number) {
    if (count > array.length) {
      return []
    }
    const shuffledArray = [...array].sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }

  return (
    <Container>
      <>
        <h2>Скороговорки</h2>
        <p>Выговаривайте постепенно увеличивая скорость, но сохраняя при этом чёткость произношения</p>
        { trainingType === 'full' ? (
          <ul>
            {patters.map((item, i) => {
              return (
                <li key={i}>
                  <h3>{item.title}</h3>
                  <PatterItem content={item.content.join(' ')} />
                </li>
              )
            })}
          </ul>
        ) : (
          <ul>
            {patters.map((item, i) => {
              return (
                <li key={i}>
                  <h3>{item.title}</h3>
                  <PatterItem content={getRandomStrings(item.content, 10).join(' ')} />
                </li>
              )
            })}
          </ul>
        ) }

      </>
    </Container>
  )
};
