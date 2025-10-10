import React, { useState, useEffect } from 'react';

const PCDFranchise = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={{...styles.hero, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <h1 style={styles.title}>PCD & Franchise Business</h1>
        <p style={styles.subtitle}>
          Join Cipco’s legacy of trusted excellence. Grow with a brand built on ethics and performance.
        </p>
      </div>

      {/* Benefits Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Benefits of Partnering with Cipco</h2>
        <ul style={styles.benefitsList}>
          <li style={styles.benefitItem}>Monopoly Rights</li>
          <li style={styles.benefitItem}>Low Investment</li>
          <li style={styles.benefitItem}>Promotional Support</li>
        </ul>
      </div>

      {/* Franchise Application Section */}
      <div style={styles.applicationSection}>
        <h2 style={styles.applicationTitle}>Become a Franchise Partner</h2>
        <p style={styles.applicationText}>
          Fill out our online franchise application form to get started on your journey with Cipco.
        </p>
        <button style={styles.applicationButton}>Apply Now</button>
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
  benefitsList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  benefitItem: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '10px 0',
    padding: '10px',
    background: '#f8f9fa',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  applicationSection: {
    textAlign: 'center',
    padding: '40px',
    background: '#f8f9fa',
    borderRadius: '20px',
  },
  applicationTitle: {
    fontSize: '2.5rem',
    color: '#2e7d32',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  applicationText: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
  },
  applicationButton: {
    background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)',
    color: 'white',
    padding: '15px 40px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(46, 125, 50, 0.3)',
  },
};

export default PCDFranchise;
