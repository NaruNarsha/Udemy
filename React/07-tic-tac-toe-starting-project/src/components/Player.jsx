import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    console.log("Edit button clicked -  call handleEditClick()");

    // 새 상태가 이전 상태 값에 의존하는 경우 다음과 같이 상태를 업데이트해서는 안 됩니다
    // setIsEditing(!isEditing);

    // 대신 상태 업데이트 함수에 함수를 전달하면 이 함수는 React에 의해 자동으로 호출되며 보장된 최신 상태 값을 받게 됩니다
    setIsEditing((editing) => !editing);
  };

  const handlePlayerName = (event) => {
    console.log(
      "Player name changed - call handlePlayerName()",
      event.target.value,
    );
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerName}
      />
    );
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="Player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
