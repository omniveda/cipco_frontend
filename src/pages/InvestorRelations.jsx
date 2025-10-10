import React, { useState, useEffect } from 'react';

const InvestorRelations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={{...styles.hero, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <h1 style={styles.title}>Investor Relations</h1>
        <p style={styles.subtitle}>
          Committed to transparency and accountability in our financial reporting and corporate governance.
        </p>
      </div>

      {/* Financials Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Financials</h2>
        <ul style={styles.financialsList}>
          <li style={styles.financialsItem}>Quarterly/Annual Reports</li>
          <li style={styles.financialsItem}>Investor Presentations</li>
          <li style={styles.financialsItem}>Audited Financials</li>
          <li style={styles.financialsItem}>Stock Price & Performance Graph</li>
        </ul>
      </div>

      {/* Corporate Governance Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Corporate Governance</h2>
        <ul style={styles.governanceList}>
          <li style={styles.governanceItem}>Board Committees (Audit, CSR, NRC)</li>
          <li style={styles.governanceItem}>Meeting notices & outcome summaries</li>
        </ul>
      </div>

      {/* Disclosures & Filings Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Disclosures & Filings</h2>
        <ul style={styles.disclosuresList}>
          <li style={styles.disclosuresItem}>SEBI/Stock Exchange announcements</li>
          <li style={styles.disclosuresItem}>Shareholding pattern</li>
          <li style={styles.disclosuresItem}>Corporate announcements</li>
        </ul>
      </div>

      {/* Policies Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Policies</h2>
        <ul style={styles.policiesList}>
          <li style={styles.policiesItem}>Code of Conduct for Board/Senior Management</li>
          <li style={styles.policiesItem}>Whistleblower Policy</li>
          <li style={styles.policiesItem}>Risk Management Policy</li>
          <li style={styles.policiesItem}>Insider Trading Policy</li>
        </ul>
      </div>

      {/* Shareholder Info Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Shareholder Information</h2>
        <ul style={styles.shareholderList}>
          <li style={styles.shareholderItem}>Registrar & Transfer Agent (RTA) contact</li>
          <li style={styles.shareholderItem}>FAQ on demat, transmission, IEPF claims</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
    transition: 'all 0.8s ease-out',
  },
  title: {
    fontSize: '3.5rem',
    color: '#2e7d32',
    marginBottom: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  section: {
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
  financialsList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  financialsItem: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '10px 0',
    padding: '10px',
    background: '#f8f9fa',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  governanceList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  governanceItem: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '10px 0',
    padding: '10px',
    background: '#f8f9fa',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  disclosuresList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  disclosuresItem: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '10px 0',
    padding: '10px',
    background: '#f8f9fa',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  policiesList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  policiesItem: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '10px 0',
    padding: '10px',
    background: '#f8f9fa',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  shareholderList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  shareholderItem: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '10px 0',
    padding: '10px',
    background: '#f8f9fa',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
};

export default InvestorRelations;
