export type Tab = { name: string; value: string }

export type TabsProps = {
  tabs: Tab[];
  onClick: (tab: Tab)  => void
};
