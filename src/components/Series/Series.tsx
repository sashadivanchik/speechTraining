import { soundSeries } from "../../materials/soundSeries";
import { Container } from "../Container/Container";
import { useEffect, useState } from "react";
import { FULL_TRAINING } from "../App/App";
import { SeriesItem } from "./SeriesItem/SeriesItem";
import style from './Series.module.css';

type SeriesProps = {
  trainingType: string;
};

type Days = "Воскресенье" | "Понедельник" | "Вторник" | "Среда" | "Четверг" | "Пятница" | "Суббота";

const ruWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"] as const

export const Series = ({
  trainingType
}: SeriesProps) => {
  const [currentDay, setCurrentDay] = useState<Days>("Понедельник");

  useEffect(() => {
    const indexOfDay = new Date().getDay();
    setCurrentDay(ruWeek[indexOfDay])
  }, [])

  const getByDay = (day: Days) => {
    const days: { [K in Days]: string[] } = {
      "Понедельник": soundSeries[0],
      "Вторник": soundSeries[1],
      "Среда": soundSeries[2],
      "Четверг": soundSeries[3],
      "Пятница": soundSeries[4],
      "Суббота": soundSeries[5],
      "Воскресенье": soundSeries[0]
    };

    return days[day] || [];
  };

  return (
    <Container>
      <>
        <h2>Звуковые ряды</h2>
        <p>Каждую строку: медленно, шепотом, с пробкой, без пробки с нормальной скоростью, пятый раз быстро</p>
        {trainingType === FULL_TRAINING ? (
          <ul>
            {soundSeries.map((item, i) => {
              return (
                <li key={i} className={style.seriesContainer}>
                  <SeriesItem key={i} item={item} />
                </li>
              )
            })}
          </ul>
        ) : (
          <div className={style.seriesContainer}>
            <SeriesItem
              item={getByDay(currentDay)}
            />
          </div>
        )}
      </>
    </Container>
  );
};
