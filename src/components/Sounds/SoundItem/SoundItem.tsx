import style from './SoundItem.module.css';

type SoundItemProps = {
  item: string[];
};

export const SoundItem = ({
  item
}: SoundItemProps) => {
  return (
    <li className={style.soundItem}>
      <ul>
        {item.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </li>
  )
};
