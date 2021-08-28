export const formatDate = (comment) => {
  const date = new Date(comment);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
};

export const formatHour = (comment) => {
  const hour = new Date(comment);
  const heure = hour.getHours();
  let minutes = hour.getMinutes();

  if (heure < 10) {
    heure = `0${heure}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${heure}h${minutes}`;
};
