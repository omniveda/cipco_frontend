import React, { useState, useEffect } from 'react';

const Manufacturing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile,setIsMobile]=useState(window.innerWidth<768);
  useEffect(()=>{
    const handleResize=()=>{
      const mobile=window.innerWidth<768;
      setIsMobile(mobile);
      if(!mobile){
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize',handleResize);
    return()=>window.removeEventListener('resize',handleResize);
  },[]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const productionCapacity = [
    { section: "Tablet (Non-Ferrous)", capacity: "9 crore tablets", icon: "💊" },
    { section: "Tablet (Ferrous Section)", capacity: "12 crore tablets", icon: "🩸" },
    { section: "Liquid Orals", capacity: "27 lakh bottles", icon: "🧴" }
  ];

  const productPortfolio = [
    { name: "Anti-Malarial & Anti-Bacterial drugs", icon: "🦠", color: "linear-gradient(135deg, #f87171, #ec4899)" },
    { name: "Analgesics & Antipyretics", icon: "🌡️", color: "linear-gradient(135deg, #60a5fa, #06b6d4)" },
    { name: "Anti-Cold and Anti-Cough formulations", icon: "🤧", color: "linear-gradient(135deg, #a78bfa, #6366f1)" },
    { name: "Hematinics & Iron Supplements", icon: "🩸", color: "linear-gradient(135deg, #ef4444, #f43f5e)" },
    { name: "Antispasmodics, Anti-Protozoals, Anti-Asthmatics", icon: "🫁", color: "linear-gradient(135deg, #4ade80, #10b981)" },
    { name: "Beta Blockers, Anti-Histamines, Anti-Diabetics", icon: "💊", color: "linear-gradient(135deg, #fb923c, #eab308)" },
    { name: "Antivirals, Antihelminthics", icon: "🦠", color: "linear-gradient(135deg, #14b8a6, #22c55e)" },
    { name: "Vitamin & Calcium supplements", icon: "🦴", color: "linear-gradient(135deg, #f59e0b, #ea580c)" },
    { name: "Enzyme preparations", icon: "⚗️", color: "linear-gradient(135deg, #8b5cf6, #a855f7)" }
  ];

  const infrastructureHighlights = [
    { text: "Controlled AHU system with minimum 20 air changes per hour", icon: "🌬️" },
    { text: "RLAF stations for sampling and dispensing", icon: "🔬" },
    { text: "Separate zones for \"Under Test,\" \"Approved,\" and \"Rejected\" materials", icon: "🏷️" },
    { text: "In-house water treatment and preventive maintenance systems", icon: "💧" },
    { text: "Comprehensive pest control, sanitation, and safety measures", icon: "🧹" },
    { text: "Secure finished goods warehouse with FIFO distribution system", icon: "📦" }
  ];

  const stats = [
    { number: "35+", label: "Years of Experience", icon: "📅" },
    { number: "200+", label: "Qualified Professionals", icon: "👥" },
    { number: "42,000", label: "Sq. Ft. Facility", icon: "🏭" },
    { number: "100%", label: "Quality Compliance", icon: "✅" }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff, #dbeafe)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div style={{
        position: 'relative',
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '3rem',
        paddingBottom: '3rem'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)'
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-1rem',
              left: '-1rem',
              width: '5rem',
              height: '5rem',
              background: 'linear-gradient(to right, #4ade80, #3b82f6)',
              borderRadius: '50%',
              opacity: 0.2,
              animation: 'pulse 2s infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              right: '-1rem',
              width: '4rem',
              height: '4rem',
              background: 'linear-gradient(to right, #a78bfa, #ec4899)',
              borderRadius: '50%',
              opacity: 0.2,
              animation: 'pulse 2s infinite 1s'
            }}></div>
            <h1 style={{
              fontSize: isMobile ? '2rem' : '4rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #305d94, #2563eb, #33b0c5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 10,
              animation: 'fadeIn 1s ease-in-out'
            }}>
              Manufacturing Excellence
            </h1>
          </div>
          <p style={{
            fontSize: '1.5rem',
            color: '#4b5563',
            maxWidth: '56rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.625',
            fontWeight: '300'
          }}>
            A Legacy of Quality Since 1989
          </p>
          <div style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '4rem',
              height: '0.25rem',
              background: 'linear-gradient(to right, #10b981, #3b82f6)',
              borderRadius: '9999px'
            }}></div>
            <div style={{
              width: '2rem',
              height: '0.25rem',
              background: 'linear-gradient(to right, #3b82f6, #9333ea)',
              borderRadius: '9999px'
            }}></div>
            <div style={{
              width: '1rem',
              height: '0.25rem',
              background: 'linear-gradient(to right, #9333ea, #ec4899)',
              borderRadius: '9999px'
            }}></div>
          </div>
        </div>

        {/* Introduction Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '2rem',
          marginBottom: '3rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '0.2s'
        }}>
          <div style={{
            maxWidth: '56rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#305d94',
              marginBottom: '1.5rem'
            }}>About CIPCO LIMITED</h2>
            <p style={{
              color: '#374151',
              fontSize: '1.125rem',
              lineHeight: '1.75',
              marginBottom: '1.5rem'
            }}>
              CIPCO LIMITED is a trusted pharmaceutical manufacturer with over three decades of experience in delivering high-quality medicines to domestic and international markets. Our state-of-the-art WHO-GMP certified manufacturing facility at Pigdamber, Indore (Madhya Pradesh) is designed to meet the highest standards of quality, safety, and regulatory compliance.
            </p>
            <p style={{
              color: '#374151',
              fontSize: '1.125rem',
              lineHeight: '1.75'
            }}>
              We specialize in the development and production of non-sterile, non-β-lactam, non-hormonal formulations in tablet and liquid oral dosage forms.
            </p>
          </div>
        </div>

        {/* Manufacturing Facility Section */}
        <div style={{
          background: 'linear-gradient(to right, #305d94, #33b0c5)',
          color: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '3rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '0.3s'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Our Manufacturing Facility</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(28rem, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>Facility Details</h3>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',  
                color: '#d1fae5',
                width: isMobile ? '30vh' : 'auto'
              }}>
                <li>• Location: 35-36/1, A.B. Road, Pigdamber, Indore – 453331 (M.P.)</li>
                <li>• Built-up Area: 42,000 sq. ft. on a 45,000 sq. ft. plot</li>
                <li>• Pollution-free and well-connected industrial zone</li>
                <li>• In-house power station, water purification & SS recirculation loop</li>
                <li>• Controlled temperature and humidity with advanced AHU systems</li>
                <li>• Purified water system with RO, UV and stainless-steel loop</li>
              </ul>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile? 'flex-start':'center',
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(4px)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                textAlign: 'center',
                width: isMobile ? '30vh' : 'auto'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏭</div>
                <p style={{ color: '#d1fae5' }}>WHO-GMP Certified Facility</p>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#a7f3d0',
                  marginTop: '0.5rem'
                }}>Ensuring contamination control and smooth material movement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Production Capacity Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '2rem',
          marginBottom: '3rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '0.4s'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#305d94',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Production Capacity</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#305d94', color: 'white' }}>
                  <th style={{
                    border: '1px solid #d1d5db',
                    padding: '1.5rem',
                    textAlign: 'left',
                    fontWeight: '600'
                  }}>Section</th>
                  <th style={{
                    border: '1px solid #d1d5db',
                    padding: '1.5rem',
                    textAlign: 'left',
                    fontWeight: '600'
                  }}>Capacity / Month</th>
                </tr>
              </thead>
              <tbody>
                {productionCapacity.map((item, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white' }}>
                    <td style={{
                      border: '1px solid #d1d5db',
                      padding: '1.5rem',
                      fontWeight: '500'
                    }}>{item.section}</td>
                    <td style={{
                      border: '1px solid #d1d5db',
                      padding: '1.5rem'
                    }}>{item.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{
            color: '#4b5563',
            textAlign: 'center',
            marginTop: '1.5rem',
            fontStyle: 'italic'
          }}>
            We employ advanced production technologies and rigorous quality control to ensure that every product meets the highest standards of safety, efficacy, and consistency.
          </p>
        </div>

        {/* Product Portfolio Section */}
        <div style={{
          background: 'linear-gradient(to right, #dbeafe, #dcfce7)',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '3rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '0.5s'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#305d94',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Product Portfolio</h2>
          <p style={{
            color: '#374151',
            fontSize: '1.125rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            CIPCO LIMITED manufactures a wide range of therapeutic products, including:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
            gap: '1.5rem'
          }}>
            {productPortfolio.map((product, index) => (
              <div
                key={index}
                style={{
                  background: product.color,
                  color: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.5s',
                  transform: hoveredCard === index ? 'scale(1.05) translateY(-0.5rem)' : 'scale(1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    marginRight: '1rem',
                    animation: 'bounce 1s infinite'
                  }}>{product.icon}</div>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>💊</span>
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>{product.name}</h3>
                <div style={{
                  width: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  height: '0.25rem',
                  borderRadius: '9999px'
                }}>
                  <div style={{
                    backgroundColor: 'white',
                    height: '0.25rem',
                    borderRadius: '9999px',
                    animation: 'pulse 2s infinite',
                    width: `${Math.random() * 60 + 40}%`
                  }}></div>
                </div>
              </div>
            ))}
          </div>
          <p style={{
            color: '#4b5563',
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.875rem',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '0.5rem',
            padding: '1rem',
            backdropFilter: 'blur(4px)'
          }}>
            All products are manufactured under valid drug manufacturing licenses (25/7/89 and 28/7/89), issued by the Madhya Pradesh Drugs Control Administration.
          </p>
        </div>

        {/* Quality Assurance Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: '2rem',
          marginBottom: '3rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '0.6s'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#305d94',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Quality Assurance and Control</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(28rem, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#305d94',
                marginBottom: '1rem'
              }}>Certifications & Labs</h3>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                color: '#374151',
                width: isMobile ? '30vh' : 'auto'
              }}>
                <li>• WHO-GMP and GLP Certified Facility</li>
                <li>• Fully equipped Chemical, Instrumental & Microbiology Labs</li>
                <li>• HPLC, UV Spectrophotometer, Dissolution Testing, Stability Chambers</li>
                <li>• Robust QA systems ensuring compliance with GMP, GLP, and regulatory guidelines</li>
              </ul>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent:isMobile?'flex-start': 'center'
            }}>
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔬</div>
                <p style={{ color: '#4b5563' }}>Advanced Quality Control</p>
              </div>
            </div>
          </div>
          <p style={{
            color: '#4b5563',
            textAlign: 'center',
            marginTop: '1.5rem',
            fontStyle: 'italic'
          }}>
            Our Quality Assurance team ensures product quality at every stage — from raw material sourcing to final batch release. Each product undergoes rigorous in-process checks, validations, and stability testing before it reaches the market.
          </p>
        </div>

        {/* Infrastructure Highlights */}
        <div style={{
          background: 'linear-gradient(to right, #faf5ff, #fce7f3)',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '3rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '0.7s'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#305d94',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Infrastructure Highlights</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(28rem, 1fr))',
            gap: '1.5rem'
          }}>
            {infrastructureHighlights.map((highlight, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.5s',
                  transform: 'scale(1)',
                  cursor: 'pointer',
                  width: isMobile ? '30vh' : 'auto'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) translateY(-0.25rem)';
                  e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '1rem',
                    transition: 'animation 0.3s'
                  }}>{highlight.icon}</div>
                  <div>
                    <div style={{
                      width: '3rem',
                      height: '0.25rem',
                      background: 'linear-gradient(to right, #a855f7, #ec4899)',
                      borderRadius: '9999px',
                      marginBottom: '0.75rem'
                    }}></div>
                    <span style={{
                      color: '#374151',
                      fontWeight: '500'
                    }}>{highlight.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* People and Compliance Sections */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(28rem, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* People Behind Excellence */}
          <div style={{
            background: 'linear-gradient(135deg, #fffbeb, #fed7aa)',
            borderRadius: '1rem',
            padding: '2rem',
            transition: 'all 1s',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            animationDelay: '0.8s',
            width: isMobile ? '35vh' : 'auto'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#305d94',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>People Behind the Excellence</h2>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
              <p style={{
                color: '#374151',
                lineHeight: '1.75'
              }}>
                With a team of over 200 trained and qualified professionals, CIPCO LIMITED combines technical expertise with a commitment to quality. Continuous training and internal audits ensure adherence to best manufacturing practices and regulatory standards.
              </p>
            </div>
          </div>

          {/* Commitment to Regulatory Compliance */}
          <div style={{
            background: 'linear-gradient(135deg, #eef2ff, #ddd6fe)',
            borderRadius: '1rem',
            padding: '2rem',
            transition: 'all 1s',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            animationDelay: '0.9s',
            width: isMobile ? '35vh' : 'auto'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#305d94',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>Commitment to Regulatory Compliance</h2>
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              color: '#374151'
            }}>
              <li>• Licensed and regulated by the Madhya Pradesh Food and Drug Administration</li>
              <li>• WHO-GMP certified for manufacturing excellence</li>
              <li>• Comprehensive SOPs for production, quality, hygiene, safety, and distribution</li>
              <li>• Regular self-inspection, preventive maintenance, and process validation</li>
            </ul>
          </div>
        </div>

        {/* Global Reach Section */}
        <div style={{
          background: 'linear-gradient(to right, #33b0c5, #305d94)',
          color: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '3rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '1s'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}>Global Reach, Trusted Quality</h2>
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.75',
              maxWidth: '56rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              CIPCO LIMITED serves both domestic and international markets, delivering trusted medicines to governments, institutions, and healthcare providers. Our manufacturing excellence and quality systems enable us to meet diverse market needs with reliability and consistency.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          background: 'linear-gradient(to right, #305d94, #2563eb, #33b0c5)',
          color: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '3rem',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '1s'
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Our Achievements</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
            gap: '1.5rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                transition: 'all 0.3s',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  marginBottom: '0.25rem'
                }}>{stat.number}</div>
                <div style={{
                  fontSize: '0.875rem',
                  opacity: 0.9
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #f9fafb, #ffffff)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center',
          transition: 'all 1s',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          animationDelay: '1.1s',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(74, 222, 128, 0.1), rgba(59, 130, 246, 0.1))',
            borderRadius: '1rem'
          }}></div>
          <div style={{
            position: 'relative',
            zIndex: 10
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#305d94',
              marginBottom: '1rem'
            }}>Ready to Partner with Us?</h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#4b5563',
              marginBottom: '2rem',
              maxWidth: '42rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Discover how our manufacturing capabilities can support your pharmaceutical needs.
            </p>
            <button style={{
              background: 'linear-gradient(to right, #059669, #047857)',
              color: 'white',
              padding: '1.25rem 2.5rem',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '1.125rem',
              transition: 'all 0.3s',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(to right, #305d94, #305d94)';
              e.target.style.transform = 'translateY(-0.25rem) scale(1.05)';
              e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(to right, #305d94, #305d94)';
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
            >
              <span style={{
                position: 'relative',
                zIndex: 10
              }}>Get in Touch</span>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to right, #305d94, #3b82f6)',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
