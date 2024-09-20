import React, { useEffect, useState } from "react";

const SettingsForm = () => {
  const [robotIp, setRobotIp] = useState("");

  useEffect(() => {
    const storedIp = window.localStorage.getItem("robotIp");
    if (storedIp) {
      setRobotIp(storedIp);
    }
  }, []);

  const handleIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRobotIp(value);
    window.localStorage.setItem("robotIp", value);
  };

  return (
    <div>
      <label htmlFor="ipAddress">IP Address:</label>
      <input
        type="text"
        className="border border-gray-400"
        name="ipAddress"
        pattern="\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b"
        value={robotIp}
        onChange={handleIpChange}
      />
    </div>
  );
};

export default SettingsForm;
