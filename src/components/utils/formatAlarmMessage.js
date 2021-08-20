export const formatAlarmMessage = (timer) => {
  return timer === 0 ? (
    <h1 className="alarm">Press Start</h1>
  ) : timer >= 1200 ? (
    <h1 className="alarm">Break Time</h1>
  ) : (
    <h1 className="alarm">Work</h1>
  );
};
