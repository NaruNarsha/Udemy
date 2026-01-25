import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    console.log("Edit button clicked -  call handleEditClick()");
        
    // 새 상태가 이전 상태 값에 의존하는 경우 다음과 같이 상태를 업데이트해서는 안 됩니다
    // setIsEditing(!isEditing);

    // 대신 상태 업데이트 함수에 함수를 전달하면 이 함수는 React에 의해 자동으로 호출되며 보장된 최신 상태 값을 받게 됩니다
    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>;
  //let btnCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value ={name}/>;
    //btnCaption = "Save";
  }

  return (
    <li>
      <span className="Player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
