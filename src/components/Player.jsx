import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange}) {
  const [isEditing, setIsEditing] = useState();
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEditing((editing) => !editing);
    if(isEditing){
      onNameChange(symbol, playerName);
    }
  }

  function handlePlayerNameChange(event){
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handlePlayerNameChange}></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{ isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
