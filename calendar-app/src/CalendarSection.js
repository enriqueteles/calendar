import React from 'react';
import { format } from 'date-fns';
import { enUS, pt } from 'date-fns/locale';

import CalendarByDay from './CalendarByDay';
import './CalendarSection.css';

function CalendarSection({ date, setDate }) {
    const events = [
        {
          id: "6fc0abf8-36b1-49d9-924f-35b175c9bb8d",
          startDate: "2021-05-02T15:30:49-0300",
          endDate: "2021-05-02T20:30:49-0300",
          name: "Study with Ari",
          description: "nothing to add",
          tagId: null,
          ownerId: "0292d852-cc24-4c7f-98e8-fd6cd9e02bfb",
          created_at: null,
          updated_at: null,
          colorTag: "#F89E95"
        },
        {
          id: "6f3f1af8-19f1-47c3-9b72-7874db724705",
          startDate: "2021-05-02T20:30:49-0300",
          endDate: "2021-05-02T21:30:49-0300",
          name: "Dance",
          description: "dance in the rain",
          tagId: null,
          ownerId: "0292d852-cc24-4c7f-98e8-fd6cd9e02bfb",
          created_at: null,
          updated_at: null
        },
        {
          id: "f0fda343-0d88-488e-a151-589964d6b2d5",
          startDate: "2021-05-13T20:30:49-0300",
          endDate: "2021-05-02T14:30:49-0300",
          name: "Gardening",
          description: "",
          tagId: null,
          ownerId: "0292d852-cc24-4c7f-98e8-fd6cd9e02bfb",
          created_at: null,
          updated_at: null,
          colorTag: null
        }
      ]
    
    return (
        <div className="calendarSection">
            <h1>{date ? format(date, 'dd MMM, yyyy', { locale: enUS }) : 'Select a date'}</h1>
            
            <CalendarByDay day={date} events={events} />
        </div>
    );
}

export default CalendarSection;
