// Player component represents an individual player card
import React from "react";
import { Card, Container } from "react-bootstrap";

function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imgURL,
  onClick,
}) {
  // Styles for the player card
  const cardStyling = {
    width: "15rem",
    border: "1px solid grey",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
    borderRadius: "90px 0",
    backgroundColor: "hsl(240, 100%, 1%)",
  };
  const imageContainer = {
    background: "url(https://i.ytimg.com/vi/vNsCCE8gZSw/maxresdefault.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: 50,
  };
  const imgStylling = {
    border: "2px solid yallow",
    width: "90%",
    height: "200px",
    objectFit: "contain",
  };
  const numStyling = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textShadow: "0 0 10px white",
  };
  const PDcontainer = {
    all: "unset",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    gap: "20px",
    top: 10,
    right: 10,
    color: "white",
  };
  const teamLogo = {
    width: "50px",
    height: "50px",
    marginRight: "5px",
  };
  const countryLogo = {
    width: "60px",
    height: "auto",
  };

  return (
    // Player card structure
    <Card style={cardStyling} onClick={onClick}>
      <Container style={imageContainer}>
        <Card.Img variant="top" src={imgURL} style={imgStylling} />
      </Container>
      <div className="PDC" style={PDcontainer}>
        <p className="m-0" style={numStyling}>
          {jerseyNumber}
        </p>
        <img src={nationality} alt="county flag" style={countryLogo} />
        <img src={team} alt="team logo" style={teamLogo} />
      </div>
      <Card.Body className="text-white">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <b>Age:</b> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;
