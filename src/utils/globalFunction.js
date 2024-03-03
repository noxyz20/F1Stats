import dayjs from "dayjs";

export const parseDateGMT = (date, gmtOffset) => {
  let offset = parseInt(gmtOffset.split(":")[0]);
  return dayjs(date).add(offset, "hour");
};

export const parseSecondeToLapTime = (seconde) => {
  let min = Math.floor(seconde / 60);
  let sec = Math.floor(seconde % 60);
  let ms = Math.floor((seconde * 1000) % 1000);

  // Add leading zero to seconds if its length is 1
  sec = sec.toString().padStart(2, '0');
  ms = ms.toString().padStart(3, '0');

  return `${min}:${sec}:${ms}`;
};