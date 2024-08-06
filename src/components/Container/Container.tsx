import { ReactElement } from "react";
import './Container.css'
type ContainerProps = {
  children: ReactElement;
}
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container">
      { children }
    </div>
  )
};
