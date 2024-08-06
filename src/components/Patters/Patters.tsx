import { patters } from "../../materials/patters";
import { PatterItem } from "./PatterItem/PatterItem";
import { Container } from "../Container/Container";


export const Patters = () => {
  return (
    <Container>
      <>
        <h2>Скороговорки</h2>
        <p>Выговаривайте постепенно увеличивая скорость, но сохраняя при этом чёткость произношения</p>
        <ul>
          {patters.map((item, i) => {
            return (
              <li key={i}>
                <h3>{item.title}</h3>
                <PatterItem content={item.content} />
              </li>
            )
          })}
        </ul>
      </>
    </Container>
  )
};
