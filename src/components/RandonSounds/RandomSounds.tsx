import { sounds } from "../../materials/sounds";

export const RandomSounds = () => {
  return (
    <>
      <h2>Различные звукосочетания</h2>
      <p>Отчётливо и ясно произносим вслух, что напечатано ниже</p>
      <ul>
        {sounds.map((item, i) => {
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
  );
};
