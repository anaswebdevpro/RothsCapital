import React from 'react';
import ContactHero from '../../components/sections/company/contact/ContactHero';
import ContactGrid from '../../components/sections/company/contact/ContactGrid';
import ContactOffice from '../../components/sections/company/contact/ContactOffice';
import ContactForm from '../../components/sections/company/contact/ContactForm';

const Contact = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <ContactHero />
            <ContactGrid />
            <ContactOffice />
            <ContactForm />
        </div>
    );
};

export default Contact;
