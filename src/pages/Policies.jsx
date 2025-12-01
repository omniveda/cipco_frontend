import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import policybg from '../assets/background/policy_background.jpg';

export default function Policies() {
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
    const navigate = useNavigate();

    const policyItems = [
        { name: 'Code of Business Conduct & Ethics', path: '/code-of-business-conduct-ethics' },
        { name: 'Corporate Social Responsibility Policy', path: '/corporate-social-responsibility-policy' },
        { name: 'Criteria for Making Payments to Non-Executive Directors', path: '/criteria-for-making-payments-to-non-executive-directors' },
        { name: 'Familiarization Programme for Independent Directors', path: '/familiarization-programme-for-independent-directors' },
        { name: 'Nomination and Remuneration Policy', path: '/nomination-and-remuneration-policy' },
        { name: 'Policy for Preservation of Documents and Archival Policy', path: '/policy-for-preservation-of-documents-and-archival-policy' },
        { name: 'Policy on Determining Material Subsidiaries', path: '/policy-on-determining-material-subsidiaries' },
        { name: 'POSH Policy', path: '/posh-policy' },
        { name: 'Related Party Transaction Policy', path: '/related-party-transaction-policy' },
        { name: 'Risk Management Policy', path: '/risk-management-policy' },
        { name: 'Whistle Blower Policy', path: '/whistle-blower-policy' },
    ];
    

    return (
        <>
            {/* Hero Section with Background Image */}
            <section
                className="relative mt-[110px] h-[400px] bg-cover rounded-[20px] bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${policybg})` }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Content Overlay */}
                <div className="relative z-10 text-center text-white animate-zoomOut">
                    <h1 className={isMobile?"text-[3rem] font-bold mb-4":"text-[6rem] font-bold mb-4"}>Policies</h1>
                    <p className="text-[20px]">Explore our comprehensive policies and guidelines.</p>
                </div>
            </section>

            {/* Policies List Section */}
            <section className={isMobile?"mx-[10px] py-10":"mx-[100px] py-10"}>
                <h2 className="text-2xl font-semibold mb-6">All Policies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {policyItems.map((policy, index) => (
                        <div
                            key={index}
                            className="bg-[#F3F4F6] p-[14px] mb-[20px] rounded-[20px] shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:bg-[gray]  text-[#305d94] hover:text-[white]"
                            onClick={() => navigate(policy.path)}
                        >
                            <h3 className="text-lg font-medium ">{policy.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
