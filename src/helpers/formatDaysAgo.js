export default function formatDaysAgo(days) {
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";

  let years = 0;
  let months = 0;
  let weeks = 0;

  if (Math.floor(days / 365) > 0) {
    years = Math.floor(days / 365);
    days = Math.floor(days % 365);
  }

  if (Math.floor(days / 30) > 0) {
    months = Math.floor(days / 30);
    days = Math.floor(days % 30);
  }

  if (Math.floor(days / 7) > 0) {
    weeks = Math.floor(days / 7);
    days = Math.floor(days % 7);
  }

  let daysAgoString = `${days} days`;
  let weeksAgoString = null;
  let monthsAgoString = null;
  let yearsAgoString = null;

  if (years >= 1) {
    yearsAgoString = years === 1 ? "1 year" : `${years} years`;
  } else if (months >= 1) {
    monthsAgoString = months === 1 ? "1 month" : `${months} months`;
  } else if (weeks >= 1) {
    weeksAgoString = weeks === 1 ? "1 week" : `${weeks} weeks`;
  }

  const timeAgo = [];

  if (yearsAgoString) {
    timeAgo.push(yearsAgoString);
  }
  if (monthsAgoString) {
    timeAgo.push(monthsAgoString);
  }
  if (weeksAgoString) {
    timeAgo.push(weeksAgoString);
  }
  if (daysAgoString && days > 0) {
    timeAgo.push(daysAgoString);
  }

  return timeAgo.join(", ") + " ago";
}
