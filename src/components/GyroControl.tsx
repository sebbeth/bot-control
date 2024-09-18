import useDeviceOrientation from "../hooks/useDeviceOrientation";

const GyroControl = () => {
  const steeringPosition = useDeviceOrientation();

  return (
    <div>
      <code>Stearing: {steeringPosition}</code>
    </div>
  );
};

export default GyroControl;
