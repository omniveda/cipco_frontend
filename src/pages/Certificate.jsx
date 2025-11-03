import React, { useState, useEffect, useRef } from 'react';
import cert1 from '../assets/product/cert1.png';
import cert2 from '../assets/product/cert2.png';
import cert3 from '../assets/product/cert3.png';
import cert4 from '../assets/product/cert4.png';

const data = [cert1, cert2, cert3, cert4];

export default function Certificate() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className='mt-[100px] px-[20px] md:px-[40px] py-[60px] bg-gradient-to-br from-gray-50 to-white'>
            <div className='max-w-[1400px] mx-auto'>
                <div className="text-center mb-[60px]">
                    <div className="text-[24px] md:text-[48px] font-[700] text-[#305d94] mb-[20px]">Our Certificates</div>
                    <p className="text-[16px] md:text-[18px] text-gray-600 max-w-[600px] mx-auto">
                        Recognized for excellence in pharmaceutical manufacturing and quality standards
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-[50px] justify-items-center">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transitionDelay: `${index * 300}ms`
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                                src={item}
                                alt="Certificate"
                                className="w-full max-w-[500px] md:max-w-[650px] h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-sm font-semibold">Certificate {index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
