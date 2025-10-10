import React, { useState, useEffect } from 'react';

const Manufacturing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const manufacturingFeatures = [
    {
      title: "State-of-the-Art Facilities",
      description: "Our manufacturing plants are equipped with the latest technology and adhere to strict GMP standards.",
      icon: "🏭"
    },
    {
      title: "Quality Control",
      description: "Rigorous quality checks at every stage of production ensure product excellence.",
      icon: "🔍"
    },
    {
      title: "Research & Development",
      description: "Continuous innovation drives our commitment to developing better pharmaceutical solutions.",
      icon: "🧪"
    },
    {
      title: "Sustainability",
      description: "Environmentally conscious manufacturing practices for a healthier planet.",
      icon: "🌱"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={{...styles.hero, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <h1 style={styles.title}>Manufacturing Excellence</h1>
        <p style={styles.subtitle}>
          Precision, Quality, and Innovation in Pharmaceutical Manufacturing
        </p>
      </div>

      {/* Features Grid */}
      <div style={styles.featuresGrid}>
        {manufacturingFeatures.map((feature, index) => (
          <div 
            key={index}
            style={{
              ...styles.featureCard,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div style={styles.featureIcon}>{feature.icon}</div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div style={styles.statsSection}>
        <h2 style={styles.statsTitle}>Our Manufacturing Impact</h2>
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Products Manufactured</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>Quality Compliance</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>24/7</div>
            <div style={styles.statLabel}>Production Capacity</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Partner with Us?</h2>
        <p style={styles.ctaText}>
          Discover how our manufacturing capabilities can support your pharmaceutical needs.
        </p>
        <button style={styles.ctaButton}>Get in Touch</button>
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
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  },
  featureCard: {
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'all 0.6s ease-out',
    border: '1px solid #e0e0e0',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '1.5rem',
    color: '#2e7d32',
    marginBottom: '15px',
    fontWeight: '600',
  },
  featureDescription: {
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
  ctaButtonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(46, 125, 50, 0.4)',
  },
};

export default Manufacturing;
