import logo1 from '../assets/features/logo1.png';
import logo2 from '../assets/features/logo2.png';
import logo3 from '../assets/features/logo3.png';   
import dataimg1 from '../assets/features/dataimg1.jpg';
import dataimg2 from '../assets/features/dataimg2.jpg';
import dataimg3 from '../assets/features/dataimg3.jpg';
import { useState, useEffect } from 'react';

const data = [
    {
        id: 1,
        title: 'Quality Policy',
        logo: logo1,
        dataimg: dataimg1,
        content: 'The highest level of product quality is assured with experienced and trained staff, using the cutting edge equipment and machinery to manufacture a full range of Specials fit for purpose.'
    },
    {
        id: 2,
        title: 'Our Products',
        logo: logo2,
        dataimg: dataimg2,
        content: 'We have a wide range of Allopathic proprietary formulation/products. Our product quality management system incorporates and guarantees quality throughout all stages of ordering.'
    },
    {
        id: 3,
        title: 'Dedicated Customer Service',
        logo: logo3,
        dataimg: dataimg3,
        content: 'Our helpful approach allows us to build a relationship with you, to understand and deliver the exact requirements of the customer. We provide clear communication throughout the ordering process.'
    }
];

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Close menu when switching to desktop
            if (!mobile) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={isMobile?"mobile-padding":"features-container"}>
            <div className="features-wrapper">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={`feature-item ${activeIndex === index ? 'active' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        {/* Collapsed State */}
                        <div className="feature-collapsed">
                            <div className="feature-number">
                                {String(item.id).padStart(2, '0')}
                            </div>
                            <div className="feature-title-section">
                                <h3 className="feature-title">{item.title}</h3>
                            </div>
                        </div>

                        {/* Expanded State */}
                        <div className="feature-expanded">
                            <div className="feature-content">
                                <div className="feature-text">
                                <img className='w-[50px] h-[50px]' src={item.logo} alt=""/>
                                    <h3 className="feature-title-expanded">{item.title}</h3>
                                    <p className="feature-description">{item.content}</p>
                                </div>
                                <div className="feature-image">
                                    <img src={item.dataimg} alt={item.title} />
                                    <div className="image-overlay">
                                        <div className="overlay-number">
                                            {String(item.id).padStart(2, '0')}
                                        </div>
                                        <div className="overlay-title">{item.title}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="nav-arrows">
                            <button className="nav-arrow nav-arrow-left">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                </svg>
                            </button>
                            <button className="nav-arrow nav-arrow-right">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .features-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 50px 20px;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .mobile-padding {
                    padding: 0px 10px;
                }

                .features-wrapper {
                    display: flex;
                    gap: 4px;
                    height: 500px;
                    border-radius: 20px;
                    overflow: hidden;
                    // box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }

                .feature-item {
                    flex: 0.7;
                    position: relative;
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    overflow: hidden;
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                }

                .feature-item:nth-child(1) {
                    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                }

                .feature-item:nth-child(2) {
                    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
                }

                .feature-item:nth-child(3) {
                    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                }

                .feature-item.active {
                    flex: 4.5;
                    background: #ffffff;
                    // box-shadow: inset 0 0 0 2px rgba(59, 130, 246, 0.2);
                }

                .feature-collapsed {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    opacity: 1;
                    transition: opacity 0.3s ease;
                }

                .feature-item.active .feature-collapsed {
                    opacity: 0;
                }

                .feature-expanded {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transform: translateX(20px);
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                }

                .feature-item.active .feature-expanded {
                    opacity: 1;
                    transform: translateX(0);
                    pointer-events: auto;
                }

                .feature-content {
                    height: 100%;
                    display: flex;
                    align-items: stretch;
                }

                .feature-text {
                    flex: 1;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .feature-image {
                    flex: 2.0;
                    position: relative;
                    border-radius: 40px;
                    overflow: hidden;
                }

                .feature-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .feature-item.active .feature-image img {
                    transform: scale(1.05);
                }

                .image-overlay {
                    position: absolute;
                    bottom: 30px;
                    right: 30px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    padding: 15px 20px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }

                .overlay-number {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #1e293b;
                    line-height: 1;
                    margin-bottom: 5px;
                }

                .overlay-title {
                    font-size: 0.9rem;
                    color: #64748b;
                    font-weight: 500;
                }

                .feature-number {
                    font-size: 3rem;
                    font-weight: 900;
                    color: rgba(15, 23, 42, 0.1);
                    margin-bottom: 20px;
                    transition: all 0.3s ease;
                }

                .feature-number-large {
                    font-size: 6rem;
                    font-weight: 900;
                    color: rgba(59, 130, 246, 0.1);
                    line-height: 1;
                    margin-bottom: 20px;
                }

                .feature-icon {
                    font-size: 2rem;
                    margin-bottom: 15px;
                    opacity: 0.8;
                }

                .feature-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1e293b;
                    text-align: center;
                    line-height: 1.4;
                    transform: rotate(-90deg);
                    white-space: nowrap;
                    margin-top: 30px;
                }

                .feature-title-expanded {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .feature-description {
                    font-size: 1.1rem;
                    color: #64748b;
                    line-height: 1.7;
                    margin: 0;
                }

                .nav-arrows {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    display: flex;
                    gap: 8px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .feature-item.active .nav-arrows {
                    opacity: 1;
                }

                .nav-arrow {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    color: #64748b;
                }

                .nav-arrow:hover {
                    background: #ffffff;
                    color: #3b82f6;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .features-wrapper {
                        flex-direction: column;
                        height: auto;
                    }

                    .feature-item {
                        height: 80px;
                    }

                    .feature-item.active {
                        height: 400px;
                    }

                    .feature-content {
                        flex-direction: column;
                    }

                    .feature-text,
                    .feature-image {
                        flex: none;
                    }

                    .feature-text {
                        padding: 30px 20px;
                    }

                    .feature-image {
                        height: 200px;
                    }

                    .feature-title {
                        transform: none;
                        margin-top: 0;
                        font-size: 1rem;
                    }

                    .feature-title-expanded {
                        font-size: 1.8rem;
                    }

                    .feature-number-large {
                        font-size: 4rem;
                    }
                }
            `}</style>
        </div>
    );
}
