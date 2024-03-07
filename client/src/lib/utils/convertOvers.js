export const convertOvers = (overs) => {
  if (overs !== null && overs !== undefined) {
    const oversSplit = overs.toString().split(".");
    let mainOvers = parseInt(oversSplit[0], 10);
    let balls = oversSplit[1] ? parseInt(oversSplit[1], 10) : 0;

    if (balls >= 6) {
      const extraOvers = Math.floor(balls / 6);
      mainOvers += extraOvers;
      balls %= 6;
    }

    const formattedBalls = balls > 0 ? `.${balls}` : ".0";

    return `${mainOvers}${formattedBalls}`;
  }

  return null;
};
