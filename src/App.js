import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerList from "./components/PlayerList";
import Logo from "./components/Logo";
import MyTooltip from "./components/MyTooltip";

function App() {
  // State to manage tooltip data
  const [tooltipData, setTooltipData] = useState(null);

  // Handler for player click to show tooltip
  const handlePlayerClick = (playerData) => {
    setTooltipData(playerData);
  };

  // Handler to close the tooltip
  const handleCloseTooltip = () => {
    setTooltipData(null);
  };

  return (
    <div className="App">
      {/* Logo component at the top of the app */}
      <Logo />

      {/* PlayerList component to display a list of players */}
      <PlayerList onPlayerClick={handlePlayerClick} />

      {/* Tooltip component displayed conditionally based on tooltipData */}
      {tooltipData && (
        <MyTooltip data={tooltipData} onClose={handleCloseTooltip} />
      )}
    </div>
  );
}

export default App;
