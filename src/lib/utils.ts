import "moment-timezone";
import moment from "moment";

export const getMomentFormatted = ({ format }: { format: string }) => {
  return moment().tz("America/Bogota").format(format);
};

export const getCurrentTimeInfo = () => {
  const currentMoment = getMomentFormatted({ format: "HH:mm:ss" });
  const [hours, minutes, seconds] = currentMoment.split(":");
  return {
    hours,
    minutes,
    seconds,
  };
};
