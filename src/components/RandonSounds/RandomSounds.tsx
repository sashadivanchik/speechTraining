import { sounds } from "../../materials/sounds";
import { Container } from "../Container/Container";

export const RandomSounds = () => {
  return (
    <Container>
      <>
        <h2>Различные звукосочетания</h2>
        <p>Отчётливо и ясно произносим вслух, что напечатано ниже</p>
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
      </>
    </Container>
  );
};
