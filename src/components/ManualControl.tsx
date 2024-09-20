import { useState } from "react";
import { getSocketConnection } from "../helpers/websocket";
import GyroControl from "./GyroControl";
import SettingsForm from "./SettingsForm";

const ManualControl = () => {
  //   const [robotIp, setRobotIp] = React.useState<string>("");

  const [ws, setWs] = useState<WebSocket | null>(null);

  function connect() {
    const robotIp = window.localStorage.getItem("robotIp");
    if (!robotIp) {
      return;
    }
    const newWs = getSocketConnection(robotIp);
    newWs.onopen = () => {
      setWs(newWs);
    };
  }

  function disconnect() {
    if (ws) {
      ws.close();
      setWs(null);
    }
  }

  console.log(ws?.readyState);

  return (
    <div>
      {!ws || ws?.readyState !== ws?.OPEN ? (
        <button
          onClick={() => connect()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect
        </button>
      ) : (
        <button
          onClick={() => disconnect()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Disconnect
        </button>
      )}

      <SettingsForm />
      {ws && ws?.readyState === ws?.OPEN && <GyroControl ws={ws} />}
    </div>
  );
};

export default ManualControl;
