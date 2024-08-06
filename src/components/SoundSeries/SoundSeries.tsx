import { soundSeries } from "../../materials/soundSeries";
import { Container } from "../Container/Container";

export const SoundSeries = () => {
  return (
    <Container>
      <>
        <h2>Звуковые ряды</h2>
        <p>Каждую строку: медленно, шепотом, с пробкой, без пробки с нормальной скоростью, пятый раз быстро</p>
        <ul>
          {soundSeries.map((item, i) => {
            return (
              <li key={i} style={{display: "flex", justifyContent: "center", marginBottom: '10px'}}>
                <ul>
                  {item.map((item, i) => {
                    return <li style={{

                      display: "grid",
                      gridTemplateColumns: "repeat(10, 65px)"
                    }} key={i}>{item.split(' ').map((item, i) => <span key={i}>{item}</span>)}</li>
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </>
    </Container>
  )
};
