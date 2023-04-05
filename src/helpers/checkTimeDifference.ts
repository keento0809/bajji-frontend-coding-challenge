export const checkTimeDifferences = (unix_timestamp: number) => {
  const now = new Date();
  const timeStamp = new Date(unix_timestamp * 1000);
  const diffTimeStamp = now.getTime() - timeStamp.getTime();
  const diff = Math.abs(diffTimeStamp) / (60 * 60 * 1000);

  if (diff >= 24) {
    return Math.floor(diff / 24) + " days ago";
  } else if (diff < 24 && diff >= 1) {
    return Math.floor(diff) + " hours ago";
  } else if (diff < 1 && diff > 0) {
    return Math.floor(diff * 60) === 0
      ? "now"
      : Math.floor(diff * 60) + " minutes ago";
  } else {
    return;
  }
};
