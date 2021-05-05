import React, { useState } from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { Popover } from 'antd';
import 'antd/dist/antd.css'; 
import 'antd/lib/popover/style/index.css'

import EventItemPopover from './EventItemPopover';
import './CalendarByDay.css';

function CalendarByDay({ date, events}) {
    const [selectedEvent, setSelectedEvent] = useState(null);
    
    const content = (
        <EventItemPopover 
            eventItem={selectedEvent}
        />
      );
    
    return (
        <div className="calendarByDay" >
            {events.map(event => (
                <div className="calendarByDay__event" id={event.id}>
                    <div className="calendarByDay__eventRow">
                        <hr />
                        <p>{format(new Date(event.startDate),  'HH:mm')}</p>
                        <hr />
                    </div>

                    <Popover placement="bottomLeft" content={content} trigger="click" onClick={() => setSelectedEvent(event)}>
                        <div className="calendarByDay__eventBlock" style={{backgroundColor: event.colorTag}}>
                            <p>{event.name}</p>
                        </div>
                    </Popover>

                </div>
                
            ))}
        </div>
    );
}

export default CalendarByDay;