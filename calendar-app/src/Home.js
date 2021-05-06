import React, { useState } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import CalendarSection from './CalendarSection';
import CalendarAside from './CalendarAside';
import './Home.css';

function Home() {
  const [date, setDate] = useState(null);
  const [refresh, setRefresh] = useState(false);
  
  return (
      <div className="home">
        <Header />

        <div className="home__page">
            <Sidebar />
            <CalendarSection date={date} setDate={setDate} refresh={refresh} setRefresh={setRefresh}/>
            <CalendarAside date={date} setDate={setDate} refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
    
  );
}

export default Home;
