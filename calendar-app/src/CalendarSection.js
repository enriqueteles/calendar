import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { enUS, pt } from 'date-fns/locale';
import axios from 'axios';

import CalendarByDay from './CalendarByDay';
import './CalendarSection.css';

function CalendarSection({ date, setDate, refresh, setRefresh }) {
	const [events, setEvents] = useState([]);
	
	useEffect(async () => {
		await axios.get('/events')
			.then(res => {
				setEvents(res.data);
				setRefresh(false);

				// filter by date selected
			})
			.catch(err => {
				console.log(err);
			})
	}, [refresh]);
    
    return (
        <div className="calendarSection">
            <h1>{date ? format(date, 'dd MMM, yyyy', { locale: enUS }) : 'Select a date'}</h1>
            
            <CalendarByDay date={date} events={events} refresh={refresh} setRefresh={setRefresh} />
        </div>
    );
}

export default CalendarSection;
