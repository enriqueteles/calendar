import React, { useState, useEffect } from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { Popover } from 'antd';
import 'antd/dist/antd.css'; 
import 'antd/lib/popover/style/index.css'

import EventItemPopover from '../EventItemPopover/EventItemPopover';
import './CalendarByDay.css';

function CalendarByDay({ 
    date,
    events,
    refresh,
    setRefresh
}) {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [dayEvents, setDayEvents] = useState([]);
    
    const content = (
        <EventItemPopover 
            eventItem={selectedEvent}
            refresh={refresh}
            setRefresh={setRefresh}
        />
      );

    useEffect(() => {
        let sortedEvents = events.filter(event => {
            let dayStartEvent = new Date(event.startDate).setHours(0, 0, 0);
            let dayEndEvent = new Date(event.endDate).setHours(23, 59, 59);

            let daySelected = new Date(date).setHours(23, 59, 59);
        
            return (daySelected >= dayStartEvent && daySelected <= dayEndEvent);
        })
        
        sortedEvents.sort((a, b) => {
            
            let aTime = 0;
            let bTime = 0;
            if(new Date(date).getDate() === new Date(a.startDate).getDate()) {
                // event starts on the day
                aTime = new Date(a.startDate).valueOf();
            } else {
                // event starts before the day selected
                aTime = new Date(a.startDate).setHours(0, 0, 0);
            }
            if(new Date(date).getDate() === new Date(b.startDate).getDate()) {
                bTime = new Date(b.startDate).valueOf();
            } else {
                bTime = new Date(b.startDate).setHours(0, 0, 0);
            }
            
            if(aTime >= bTime)
                return 1;
            else if (aTime < bTime)
                return -1;
            return 0;
        })
        
        setDayEvents(sortedEvents);
        console.log(sortedEvents)

    }, [events, date])


    
    return (
        <div className="calendarByDay" >
            {dayEvents.map(event => (
                <div className="calendarByDay__event" id={event.id}>
                    <div className="calendarByDay__eventRow">
                        <hr />
                        <p>{(new Date(date).getDate() === new Date(event.startDate).getDate()) ? format(new Date(event.startDate),  'HH:mm') : '00:00'}</p>
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