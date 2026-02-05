import React from 'react';
import CalendarHero from '../../components/sections/tools/calendar/CalendarHero';
import CalendarWidget from '../../components/sections/tools/calendar/CalendarWidget';

const Calendar = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <CalendarHero />
            <CalendarWidget />
        </div>
    );
};

export default Calendar;
