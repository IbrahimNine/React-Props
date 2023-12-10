// PlayerList component displays a list of players
import React from "react";
import { Players } from "../Players";
import Player from "./Player";

function PlayerList({ onPlayerClick }) {
  // Styles for the player list container
  const listContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    maxWidth: "1100px",
    padding: "2%",
    margin: "7% auto 0 auto",
    borderRadius: "90px 5px",
    backgroundColor: "hsl(0, 0%, 0%,0.9)",
    gap: "20px",
  };

  return (
    // Player list container with mapped Player components
    <div style={listContainer}>
      {Players.map((playerData) => (
        <Player
          key={playerData.id}
          {...playerData}
          onClick={() => onPlayerClick(playerData)}
        />
      ))}
    </div>
  );
}

export default PlayerList;
