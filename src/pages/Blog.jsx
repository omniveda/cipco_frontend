import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "From Humble Beginnings to a Trusted Healthcare Partner: The Inspiring Journey of CIPCO LIMITED",
      date: "October 20, 2023",
      summary: "Every great company starts with a dream. At CIPCO LTD, that dream began with Mr. Arun Kumar Jhawar, whose vision was simple yet profound — to provide affordable, high-quality healthcare for everyone. What started as a modest initiative decades ago has transformed into a trusted pharmaceutical brand delivering life-saving medicines across India.",
      image: "🌟",
      category: "Journey"
    },
    {
      id: 2,
      title: "Why Quality is Non-Negotiable in Pharma — A Core Value at CIPCO LIMITED",
      date: "September 25, 2023",
      summary: "In healthcare, quality isn’t optional — it’s life-saving. At CIPCO, every step of our production process is guided by rigorous quality standards. From sourcing raw materials to final packaging, our team follows GMP-certified processes to ensure consistency, safety, and trust.",
      image: "✅",
      category: "Quality"
    },
    {
      id: 3,
      title: "Partnering for Health: How Collaborations Drive Better Access to Medicines",
      date: "August 10, 2023",
      summary: "Healthcare transformation happens when organizations work together. That’s why partnerships are central to CIPCO’s mission. We proudly serve almost all state governments in India through tenders and institutional supply, ensuring that critical medicines reach every corner of the nation.",
      image: "🤝",
      category: "Partnership"
    },
    {
      id: 4,
      title: "CIPCO LTD’s Vision 2030: Building a Global Healthcare Brand from India",
      date: "July 15, 2023",
      summary: "Our transformation into a Public Limited Company in 2025 is just the beginning. CIPCO’s Vision 2030 outlines a clear roadmap toward global expansion, including expanding manufacturing capacity, entering new global markets, listing on the stock exchange, and strengthening R&D and innovation.",
      image: "🌍",
      category: "Vision"
    }
  ];

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
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      marginBottom: '60px',
    },
    blogCard: {
      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.6s ease-out',
      border: '1px solid #e0e0e0',
    },
    blogImage: {
      height: isMobile ? '150px' : '200px',
      background: 'linear-gradient(135deg, #b8c9d4 0%, #a0b4c0 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '3rem' : '4rem',
    },
    blogContent: {
      padding: isMobile ? '15px' : '25px',
    },
    blogCategory: {
      background: '#e8f5e8',
      color: '#305d94',
      padding: '5px 15px',
      borderRadius: '15px',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '15px',
      display: 'inline-block',
    },
    blogTitle: {
      fontSize: '1.4rem',
      color: '#305d94',
      marginBottom: '10px',
      fontWeight: '600',
      lineHeight: '1.4',
    },
    blogDate: {
      color: '#888',
      fontSize: '0.9rem',
      marginBottom: '15px',
    },
    blogSummary: {
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '20px',
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
    newsletterSection: {
      textAlign: 'center',
      padding: '60px 30px',
      background: '#f8f9fa',
      borderRadius: '20px',
    },
    newsletterTitle: {
      fontSize: '2.5rem',
      color: '#305d94',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    newsletterText: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '30px',
      maxWidth: '500px',
      margin: '0 auto 30px',
    },
    newsletterForm: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    newsletterInput: {
      padding: '15px 20px',
      border: '2px solid #e0e0e0',
      borderRadius: '25px',
      fontSize: '1rem',
      minWidth: '300px',
    },
    newsletterButton: {
      background: 'linear-gradient(135deg, #305d94 0%, #33b0c5 100%)',
      color: 'white',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(46, 125, 50, 0.3)',
    },
  };

  return (
    <div style={isMobile?styles.container1:styles.container}>
      {/* Hero Section */}
      <div style={{...styles.hero, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)'}}>
        <h1 style={styles.title}>Blog</h1>
        <p style={styles.subtitle}>
          Insights, innovations, and updates from the world of pharmaceuticals and healthcare.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div style={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            style={{
              ...styles.blogCard,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div style={styles.blogImage}>{post.image}</div>
            <div style={styles.blogContent}>
              <span style={styles.blogCategory}>{post.category}</span>
              <h3 style={styles.blogTitle}>{post.title}</h3>
              <p style={styles.blogDate}>{post.date}</p>
              <p style={styles.blogSummary}>{post.summary}</p>
              {/* <button style={styles.readMoreButton}>Read More →</button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div style={styles.newsletterSection}>
        <h2 style={styles.newsletterTitle}>Stay Updated</h2>
        <p style={styles.newsletterText}>
          Subscribe to our newsletter for the latest blog posts and industry insights.
        </p>
        <div style={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.newsletterInput}
          />
          <button style={styles.newsletterButton}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
