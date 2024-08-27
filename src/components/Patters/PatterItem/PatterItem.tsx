type PatterItemProps = {
  title: string;
  content: string[]
};
export const PatterItem = ({ content, title }: PatterItemProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <div>{content.join(' ')}</div>
    </li>

  );
};
