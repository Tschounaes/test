import React, { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import objectSupport from "dayjs/plugin/objectSupport";
import { v4 as uuid } from "uuid";

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(objectSupport);

const Countdown = ({ additionalClassNames, withBreaks }) => {
  const [countdown, setCountdown] = useState(
    withBreaks ? ["Lädt..."] : "Lädt..."
  );

  const calculateTimeTillMerriage = useCallback(() => {
    const today = dayjs();
    const marriage = dayjs({
      year: 2024,
      month: 11 - 1, // months are 0 indexed
      day: 2,
      hour: 20,
      minute: 22,
      second: 0,
      millisecond: 0,
    });

    const dur = dayjs.duration(marriage.diff(today, "ms"));

    if (dur < 0 && withBreaks) {
      return [`Verheiratet seit ${marriage.format("YYYY")}`];
    } else if (dur < 0 && !withBreaks) {
      return `Verheiratet seit ${marriage.format("YYYY")}`;
    }

    const months = Math.floor(dur.asMonths());
    const days = Math.floor(dur.subtract(months, "months").asDays());
    const hours = Math.floor(
      dur.subtract(months, "months").subtract(days, "days").asHours()
    );
    const minutes = Math.floor(
      dur
        .subtract(months, "months")
        .subtract(days, "days")
        .subtract(hours, "hours")
        .asMinutes()
    );
    const secs = dur
      .subtract(months, "months")
      .subtract(days, "days")
      .subtract(hours, "hours")
      .subtract(minutes, "minutes")
      .asSeconds();

    let monthString = "";

    if (months === 1) {
      monthString = `${months} Monat`;
    } else if (months > 1) {
      monthString = `${months} Monate`;
    }

    let dayString = "";

    if (days === 1) {
      dayString = `${days} Tag`;
    } else if (days > 1) {
      dayString = `${days} Tage`;
    }

    let hourString = "";

    if (hours === 1) {
      hourString = `${hours} Stunde`;
    } else if (hours > 1) {
      hourString = `${hours} Stunden`;
    }

    let minuteString = "";

    if (minutes === 1) {
      minuteString = `${minutes} Minute`;
    } else if (minutes > 1) {
      minuteString = `${minutes} Minuten`;
    }

    let secString = "";

    if (Math.floor(secs) === 1) {
      secString = `${Math.floor(secs)} Sekunde`;
    } else if (Math.floor(secs) > 1) {
      secString = `${Math.floor(secs)} Sekunden`;
    }
    if (withBreaks) {
      return [
        monthString,
        dayString,
        hourString,
        minuteString,
        secString,
      ].filter((s) => s !== "");
    }
    return [
      "Noch ",
      monthString,
      dayString,
      hourString,
      minuteString,
      secString,
      " bis zur Hochzeit!",
    ]
      .filter((s) => s !== "")
      .join(" ");
  }, [withBreaks]);

  useEffect(() => {
    if (!setCountdown) {
      return;
    }

    const timeout = setTimeout(() => {
      setCountdown(calculateTimeTillMerriage());
    }, 1000);
    return () => clearTimeout(timeout);
  }, [countdown, setCountdown, calculateTimeTillMerriage]);

  return (
    <>
      {!withBreaks ? (
        <div className={additionalClassNames}>
          <div className="p-4">{countdown}</div>
        </div>
      ) : (
        <div className={additionalClassNames}>
          {countdown?.map((line) => {
            return <p key={uuid()}>{line}</p>;
          })}
        </div>
      )}
    </>
  );
};

export default Countdown;
