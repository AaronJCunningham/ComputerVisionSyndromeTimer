export const formatAlarmMessage = (timer) => {
  return timer === 0 ? (
    <h1 className="alarm">Press Start</h1>
  ) : timer >= 1200 ? (
    timer >= 1500 ? (
      <h1 className="alarm">Break</h1>
    ) : (
      <h1 className="alarm">Alarm</h1>
    )
  ) : (
    <h1 className="alarm">Working</h1>
  );
};
