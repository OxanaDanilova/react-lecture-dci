import React, { useState } from "react";
import Light from "../Light/Light";
import { Button } from "react-bootstrap";
import "./Room.scss";

function Room(props) {
  const [isLightOn, setLight] = useState(false);
  const clickHandler = () => {
    setLight(!isLightOn);
  };

  const luminosity = isLightOn ? "lit" : "dark";
  const buttonText = isLightOn ? "Turn me down" : "Light me up";

  return (
    <div className="room">
      <div>
        <Light luminosity={luminosity} />
        <Button onClick={clickHandler} className="light-button" variant="light">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default Room;
