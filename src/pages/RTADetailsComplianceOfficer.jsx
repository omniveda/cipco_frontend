import React, { useState, useEffect } from 'react';

const RTADetailsComplianceOfficer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='mt-[100px]'>
    <div style={{ minHeight: '100vh', padding: '2rem', background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)' }}>
      <h1 style={{ color: '#1e40af', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', animation: 'fadeInUp 1s ease-out' }}>RTA Details & Compliance Officer</h1>

      <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', animation: 'fadeInLeft 1s ease-out 0.2s both' }}>
        <h2 style={{ color: '#4338ca', fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>RTA DETAILS</h2>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}><strong style={{ color: '#374151' }}>Name:</strong> Ankit Consultancy Private Limited</p>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}>Registrar & Share Transfer Agent</p>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}>(SEBI REG. No. INR 000000767)</p>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}><strong style={{ color: '#374151' }}>Address:</strong> 60, Electronic Complex, Pardeshipura, Indore (M.P.) 452010</p>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}><strong style={{ color: '#374151' }}>Tel.:</strong> 0731-4065799, 4065797</p>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}><strong style={{ color: '#374151' }}>Fax:</strong> 0731-4065798</p>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}><strong style={{ color: '#374151' }}>E-mail:</strong> investor@ankitonline.com</p>
      </div>

      <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', animation: 'fadeInRight 1s ease-out 0.4s both' }}>
        <h2 style={{ color: '#4338ca', fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>Contact details of the Compliance Officer for Grievance Redressal</h2>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}><strong style={{ color: '#374151' }}>Name:</strong> CS Dishi Badkul</p>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}><strong style={{ color: '#374151' }}>Contact:</strong> +91 7869920311</p>
        <p style={{ marginBottom: '0.5rem', color: '#374151', fontSize: '1.1rem', lineHeight: '1.6' }}><strong style={{ color: '#374151' }}>Email:</strong> compliance@cipcopharma.com</p>
      </div>
    </div>
    </section>
  );
};

export default RTADetailsComplianceOfficer;
