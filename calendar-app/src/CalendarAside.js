import React, { useState } from 'react';
import { format } from 'date-fns'
import { enUS, pt } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import { Button, Popover } from 'antd';
import 'react-nice-dates/build/style.css'

import EventItemPopover from './EventItemPopover';
import './CalendarAside.css';

function CalendarAside({ date, setDate }) {
    
    const content = (
        <EventItemPopover 
            eventItem={null}
        />
      );
    
    return (
        <div className="calendarAside">

            <DatePickerCalendar date={date} onDateChange={setDate} locale={enUS} />

            <Popover placement="bottomLeft" content={content} trigger="click" >
                <Button className="calendarAside__addEvent" type="primary" size="large">Create Event</Button>
            </Popover>

            {/* <h2>Tags</h2> */}
            
        </div>
    );
}

export default CalendarAside;