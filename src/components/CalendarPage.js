import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const token = localStorage.getItem('token'); // Mendapatkan token dari localStorage
            try {
                const response = await axios.get('http://localhost:3000/email/fetch', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Menambahkan token di header Authorization
                    },
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching calendar events', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2 className="text-center">Calendar</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default CalendarPage;
