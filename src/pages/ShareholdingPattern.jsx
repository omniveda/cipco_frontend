import React, { useState, useEffect } from 'react';

const ShareholdingPattern = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
      useEffect(()=>{
        const handleResize = () =>{
          const mobile=window.innerWidth < 768;
          setIsMobile(mobile);
          if(!mobile){
            setIsMobile(false);
          }
        };
        window.addEventListener('resize',handleResize);
        return()=>window.removeEventListener('resize',handleResize);
      },[]);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const promoterHoldings = [
    { name: "GAURAV JHAWAR", pan: "AFPPJ7336A", shares: "56,07,047", percentage: "49.00%" },
    { name: "KESHAV JHAWAR", pan: "CAUPJ4029C", shares: "28,60,738", percentage: "25.00%" },
    { name: "SHRIPATI JHAWAR", pan: "CGQPJ7369P", shares: "28,60,738", percentage: "25.00%" },
    { name: "MAHAVIR BIRLE", pan: "AZUPB2250N", shares: "28,608", percentage: "0.25%" },
    { name: "LAKAHAN LAL CHOUHAN", pan: "AYIPC0556D", shares: "28,608", percentage: "0.25%" },
    { name: "PUNAHSHRI JHAWAR", pan: "AJXPJ3841L", shares: "28,608", percentage: "0.25%" },
    { name: "VAISHALI JHAWAR", pan: "AFPPJ7334C", shares: "28,608", percentage: "0.25%" }
  ];

  const summary = {
    totalShares: "1,14,42,955",
    promoters: "100%",
    public: "0%",
    nonPublic: "0%",
  };


  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #f0fdf4)',
      marginTop:isMobile?'70px':'',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '3rem 1rem'
      }}>

        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)'
        }}>
          <h1 style={{
            fontSize: isMobile?'2rem':'3.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #305d94, #33b0c5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            CIPCO LIMITED – Shareholding Pattern
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#4b5563', marginTop: '1rem' }}>
            As per Regulation 31 of SEBI (LODR) – Equity Shareholding Disclosure
          </p>
        </div>

        {/* Company Overview */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#305d94', marginBottom: '1rem' }}>
            Company Details
          </h2>
          <ul style={{ color: '#374151', fontSize: '1.125rem', lineHeight: '1.75' }}>
            <li>Registered Address: KH No. 351, 361, Pigdamber, Mhow, Indore – 453331 (MP), India</li>
            <li>Phone: +91 7869920311 | Email: info@cipcopharma.com</li>
            <li>CIN: U21002MP2025PLC076564</li>
            <li>Security Type: Equity | Total Shares: {summary.totalShares}</li>
          </ul>
        </div>

        {/* Summary Section */}
        <div style={{
          background: 'linear-gradient(to right, #33b0c5, #305d94)',
          color: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
            Summary of Shareholding
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{summary.promoters}</h3>
              <p>Promoters & Promoter Group</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{summary.public}</h3>
              <p>Public Shareholding</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{summary.nonPublic}</h3>
              <p>Non-Promoter Non-Public</p>
            </div>
          </div>
        </div>

        {/* Promoter Holdings Table */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: '#305d94',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Promoter & Promoter Group Shareholding
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '1px solid #d1d5db',
              textAlign: 'left'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#305d94', color: 'white' }}>
                  <th style={{ padding: '1rem', border: '1px solid #d1d5db' }}>Name</th>
                  <th style={{ padding: '1rem', border: '1px solid #d1d5db' }}>PAN</th>
                  <th style={{ padding: '1rem', border: '1px solid #d1d5db' }}>No. of Shares</th>
                  <th style={{ padding: '1rem', border: '1px solid #d1d5db' }}>Percentage (%)</th>
                </tr>
              </thead>
              <tbody>
                {promoterHoldings.map((person, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 ? '#f9fafb' : 'white' }}>
                    <td style={{ padding: '1rem', border: '1px solid #d1d5db' }}>{person.name}</td>
                    <td style={{ padding: '1rem', border: '1px solid #d1d5db' }}>{person.pan}</td>
                    <td style={{ padding: '1rem', border: '1px solid #d1d5db' }}>{person.shares}</td>
                    <td style={{ padding: '1rem', border: '1px solid #d1d5db' }}>{person.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Declaration Section */}
        <div style={{
          background: 'linear-gradient(to right, #fef3c7, #fde68a)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>
            Declaration by the Listed Entity
          </h2>
          <ul style={{ listStyle: 'none', fontSize: '1.125rem', color: '#78350f', lineHeight: '1.75' }}>
            <li>• No partly paid shares have been issued.</li>
            <li>• No convertible securities or warrants are outstanding.</li>
            <li>• No depository receipts or locked-in shares.</li>
            <li>• No promoter shares are pledged or encumbered.</li>
          </ul>
        </div>

        {/* PDF Button Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => window.open('/src/assets/document/Shareholding Pattern.pdf', '_blank')}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '1rem 2rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#305d94'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#305d94'}
          >
            View Full Shareholding Pattern PDF
          </button>
        </div>

      </div>
    </div>
  );
};

export default ShareholdingPattern;
