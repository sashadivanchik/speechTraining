import { TabsProps } from "./types";
import { Button } from "../Button/Button";
import { useState } from "react";
import style from './Tabs.module.css';

export const Tabs = ({
  tabs = [],
  onClick
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onClick(tabs[index])
  };

  return (
    <div className={style.tabsContainer}>
      {tabs.map((item, index) => {
        return (
          <Button
            isActive={activeTab === index}
            key={index}
            onClick={() => handleTabClick(index)}
            value={`${item.name} тренировка`}
          />
        )
      })}
    </div>
  )
};
