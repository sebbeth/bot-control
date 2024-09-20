import { useEffect, useState } from "react";

const useDeviceOrientation = () => {
  const [deviceOrientation, setDeviceOrientation] = useState(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      setDeviceOrientation(event.beta || 0);
    };

    window.addEventListener("deviceorientation", handleOrientation, true);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  return deviceOrientation;
};

export default useDeviceOrientation;
