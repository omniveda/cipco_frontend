import React, { useState, useEffect } from 'react';

const RnDInnovation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const researchAreas = [
    {
      icon: "🔬",
      title: "In-house R&D Unit",
      description: "State-of-the-art research facilities with cutting-edge technology for pharmaceutical innovation"
    },
    {
      icon: "🌡️",
      title: "Stability Chambers",
      description: "Advanced climate-controlled chambers for comprehensive stability testing and studies"
    },
    {
      icon: "🧪",
      title: "Formulation Innovation",
      description: "Pioneering new drug formulations for enhanced efficacy and patient compliance"
    },
    {
      icon: "⚖️",
      title: "Bioequivalence Studies",
      description: "Rigorous bioequivalence testing ensuring product quality and therapeutic equivalence"
    }
  ];

  const complianceAreas = [
    {
      icon: "🏛️",
      title: "CDSCO Compliance",
      description: "Full compliance with Central Drugs Standard Control Organization regulations"
    },
    {
      icon: "🌍",
      title: "WHO Standards",
      description: "Adherence to World Health Organization quality and safety standards"
    },
    {
      icon: "📜",
      title: "TRIPS Agreement",
      description: "Compliance with Trade-Related Aspects of Intellectual Property Rights"
    },
    {
      icon: "✅",
      title: "Quality Assurance",
      description: "Comprehensive quality management systems ensuring regulatory compliance"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={{...styles.hero, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <h1 style={styles.title}>R&D and Innovation</h1>
        <p style={styles.subtitle}>
          Pioneering pharmaceutical research and development with cutting-edge technology and unwavering commitment to quality
        </p>
      </div>

      {/* Research Areas */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Research Capabilities</h2>
        <div style={styles.grid}>
          {researchAreas.map((area, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div style={styles.cardIcon}>{area.icon}</div>
              <h3 style={styles.cardTitle}>{area.title}</h3>
              <p style={styles.cardDescription}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Regulatory Compliance</h2>
        <div style={styles.grid}>
          {complianceAreas.map((area, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 100 + 400}ms`
              }}
            >
              <div style={styles.cardIcon}>{area.icon}</div>
              <h3 style={styles.cardTitle}>{area.title}</h3>
              <p style={styles.cardDescription}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Innovation Stats */}
      <div style={styles.statsSection}>
        <h2 style={styles.statsTitle}>Innovation Impact</h2>
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Research Projects</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>100+</div>
            <div style={styles.statLabel}>Scientists & Researchers</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>25+</div>
            <div style={styles.statLabel}>Patents Filed</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>15+</div>
            <div style={styles.statLabel}>International Collaborations</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Join Our Innovation Journey</h2>
        <p style={styles.ctaText}>
          Partner with us to drive pharmaceutical innovation and make a difference in global healthcare
        </p>
        <button style={styles.ctaButton}>Collaborate with Us</button>
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
    marginBottom: '80px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  card: {
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'all 0.6s ease-out',
    border: '1px solid #e0e0e0',
  },
  cardIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.4rem',
    color: '#2e7d32',
    marginBottom: '15px',
    fontWeight: '600',
  },
  cardDescription: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  statsSection: {
    background: 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)',
    padding: '60px 30px',
    borderRadius: '20px',
    marginBottom: '60px',
    color: 'white',
    textAlign: 'center',
  },
  statsTitle: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  statLabel: {
    fontSize: '1.1rem',
    opacity: '0.9',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '60px 30px',
    background: '#f8f9fa',
    borderRadius: '20px',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    color: '#2e7d32',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  ctaText: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
    maxWidth: '500px',
    margin: '0 auto 30px',
  },
  ctaButton: {
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

export default RnDInnovation;
