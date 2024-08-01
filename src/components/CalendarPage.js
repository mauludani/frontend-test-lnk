import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarPage.css';

const localizer = momentLocalizer(moment);

const events = [
    {
        title: 'Meeting',
        start: new Date(),
        end: new Date(),
    },
    {
        title: 'Vacation',
        start: new Date(2024, 6, 10),
        end: new Date(2024, 6, 20),
    },
];

const CalendarPage = () => {
    const [calendarEvents] = useState(events);

    return (
        <div className="calendar-page">
            <h2 className="text-center">Calendar</h2>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default CalendarPage;
