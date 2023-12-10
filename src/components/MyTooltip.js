// MyTooltip component displays detailed information about a player
import React from "react";

function MyTooltip({ data, onClose }) {
  // Styles for the tooltip
  const tooltipBg = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const tooltipStyle = {
    backgroundColor: "hsl(240, 100%, 1%)",
    padding: "1%",
    borderRadius: "10px",
    width: "50%",
    height: "50%",
    border: "1px solid grey",
    borderRadius: "90px 0",
    color: "white",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    fontSize: "20px",
  };
  return (
    // Tooltip structure
    <div style={tooltipBg} onClick={onClose}>
      <div className="toolTipContents" style={tooltipStyle}>
        <p>
          <span>Name :</span> {data.name}
        </p>
        <p>
          <span>Age :</span> {data.age}
        </p>
        <p>
          <span>Nationality :</span> {data.nationalityText}
        </p>
        <p>
          <span>Team :</span> {data.teamText}
        </p>
        <p>
          <span>Number :</span> {data.jerseyNumber}
        </p>
        <p>
          <span>Position :</span> {data.position}
        </p>
        <p>
          <span>PAC :</span> {data.PAC}
        </p>
        <p>
          <span>SHO :</span> {data.SHO}
        </p>
        <p>
          <span>PAS :</span> {data.PAS}
        </p>
        <p>
          <span>DRI :</span> {data.DRI}
        </p>
        <p>
          <span>DEF :</span> {data.DEF}
        </p>
        <p>
          <span>PHY :</span> {data.PHY}
        </p>
      </div>
    </div>
  );
}

export default MyTooltip;
