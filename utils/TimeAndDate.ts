const getTimeSinceUpdate = (dateString: string): string => {
  const lastUpdatedDate = new Date(dateString);
  const currentDate = new Date();
  const lastUpdatedMs = lastUpdatedDate.getTime();
  const currentDateMs = currentDate.getTime();
  const difference = currentDateMs - lastUpdatedMs;

  const hoursSinceUpdate = difference / 1000 / 3600;
  const minutesSinceUpdate = difference / 3600000;
  if (hoursSinceUpdate > 24) {
    const daysSinceUpdate = hoursSinceUpdate / 24;
    if (daysSinceUpdate.toFixed(0) === '1') {
      return `Last updated a day ago`;
    }
    return `Last updated ${daysSinceUpdate.toFixed(0)} days ago`;
  }
  if (hoursSinceUpdate > 1) {
    return `Last updated ${hoursSinceUpdate.toFixed(0)} hours ago`;
  }
  if (hoursSinceUpdate < 1) {
    if (minutesSinceUpdate < 1) {
      return `Last updated a minute ago`;
    }
    return `Last updated ${minutesSinceUpdate.toFixed(0)} minutes ago`;
  }

  return `Request an update`;
};

export default getTimeSinceUpdate;
