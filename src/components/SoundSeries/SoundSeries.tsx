import { soundSeries } from "../../materials/soundSeries";

export const SoundSeries = () => {
  return (
    <>
      <h2>Звуковые ряды</h2>
      <p>Первый раз строчку надо прочитать медленно, второй раз шёпотом, третий раз с пробкой, четвертый раз без пробки с нормальной скоростью, пятый раз быстро.</p>
      <ul>
        {soundSeries.map((item, i) => {
          return (
            <li key={i} style={{ marginBottom: '10px'}}>
              <ul>
                {item.map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
            </li>
          )
        })}
      </ul></>
  )
};
