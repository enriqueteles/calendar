import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import CalendarSection from '../../components/CalendarSection/CalendarSection';
import CalendarAside from '../../components/CalendarAside/CalendarAside';
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
