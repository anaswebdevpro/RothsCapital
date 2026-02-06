import React from 'react';
import CalendarHero from '../../components/sections/tools/calendar/CalendarHero';
import CalendarWidget from '../../components/sections/tools/calendar/CalendarWidget';
import CalendarFeatures from '../../components/sections/tools/calendar/CalendarFeatures';
import CalendarGuide from '../../components/sections/tools/calendar/CalendarGuide';
import CalendarCTA from '../../components/sections/tools/calendar/CalendarCTA';

const Calendar = () => {
    return (
        <div>
            <CalendarHero />
            <CalendarWidget />
            <CalendarFeatures />
            <CalendarGuide />
            <CalendarCTA />
        </div>
    );
};

export default Calendar;
