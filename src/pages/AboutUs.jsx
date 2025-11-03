import abheroimg from '../assets/images/abhero.jpg';
import colon from '../assets/element/colon.png';
import drhand from '../assets/element/dr-hand.png';
import Chart from '../components/chart';
import Slider from '../components/imgslider';
import AboutContent from '../components/aboutcontent';
import Production from '../components/production';
import { useState, useEffect, useRef } from 'react';

export default function AboutUs(){
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [heroVisible, setHeroVisible] = useState(false);
  const [whoWeAreVisible, setWhoWeAreVisible] = useState(false);
  const [capacityVisible, setCapacityVisible] = useState(false);
  const [qualityVisible, setQualityVisible] = useState(false);
  const [chartVisible, setChartVisible] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [aboutContentVisible, setAboutContentVisible] = useState(false);
  const [productionVisible, setProductionVisible] = useState(false);

  const heroRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const capacityRef = useRef(null);
  const qualityRef = useRef(null);
  const chartRef = useRef(null);
  const sliderRef = useRef(null);
  const aboutContentRef = useRef(null);
  const productionRef = useRef(null);

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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroRef.current) setHeroVisible(true);
          else if (entry.target === whoWeAreRef.current) setWhoWeAreVisible(true);
          else if (entry.target === capacityRef.current) setCapacityVisible(true);
          else if (entry.target === qualityRef.current) setQualityVisible(true);
          else if (entry.target === chartRef.current) setChartVisible(true);
          else if (entry.target === sliderRef.current) setSliderVisible(true);
          else if (entry.target === aboutContentRef.current) setAboutContentVisible(true);
          else if (entry.target === productionRef.current) setProductionVisible(true);
        } else {
          if (entry.target === heroRef.current) setHeroVisible(false);
          else if (entry.target === whoWeAreRef.current) setWhoWeAreVisible(false);
          else if (entry.target === capacityRef.current) setCapacityVisible(false);
          else if (entry.target === qualityRef.current) setQualityVisible(false);
          else if (entry.target === chartRef.current) setChartVisible(false);
          else if (entry.target === sliderRef.current) setSliderVisible(false);
          else if (entry.target === aboutContentRef.current) setAboutContentVisible(false);
          else if (entry.target === productionRef.current) setProductionVisible(false);
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (whoWeAreRef.current) observer.observe(whoWeAreRef.current);
    if (capacityRef.current) observer.observe(capacityRef.current);
    if (qualityRef.current) observer.observe(qualityRef.current);
    if (chartRef.current) observer.observe(chartRef.current);
    if (sliderRef.current) observer.observe(sliderRef.current);
    if (aboutContentRef.current) observer.observe(aboutContentRef.current);
    if (productionRef.current) observer.observe(productionRef.current);

    return () => observer.disconnect();
  }, []);
    return(
        <>
        <section ref={heroRef} style={{ marginTop: '110px', marginLeft: isMobile ? '0px' : '100px', marginRight: isMobile ? '0px' : '100px', borderRadius: isMobile ? '0px' : '40px', overflow: 'hidden', position: 'relative', height: isMobile ? '250px' : '600px' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>



                        <img src={abheroimg} alt="hero img" className="w-full h-auto object-cover" />


                        {/* Content Overlaid */}
                        <div style={{
                            position: 'absolute',
                            inset: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: isMobile ? 'center' : 'end',
                            padding: isMobile ? '1rem' : '2rem',
                            color: 'black',
                            zIndex: 20,
                            paddingLeft: isMobile ? '1rem' : '48rem',
                            textAlign: isMobile ? 'center' : 'right',
                            opacity: heroVisible ? 1 : 0,
                            transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s ease-out'
                        }}>

                            <h1 className={`${isMobile ? 'text-[30px] text-[white]' : 'text-[50px]'} font-bold`} style={{
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateX(0)' : 'translateX(-20px)',
                                transition: 'all 0.8s ease-out 0.2s'
                            }}>Trusted Since 1989</h1>
                            <p className={`${isMobile ? 'text-[16px] text-[white]' : 'text-[20px]'} text-[#6B7280] ${isMobile ? 'pl-0' : 'pl-[4rem]'}`} style={{
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.8s ease-out 0.4s'
                            }}>Delivering high-quality pharmaceutical formulations with precision and care.</p>
                            <div className={`mt-[8px] text-[white] ${isMobile ? 'px-[15px] py-[15px]' : 'px-[20px] py-[20px]'} rounded-[40px] ${isMobile ? 'text-[13px]' : 'text-[15px]'} font-semibold bg-[#33b0c5] hover:bg-[#76ac4e] transition-all duration-300 ease-in-out hover:scale-105 items-center flex gap-[8px] font-[500] cursor-pointer`} style={{
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.8s ease-out 0.6s'
                            }} onClick={() => window.location.href = ("/contact-us")}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path d="M 11.142 12.442 C 12.349 11.711 13.402 12.005 14.034 12.475 C 14.294 12.667 14.424 12.763 14.5 12.763 C 14.576 12.763 14.706 12.667 14.966 12.475 C 15.598 12.005 16.651 11.711 17.858 12.442 C 19.442 13.401 19.8 16.567 16.147 19.237 C 15.451 19.746 15.104 20 14.5 20 C 13.896 20 13.549 19.746 12.853 19.237 C 9.2 16.567 9.558 13.401 11.142 12.442 Z" fill="transparent" stroke-width="2" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 1 6 L 19 6" fill="transparent" stroke-width="2" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 16 0 L 16 2 M 4 0 L 4 2" fill="transparent" stroke-width="2" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 9.05 20 C 5.019 20 3.004 20 1.752 18.646 C 0.5 17.293 0.5 15.114 0.5 10.757 L 0.5 10.243 C 0.5 5.886 0.5 3.707 1.752 2.354 C 3.004 1 5.019 1 9.05 1 L 10.95 1 C 14.98 1 16.996 1 18.248 2.354 C 19.477 3.682 19.5 5.804 19.5 10" fill="transparent" stroke-width="2" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg> Contact Us
                            </div>
                        </div>
                    </div>
                </section>

        <section ref={whoWeAreRef} className={`${isMobile ? 'mx-[20px]' : 'mx-[100px]'} mt-[50px]`} style={{
            opacity: whoWeAreVisible ? 1 : 0,
            transform: whoWeAreVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
        }}>
             <div className={`${isMobile ? 'flex-col' : 'flex'} gap-[20px] justify-between`}>
                <div>
                    <h1 className={`${isMobile ? 'text-[40px]' : 'text-[60px]'} font-[600]`} style={{
                        opacity: whoWeAreVisible ? 1 : 0,
                        transform: whoWeAreVisible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 0.8s ease-out 0.2s'
                    }}>Who We Are</h1>
                    <p className={`${isMobile ? 'text-[18px]' : 'text-[20px]'} font-[400] text-[#6B7280] ${isMobile ? 'pr-0' : 'pr-[20px]'}`} style={{
                        opacity: whoWeAreVisible ? 1 : 0,
                        transform: whoWeAreVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease-out 0.4s'
                    }}>Cipco Pharmaceuticals is a partnership firm founded in 1939, building ISO-quality pharmaceutical formulations with WHO-GMP standards</p>
                </div>


                <div className={`${isMobile ? 'mt-[20px] flex-col text-left  gap-[10px]' : 'mt-[170px] flex gap-[20px]'} justify-center`} style={{
                    opacity: whoWeAreVisible ? 1 : 0,
                    transform: whoWeAreVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s ease-out 0.6s'
                }}>
  <div className={`flex flex-row gap-[20px] bg-[#F3F9EF] rounded-[10px] ${isMobile?'py-[10px] mb-[10px]':'p-[20px]'} ${isMobile?'pl-[10px]':'justify-center items-center'} flex-shrink-0 ${isMobile ? 'w-full' : 'w-[280px]'} hover:scale-105 transition-all duration-300 ease-in-out animate-fadeInRight animate-delay-400`}>
    <div className='bg-[#1C64F2] rounded-full inline-block p-[10px]'>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="25.333" fill="none" overflow="visible"><g><path d="M 1.333 25.333 C 0.956 25.333 0.639 25.206 0.383 24.95 C 0.128 24.694 0 24.378 0 24 L 0 23.233 C 0 22.544 0.256 21.944 0.767 21.433 C 1.278 20.922 1.978 20.544 2.867 20.3 C 3.444 20.122 3.967 20.022 4.433 20 C 4.9 19.978 5.4 19.989 5.933 20.033 C 6.156 20.056 6.317 20.161 6.417 20.35 C 6.517 20.539 6.522 20.733 6.433 20.933 C 6.278 21.289 6.167 21.65 6.1 22.017 C 6.033 22.383 6 22.767 6 23.167 L 6 24 C 6 24.378 5.872 24.694 5.617 24.95 C 5.361 25.206 5.044 25.333 4.667 25.333 Z M 9.333 25.333 C 8.956 25.333 8.639 25.206 8.383 24.95 C 8.128 24.694 8 24.378 8 24 L 8 23.167 C 8 21.722 8.739 20.556 10.217 19.667 C 11.694 18.778 13.622 18.333 16 18.333 C 18.4 18.333 20.333 18.778 21.8 19.667 C 23.267 20.556 24 21.722 24 23.167 L 24 24 C 24 24.378 23.872 24.694 23.617 24.95 C 23.361 25.206 23.044 25.333 22.667 25.333 Z M 27.333 25.333 C 26.956 25.333 26.639 25.206 26.383 24.95 C 26.128 24.694 26 24.378 26 24 L 26 23.167 C 26 22.767 25.967 22.383 25.9 22.017 C 25.833 21.65 25.722 21.289 25.567 20.933 C 25.478 20.733 25.483 20.539 25.583 20.35 C 25.683 20.161 25.844 20.056 26.067 20.033 C 26.6 19.989 27.1 19.978 27.567 20 C 28.033 20.022 28.556 20.122 29.133 20.3 C 30.022 20.544 30.722 20.922 31.233 21.433 C 31.744 21.944 32 22.544 32 23.233 L 32 24 C 32 24.378 31.872 24.694 31.617 24.95 C 31.361 25.206 31.044 25.333 30.667 25.333 Z M 5.333 18.667 C 4.6 18.667 3.972 18.406 3.45 17.883 C 2.928 17.361 2.667 16.733 2.667 16 C 2.667 15.244 2.928 14.611 3.45 14.1 C 3.972 13.589 4.6 13.333 5.333 13.333 C 6.089 13.333 6.722 13.589 7.233 14.1 C 7.744 14.611 8 15.244 8 16 C 8 16.733 7.744 17.361 7.233 17.883 C 6.722 18.406 6.089 18.667 5.333 18.667 Z M 26.667 18.667 C 25.933 18.667 25.306 18.406 24.783 17.883 C 24.261 17.361 24 16.733 24 16 C 24 15.244 24.261 14.611 24.783 14.1 C 25.306 13.589 25.933 13.333 26.667 13.333 C 27.422 13.333 28.056 13.589 28.567 14.1 C 29.078 14.611 29.333 15.244 29.333 16 C 29.333 16.733 29.078 17.361 28.567 17.883 C 28.056 18.406 27.422 18.667 26.667 18.667 Z M 16 17.333 C 14.889 17.333 13.944 16.944 13.167 16.167 C 12.389 15.389 12 14.444 12 13.333 C 12 12.2 12.389 11.25 13.167 10.483 C 13.944 9.717 14.889 9.333 16 9.333 C 17.133 9.333 18.083 9.717 18.85 10.483 C 19.617 11.25 20 12.2 20 13.333 C 20 14.444 19.617 15.389 18.85 16.167 C 18.083 16.944 17.133 17.333 16 17.333 Z M 16 3.333 C 16.867 2.289 17.933 1.472 19.2 0.883 C 20.467 0.294 21.8 0 23.2 0 C 25.644 0 27.722 0.856 29.433 2.567 C 31.144 4.278 32 6.356 32 8.8 C 32 9.222 31.972 9.639 31.917 10.05 C 31.861 10.461 31.778 10.867 31.667 11.267 C 31.556 11.644 31.344 11.944 31.033 12.167 C 30.722 12.389 30.378 12.444 30 12.333 C 29.644 12.244 29.372 12.044 29.183 11.733 C 28.994 11.422 28.956 11.089 29.067 10.733 C 29.156 10.422 29.222 10.106 29.267 9.783 C 29.311 9.461 29.333 9.133 29.333 8.8 C 29.333 7.089 28.739 5.639 27.55 4.45 C 26.361 3.261 24.911 2.667 23.2 2.667 C 21.978 2.667 20.867 3.006 19.867 3.683 C 18.867 4.361 17.967 5.167 17.167 6.1 C 16.856 6.478 16.467 6.667 16 6.667 C 15.533 6.667 15.144 6.478 14.833 6.1 C 14.056 5.167 13.161 4.361 12.15 3.683 C 11.139 3.006 10.022 2.667 8.8 2.667 C 7.089 2.667 5.639 3.261 4.45 4.45 C 3.261 5.639 2.667 7.089 2.667 8.8 C 2.667 9.133 2.689 9.461 2.733 9.783 C 2.778 10.106 2.844 10.422 2.933 10.733 C 3.022 11.067 2.972 11.383 2.783 11.683 C 2.594 11.983 2.333 12.178 2 12.267 C 1.622 12.378 1.278 12.333 0.967 12.133 C 0.656 11.933 0.444 11.644 0.333 11.267 C 0.222 10.867 0.139 10.461 0.083 10.05 C 0.028 9.639 0 9.222 0 8.8 C 0 6.356 0.856 4.278 2.567 2.567 C 4.278 0.856 6.356 0 8.8 0 C 10.2 0 11.533 0.294 12.8 0.883 C 14.067 1.472 15.133 2.289 16 3.333 Z" fill="rgb(255,255,255)"></path></g></svg>
    </div>
    <div className='flex flex-col text-left gap-[10px]'>
      <div className='font-[600]'>30+</div>
      <div>Years of Expertise</div>
    </div>
  </div>

  <div className={`flex flex-row gap-[20px] bg-[#F3F9EF] ${isMobile?'py-[10px]':'p-[20px]'} rounded-[10px] ${isMobile?'pl-[10px]':'justify-center items-center'} flex-shrink-0 ${isMobile ? 'w-full' : 'w-[280px]'} hover:scale-105 transition-all duration-300 ease-in-out animate-fadeInRight animate-delay-600`}>
    <div className={isMobile?'bg-[#1C64F2] rounded-full inline-block p-[10px] px-[15px]':'bg-[#1C64F2] rounded-full inline-block p-[10px] px-[15px]'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21.333" height="26.333" fill="none" overflow="visible"><g><path d="M 9.267 14.067 L 7.4 12.2 C 7.133 11.933 6.822 11.8 6.467 11.8 C 6.111 11.8 5.8 11.933 5.533 12.2 C 5.267 12.467 5.133 12.783 5.133 13.15 C 5.133 13.517 5.267 13.833 5.533 14.1 L 8.333 16.933 C 8.6 17.2 8.911 17.333 9.267 17.333 C 9.622 17.333 9.933 17.2 10.2 16.933 L 15.867 11.267 C 16.133 11 16.267 10.683 16.267 10.317 C 16.267 9.95 16.133 9.633 15.867 9.367 C 15.6 9.1 15.283 8.967 14.917 8.967 C 14.55 8.967 14.233 9.1 13.967 9.367 Z M 10.667 26.333 C 10.511 26.333 10.367 26.322 10.233 26.3 C 10.1 26.278 9.967 26.244 9.833 26.2 C 6.833 25.2 4.444 23.35 2.667 20.65 C 0.889 17.95 0 15.044 0 11.933 L 0 5.633 C 0 5.078 0.161 4.578 0.483 4.133 C 0.806 3.689 1.222 3.367 1.733 3.167 L 9.733 0.167 C 10.044 0.056 10.356 0 10.667 0 C 10.978 0 11.289 0.056 11.6 0.167 L 19.6 3.167 C 20.111 3.367 20.528 3.689 20.85 4.133 C 21.172 4.578 21.333 5.078 21.333 5.633 L 21.333 11.933 C 21.333 15.044 20.444 17.95 18.667 20.65 C 16.889 23.35 14.5 25.2 11.5 26.2 C 11.367 26.244 11.233 26.278 11.1 26.3 C 10.967 26.322 10.822 26.333 10.667 26.333 Z" fill="rgb(255,255,255)"></path></g></svg>
    </div>
    <div className='flex flex-col text-left gap-[10px]'>
      <div className='font-[600]'>WHO-GMP</div>
      <div>Certified</div>
    </div>
  </div>
</div>

             </div>

             <div>
                
             </div>
             <div ref={capacityRef} className={`${isMobile ? 'flex-col gap-[20px] mt-[30px] px-[0px]' : 'gap-[20px] mt-[30px] px-[20px]'} rounded-[10px] justify-between flex bg-[#F3F9EF]`} style={{
                opacity: capacityVisible ? 1 : 0,
                transform: capacityVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out'
            }}>
                <div>
                    <h1 className={`${isMobile ? 'text-[28px] text-center' : 'text-[33px]'} font-[400]`} style={{
                        opacity: capacityVisible ? 1 : 0,
                        transform: capacityVisible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 0.8s ease-out 0.2s'
                    }}>Capacity of Plant</h1>
                    <p className={`${isMobile ? 'text-[18px]' : 'text-[24px]'} font-[400] ${isMobile ? 'px-[10px] ' : 'pr-[20px]'}`} style={{
                        opacity: capacityVisible ? 1 : 0,
                        transform: capacityVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease-out 0.4s'
                    }}>Capacity for per month production based on single shift working.</p>
                </div>


                <div className={`${isMobile ? 'flex-col gap-[10px]' : 'flex gap-[20px]'} justify-center`} style={{
                    opacity: capacityVisible ? 1 : 0,
                    transform: capacityVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.8s ease-out 0.6s'
                }}>
  <div className={`flex flex-row gap-[20px] bg-[#F3F9EF] rounded-[10px] ${isMobile ? 'p-[0px]' : 'p-[20px]'} ${isMobile?'pl-[10px]':'justify-center items-center'} flex-shrink-0 ${isMobile ? 'w-xfull' : 'w-[280px]'} hover:scale-105 transition-all duration-300 ease-in-out animate-scaleIn animate-delay-400`}>

    <div className='flex flex-col text-left gap-[10px]'>
      <div className='font-[600] text-[30px] text-[blue]'>Oral Liquid</div>
      <div>21 Lacs Bottles</div>
    </div>
  </div>

  <div className={`flex flex-row gap-[20px] ${isMobile ? 'p-[0px]' : 'p-[20px]'} rounded-[10px] ${isMobile?'pl-[10px]':'justify-center items-center'} flex-shrink-0 ${isMobile ? 'w-full' : 'w-[280px]'} hover:scale-105 transition-all duration-300 ease-in-out animate-scaleIn animate-delay-600`}>
    <div className='flex flex-col text-left gap-[10px]'>
      <div className='font-[600] text-[30px] text-[green]'>Oral Tablet</div>
      <div>21 Crore</div>
    </div>
  </div>
</div>

             </div>

             <div>
                
             </div>
        </section>

        <section ref={qualityRef} className={`${isMobile ? 'mx-[0px]' : 'mx-[100px]'} mt-[100px]`} style={{
            opacity: qualityVisible ? 1 : 0,
            transform: qualityVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
        }}>
            <div className={`font-[600] ${isMobile ? 'text-[30px] text-center' : 'text-[40px]'} mb-[30px]`} style={{
                opacity: qualityVisible ? 1 : 0,
                transform: qualityVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out 0.2s'
            }}>Quality Management System</div>
            <div className={`text-[white] ${isMobile ? 'flex-col' : 'flex'} bg-[#305d94] rounded-[20px] ${isMobile ? 'px-[20px] py-[30px]' : 'px-[60px] py-[50px]'} hover:shadow-2xl transition-all duration-500 ease-in-out`} style={{
                opacity: qualityVisible ? 1 : 0,
                transform: qualityVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.4s'
            }}>
              <div>
              <div className={`${isMobile ? 'text-[18px]' : 'text-[20px]'} mb-[15px]`} style={{
                  opacity: qualityVisible ? 1 : 0,
                  transform: qualityVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease-out 0.6s'
              }}>The firm has very clear and recorded quality policy which states that:</div>
              <div className={`${isMobile ? 'flex-col' : 'flex'} ${isMobile ? 'mx-0' : 'mx-[40px]'}`}>
                <div><img src={colon} alt="colon" className={`${isMobile ? 'w-[30px] h-[30px]' : 'w-[40px] h-[40px]'}`} style={{
                    opacity: qualityVisible ? 1 : 0,
                    transform: qualityVisible ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.8s ease-out 0.8s'
                }}/></div>
                <div className={`font-[600] ${isMobile ? 'text-[20px]' : 'text-[22px]'} ${isMobile ? 'pr-0' : 'pr-[200px]'} mt-[30px]`} style={{
                    opacity: qualityVisible ? 1 : 0,
                    transform: qualityVisible ? 'translateX(0)' : 'translateX(30px)',
                    transition: 'all 0.8s ease-out 1s'
                }}>“We, at Cipco Pharmaceuticals, aim to provide satisfaction to our customers in domestic/ international market by fully meeting their requirements in terms of Quality, Cost and Delivery. We have created a company committed to quality by bringing about involvement of all employees at all levels for continuous improvement in Quality.”</div>
              </div>
              </div>
              <div><img src={drhand} className={`${isMobile ? 'w-[200px] h-[200px] mt-[20px]' : 'w-[250px] h-[250px]'}`} style={{
                  opacity: qualityVisible ? 1 : 0,
                  transform: qualityVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'all 0.8s ease-out 1.2s',
                  alignSelf: isMobile ? 'center' : 'auto'
              }} alt="dr image" /></div>
            </div>
        </section>

       {!isMobile && <section className={`${isMobile ? 'mx-[0px]' : 'mx-[100px]'} mt-[80px]`}>
          <Chart />
        </section>}

        <section className={`${isMobile ? 'mx-[10px]' : 'mx-[100px]'} mt-[80px]`}>
          <Slider/>
        </section>

        <section className={`${isMobile ? 'mx-[0px]' : 'mx-[100px]'} mt-[80px]`}>
          <AboutContent/>
        </section>

        <section className={`${isMobile ? 'mx-[20px]' : 'mx-[100px]'} mt-[100px]`}>
          <Production/>
        </section>
        </>
    );
}
