import { useEffect, useState } from "react";
import ControlsState from "../models/ControlsState";

const GyroControl = (props: { ws: WebSocket }) => {
  const { ws } = props;
  //   const deviceOrientation = useDeviceOrientation();

  const [controls, setControls] = useState<ControlsState>({ s: 0, m: 0 });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setControls((prevControls) => ({
          ...prevControls,
          s: prevControls.s + 5,
        }));
      }
      if (event.key === "ArrowRight") {
        setControls((prevControls) => ({
          ...prevControls,
          s: prevControls.s - 5,
        }));
      }
      if (event.key === " ") {
        setControls((prevControls) => ({
          ...prevControls,
          m: 0,
        }));
      }
      if (event.key === "ArrowUp") {
        setControls((prevControls) => ({
          ...prevControls,
          m: prevControls.m + 3,
        }));
      }
      if (event.key === "ArrowDown") {
        setControls((prevControls) => ({
          ...prevControls,
          m: prevControls.m - 3,
        }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //   useEffect(() => {
  //     setControls({
  //       s: deviceOrientation + keyboardSteeringPosition,
  //       m: 0,
  //     });
  //   }, [deviceOrientation, keyboardSteeringPosition]);

  useEffect(() => {
    if (ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify(controls));
    }
  }, [controls, ws]);

  return (
    <div>
      <code>Stearing: {controls.s}</code>
      <code>Motor: {controls.m}</code>
    </div>
  );
};

export default GyroControl;
