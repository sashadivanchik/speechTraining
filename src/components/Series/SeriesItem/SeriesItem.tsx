import style from './SeriesItem.module.css';

type SeriesItemProps = {
  item: string[];
};

export const SeriesItem = ({
  item
}: SeriesItemProps) => {
  return (
    <ul>
      {item.map((item, i) => {
        return (
          <li
            className={style.seriesItem}
            key={i}
          >
            {
              item.split(' ').map((item, i) => <span key={i}>{item}</span>)
            }
          </li>)
      })}
    </ul>
  )
};
