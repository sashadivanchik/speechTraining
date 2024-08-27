import { ButtonProps } from "./types";
import style from './Button.module.css';

export const Button = ({
  onClick,
  value,
  styleClass = '',
  isActive
}: ButtonProps) => {

  const isActiveClass = isActive ? style.buttonActive : '';

  return (
    <button
      className={`${style.button} ${isActiveClass} ${styleClass}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
};
