import { TabsProps } from "./types";
import { Button } from "../Button/Button";
import { useState } from "react";

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
    <div style={{ display: 'grid', gridTemplateColumns: '210px 210px',gap: '10px', justifyContent: 'center'}}>
      {tabs.map((item, index) => {
        return (
          <Button
            styleClass={activeTab === index ? 'buttonActive' : ''}
            key={index}
            onClick={() => handleTabClick(index)}
            value={`${item.name} тренировка`}
          />
        )
      })}
    </div>
  )
};
