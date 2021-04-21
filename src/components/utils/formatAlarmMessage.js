export const formatAlarmMessage = (timer) => {
  return timer === 0 ? (
    <h1>Press Start</h1>
  ) : timer >= 1200 ? (
    timer >= 1500 ? (
      <h1>Break</h1>
    ) : (
      <h1>Alarm</h1>
    )
  ) : (
    <h1>Working</h1>
  );
};
