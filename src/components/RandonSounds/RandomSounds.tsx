import { Sounds, sounds } from "../../materials/sounds";
import { Container } from "../Container/Container";

type RandomProps = {
  trainingType: string;
};

export const RandomSounds = ({
  trainingType
}: RandomProps) => {
  console.log({ trainingType })


  const getRandomArrays = (allArrays: Sounds, count: number) => {
    const randomIndices: number[] = [];

    while (randomIndices.length < count) {
      const randomIndex = Math.floor(Math.random() * allArrays.length);

      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    return randomIndices.map((index) => allArrays[index]);
  }

  return (
    <Container>
      <>
        <h2>Различные звукосочетания</h2>
        <p>Отчётливо и ясно произносим вслух, что напечатано ниже</p>

        { trainingType === 'full' ? (
          <ul>
            {sounds.map((item, i) => {
              return (
                <li key={i} style={{marginBottom: '10px'}}>
                  <ul>
                    {item.map((item, i) => {
                      return <li key={i}>{item}</li>
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        ) : (
          <ul>
            {getRandomArrays(sounds, 7).map((item, i) => {
              return (
                <li key={i} style={{marginBottom: '10px'}}>
                  <ul>
                    {item.map((item, i) => {
                      return <li key={i}>{item}</li>
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        )}

      </>
    </Container>
  );
};
