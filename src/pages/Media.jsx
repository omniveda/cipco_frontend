import React, { useState, useEffect } from 'react';

const Media = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('news');
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

  const newsItems = [
    {
      id: 1,
      title: "Cipco Launches New Manufacturing Facility",
      date: "October 15, 2023",
      summary: "Cipco has inaugurated a new state-of-the-art manufacturing facility, enhancing our production capabilities and ensuring the highest quality standards.",
      image: "🏭",
      category: "news"
    },
    {
      id: 2,
      title: "Partnership with Global Health Organization",
      date: "September 20, 2023",
      summary: "We are proud to announce our partnership with a leading global health organization to improve access to essential medicines worldwide.",
      image: "🤝",
      category: "news"
    },
    {
      id: 3,
      title: "Innovation in Pharmaceutical Research",
      date: "August 5, 2023",
      summary: "Our research team has made significant breakthroughs in developing new formulations that promise better patient outcomes.",
      image: "🔬",
      category: "news"
    },
    {
      id: 4,
      title: "Sustainability Initiatives Launch",
      date: "July 12, 2023",
      summary: "Cipco commits to reducing carbon footprint by 50% through innovative green manufacturing practices.",
      image: "🌍",
      category: "sustainability"
    },
    {
      id: 5,
      title: "Employee Excellence Awards",
      date: "June 28, 2023",
      summary: "Recognizing outstanding contributions of our team members in driving pharmaceutical innovation forward.",
      image: "🏆",
      category: "awards"
    }
  ];

  const filteredItems = newsItems.filter(item => item.category === activeTab);

  return (
    <div style={isMobile ? styles.container1 : styles.container}>
      {/* Hero Section */}
      <div style={{...styles.hero, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <h1 style={styles.title}>Media Center</h1>
        <p style={styles.subtitle}>
          Stay updated with the latest news, announcements, and insights from Cipco Pharmaceuticals
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabContainer}>
        <button
          style={activeTab === 'news' ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}
          onClick={() => setActiveTab('news')}
        >
          📰 News & Updates
        </button>
        <button
          style={activeTab === 'sustainability' ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}
          onClick={() => setActiveTab('sustainability')}
        >
          🌱 Sustainability
        </button>
        <button
          style={activeTab === 'awards' ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}
          onClick={() => setActiveTab('awards')}
        >
          🏆 Awards
        </button>
      </div>

      {/* News Grid */}
      <div style={styles.newsGrid}>
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            style={{
              ...styles.newsCard,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div style={styles.newsImage}>{item.image}</div>
            <div style={styles.newsContent}>
              <h3 style={styles.newsTitle}>{item.title}</h3>
              <p style={styles.newsDate}>{item.date}</p>
              <p style={styles.newsSummary}>{item.summary}</p>
              <button style={styles.readMoreButton}>Read More →</button>
            </div>
          </div>
        ))}
      </div>

      {/* Media Kit Section */}
      <div style={styles.mediaKitSection}>
        <h2 style={styles.mediaKitTitle}>Media Resources</h2>
        <div style={styles.mediaKitGrid}>
          <div style={styles.mediaKitItem}>
            <div style={styles.mediaKitIcon}>📄</div>
            <h3 style={styles.mediaKitItemTitle}>Press Releases</h3>
            <p style={styles.mediaKitDescription}>Official announcements and press materials</p>
          </div>
          <div style={styles.mediaKitItem}>
            <div style={styles.mediaKitIcon}>📸</div>
            <h3 style={styles.mediaKitItemTitle}>Photo Gallery</h3>
            <p style={styles.mediaKitDescription}>High-resolution images of our facilities</p>
          </div>
          <div style={styles.mediaKitItem}>
            <div style={styles.mediaKitIcon}>🎥</div>
            <h3 style={styles.mediaKitItemTitle}>Video Content</h3>
            <p style={styles.mediaKitDescription}>Corporate videos and facility tours</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Media Inquiries</h2>
        <p style={styles.contactText}>
          For press releases, interviews, or media partnerships, please contact our media relations team.
        </p>
        <div style={styles.contactInfo}>
          <p style={styles.contactEmail}>📧 media@cipco.com</p>
          <p style={styles.contactPhone}>📞 +1 (555) 123-MEDIA</p>
        </div>
        <button style={styles.contactButton}>Contact Media Team</button>
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
  container1:{
    padding: '40px 0px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh',
    paddingTop: '100px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
    transition: 'all 0.8s ease-out',
  },
  title: {
    fontSize: '3.5rem',
    color: '#305d94',
    marginBottom: '20px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #305d94 0%, #33b0c5 100%)',
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
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  tabButton: {
    padding: '15px 30px',
    border: '2px solid #305d94',
    background: 'transparent',
    color: '#305d94',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  activeTab: {
    background: '#305d94',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(46, 125, 50, 0.3)',
  },
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  },
  newsCard: {
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
    borderRadius: '20px',
    padding: '25px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.6s ease-out',
    border: '1px solid #e0e0e0',
    display: 'flex',
    flexDirection: 'column',
  },
  newsImage: {
    fontSize: '4rem',
    textAlign: 'center',
    marginBottom: '20px',
  },
  newsContent: {
    flex: '1',
  },
  newsTitle: {
    fontSize: '1.4rem',
    color: '#305d94',
    marginBottom: '10px',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  newsDate: {
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '15px',
  },
  newsSummary: {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
    flex: '1',
  },
  readMoreButton: {
    background: 'transparent',
    border: 'none',
    color: '#305d94',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    padding: '0',
    transition: 'all 0.3s ease',
  },
  mediaKitSection: {
    background: 'linear-gradient(135deg, #305d94 0%, #33b0c5 100%)',
    padding: '60px 30px',
    borderRadius: '20px',
    marginBottom: '60px',
    color: 'white',
  },
  mediaKitTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
  mediaKitGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  mediaKitItem: {
    textAlign: 'center',
    padding: '30px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
  },
  mediaKitIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  mediaKitItemTitle: {
    fontSize: '1.3rem',
    marginBottom: '15px',
    fontWeight: '600',
  },
  mediaKitDescription: {
    opacity: '0.9',
    lineHeight: '1.6',
  },
  contactSection: {
    textAlign: 'center',
    padding: '60px 30px',
    background: '#f8f9fa',
    borderRadius: '20px',
  },
  contactTitle: {
    fontSize: '2.5rem',
    color: '#305d94',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
    maxWidth: '500px',
    margin: '0 auto 30px',
  },
  contactInfo: {
    marginBottom: '30px',
  },
  contactEmail: {
    fontSize: '1.1rem',
    color: '#305d94',
    marginBottom: '10px',
    fontWeight: '600',
  },
  contactPhone: {
    fontSize: '1.1rem',
    color: '#305d94',
    fontWeight: '600',
  },
  contactButton: {
    background: 'linear-gradient(135deg, #305d94 0%, #33b0c5 100%)',
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

export default Media;
