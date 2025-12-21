// props.childres은 컴포넌트 텍스트 사이 내용을 의미함..
//  <TabButton>Components</TabButton> <--- 여기의 "Components" 부분

export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TAB BUTTON COMPONENT EXECUTING");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
