"use client";

import { useState, useEffect } from "react";
import { startOfMonth, endOfMonth, startOfWeek, addDays, isBefore, format, isSameMonth } from "date-fns";
import { Container, Grid, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { karla } from "app/layout"; // Ensure `karla` is correctly imported

import { TitleBox, BoxTitle, BoxDays, ActiveBoxTitle, ActiveDayBox } from "./styles"; // Import your custom styled components

const monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
const dayNamesFR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Calendar = () => {
  const [days, setDays] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYearState, setCurrentYearState] = useState(new Date().getFullYear());
  const [activeDay, setActiveDay] = useState(new Date());

  useEffect(() => {
    const generateCalendar = () => {
      const firstDayOfMonth = new Date(currentYearState, currentMonth, 1);
      const lastDayOfMonth = endOfMonth(firstDayOfMonth);

      // Find the first Monday of the week for the current month
      const firstMonday = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });

      let currentDate = firstMonday;
      const calendarDays = [];
      let week = [];

      // Fill the calendar until the end of the month
      while (isBefore(currentDate, lastDayOfMonth) || format(currentDate, "yyyy-MM-dd") === format(lastDayOfMonth, "yyyy-MM-dd")) {
        week.push(currentDate);
        if (week.length === 7) {
          calendarDays.push(week);
          week = [];
        }
        currentDate = addDays(currentDate, 1);
      }

      // If the last week isn't complete, add it to the calendar as well
      if (week.length > 0) {
        calendarDays.push(week);
      }

      // Fill next month's days if the last month ended before Sunday
      if (calendarDays[calendarDays.length - 1].length < 7) {
        let nextMonthDate = new Date(currentYearState, currentMonth + 1, 1);
        while (calendarDays[calendarDays.length - 1].length < 7) {
          calendarDays[calendarDays.length - 1].push(nextMonthDate);
          nextMonthDate = addDays(nextMonthDate, 1);
        }
      }

      setDays(calendarDays);
    };

    generateCalendar();
  }, [currentMonth, currentYearState]);

  const handleMonthChange = (delta) => {
    const newMonth = currentMonth + delta;
    if (newMonth < 0) {
      setCurrentMonth(11);
      setCurrentYearState(currentYearState - 1);
    } else if (newMonth > 11) {
      setCurrentMonth(0);
      setCurrentYearState(currentYearState + 1);
    } else {
      setCurrentMonth(newMonth);
    }
  };

  const isPreviousMonth = (day) => {
    // Check if the day is before the first day of the current month
    return isBefore(day, new Date(currentYearState, currentMonth, 1));
  };

  const isNextMonth = (day) => {
    // Check if the day is after the last day of the current month
    const lastDayOfMonth = endOfMonth(new Date(currentYearState, currentMonth, 1));
    return isBefore(lastDayOfMonth, day);
  };

  const isCurrentMonth = (day) => {
    // Check if the day is within the current month
    return isSameMonth(day, new Date(currentYearState, currentMonth, 1));
  };
  const isActiveDay = (day) => {
    // Check if the day is today
    return format(day, "yyyy-MM-dd") === format(activeDay, "yyyy-MM-dd");
  };

  return (
    <Grid className="pt-2 pb-2 pl-2 pr-2" item md={8} xs={12} style={{ backgroundColor: '#f7f7f7', borderRadius: '15px', padding: '30px 40px' }}>
      {/* Header with Month and Year */}
      <TitleBox style={{ display: 'flex' }}>
        <ArrowBackIosNewIcon sx={{ color: "grey.600" }} onClick={() => handleMonthChange(-1)} />
        <Typography
          variant="h2"
          style={{
            fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
            fontWeight: "300",
            color: 'rgb(140 140 140)',
            textAlign: "center"
          }}
        >
          {`${monthNames[currentMonth]} `}
          <span className={karla.className} style={{ fontWeight: '400', fontSize: '26px' }}>{currentYearState}</span>
        </Typography>
        <ArrowForwardIosIcon sx={{ color: "grey.600" }} onClick={() => handleMonthChange(1)} />
      </TitleBox>

      {/* Calendar Grid */}
      <Grid container spacing={0}>
        {/* Display the day names (header row) */}
        {dayNamesFR.map((day, index) => (
          <Grid xs={1.7} item key={index} style={{}}>
            <BoxTitle>{day}</BoxTitle>
          </Grid>
        ))}
        
        {/* Display the weeks */}
        {days.map((week, index) => (
          <Grid container item xs={12} key={index} spacing={0}>
            {week.map((day, dayIndex) => (
              <Grid xs={1.7} item key={dayIndex}>
                {
                    isPreviousMonth(day) || isNextMonth(day) ? (
                        <BoxDays>
                            {day ? format(day, 'd') : ''}
                        </BoxDays>
                    ) : isActiveDay(day) ? (<ActiveDayBox>
                            {day ? format(day, 'd') : ''}
                    </ActiveDayBox>) : 
                    (<ActiveBoxTitle>
                            {day ? format(day, 'd') : ''}
                    </ActiveBoxTitle>)
                }
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Calendar;
