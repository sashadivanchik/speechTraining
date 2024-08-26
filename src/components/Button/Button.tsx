import { ButtonProps } from "./types";
import './Button.css';

export const Button = ({
  onClick,
  value,
  styleClass = ''
}: ButtonProps) => {
  return (
    <button
      className={`button ${styleClass}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
};
