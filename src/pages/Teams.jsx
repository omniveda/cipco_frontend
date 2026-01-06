import { useState, useEffect } from 'react';

// Typewriter component for typing animation
const Typewriter = ({ text, speed = 50 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    return <span>{displayText}</span>;
};

export default function Teams() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const teams = [
        {
            name: 'Mr. Gaurav Jhawar',
            designation: 'Managing Director',
            Details: 'Mr. Gaurav Jhawar serves as the Managing Director of Cipco Limited., bringing over 25 years of rich experience and deep industry insight to the organization. A postgraduate in Commerce from Gujarati College, Indore, he has been an integral part of the company’s journey since its early days, contributing significantly to its evolution into a trusted name in the pharmaceutical sector. With a keen eye for operational excellence and a strong command over the intricacies of the business, Mr. Jhawar has played a pivotal role in strengthening Cipco’s foundation and scaling its growth across key verticals. His leadership has been central to streamlining internal processes, enhancing supply chain efficiencies, and fostering sustainable business practices that align with the company’s long-term goals. Known for his steady vision and people-centric approach, Mr. Jhawar emphasizes collaboration, accountability, and continuous improvement at every level of the organization. His ability to balance strategic thinking with hands-on management has helped Cipco navigate complex market dynamics while maintaining a consistent focus on quality, compliance, and customer satisfaction. ',
            quote: '“Success is built on strong fundamentals. At Cipco, we don’t just aim for growth—we build it on trust, performance, and a commitment to doing what’s right for our people, partners, and patients.”'
        },
        {
            name: 'Mr. Lakhan Lal Chouhan',
            designation: 'Director',
            Details: 'Mr. Lakhan Lal Chouhan is a Director at Cipco Limited., bringing with him over 19 years of comprehensive experience in the pharmaceutical industry. He holds an MBA in Pharmaceutical Management from Eastern Institute, which has equipped him with a unique blend of scientific knowledge and strategic business acumen. Over the course of nearly two decades, Mr. Chouhan has played a pivotal role in steering operations, optimizing supply chains, and ensuring compliance with global regulatory standards. His deep industry insight and practical leadership have contributed significantly to the consistent growth and operational excellence of Cipco Limited. His core strengths lie in business process improvement, strategic planning, and cross-functional team leadership, all of which have been vital in expanding the company’s presence across competitive markets. Mr. Chouhan continues to drive initiatives that align with Cipco’s vision of delivering accessible and high-quality healthcare solutions. Passionate about organizational development, he advocates for a leadership style centered on accountability, collaboration, and sustainable progress.',
            quote:'“Sustainable success in pharma lies in precision, purpose, and people. Every challenge is an opportunity to raise the standards of healthcare delivery—and that’s the commitment we work towards every day.”'
        },
        {
            name: 'Mr. Mahavir Birle',
            designation: 'Director',
            Details: 'Mr. Mahavir Birle serves as the Director of Cipco Limited., bringing over 16 years of extensive experience in the pharmaceutical industry. A graduate in Bachelor of Pharmacy from RGPV University, Bhopal, and a Master’s in Pharmacy (Pharmaceutics) from VM University, Salem, his strong academic foundation is complemented by a deep understanding of the scientific and operational aspects of the pharma sector. Throughout his career, Mr. Birle has contributed significantly to product development, quality management, and regulatory compliance—key pillars of a successful pharmaceutical enterprise. His hands-on expertise and technical insight have been instrumental in strengthening Cipco’s manufacturing and product innovation capabilities. With a deep commitment to healthcare excellence, Mr. Birle focuses on ensuring the highest standards of product quality, safety, and efficacy. He plays a crucial role in driving the company’s efforts to meet global regulatory benchmarks and expand its footprint in both domestic and international markets. A firm believer in continuous improvement and collaborative growth, Mr. Birle fosters a work culture grounded in discipline, responsibility, and professional development.  ',
            quote:'“Pharma is more than an industry—it s a commitment to life. Every formulation we deliver carries our responsibility to quality, ethics, and the wellbeing of people around the world.”'
        },
        {
            name: 'Mr. Keshav Jhawar',
            designation: 'Director',
            Details: 'Mr. Keshav Jhawar serves as the Director of Cipco Limited. A business graduate from Daly College of Business Management and an alumnus of the Global Family Managed Business Program at SP Jain Institute of Management and Research, Mumbai, he brings a balanced approach rooted in both traditional business values and modern strategic thinking. With a strong focus on international business development, institutional supply, and government procurement, he has played a key role in expanding Cipco’s presence across domestic and global markets. His leadership continues to guide the company’s growth into regulated, semi-regulated, and emerging markets through structured strategies and long-term vision. Mr. Jhawar believes that true progress is measured not only by organizational achievements but also by the growth of individuals within it. He encourages a leadership culture based on transparency, innovation, and shared success.   ',
            quote:'“When the company grows, every individual should grow with it. I believe in delivering not just medicines, but a promise of quality healthcare—with innovation, integrity, and impact.”'
        },
        {
            name: 'Mr. Shripati Jhawar',
            designation: 'Chief Financial Officer & Director',
            Details: 'Mr. Shripati Jhawar is the CFO and Director of Cipco Limited., representing the next generation of leadership with a fresh perspective and forward-thinking approach. A BBA graduate from De Montfort University, London, he joined the business at a young age and brings a unique blend of global academic exposure and homegrown business understanding. With a focus on financial strategy and business insights, Mr. Jhawar plays a key role in identifying new growth opportunities and strengthening Cipco’s financial health. His enthusiasm, energy, and data-driven decision-making contribute to agile operations and long-term value creation. Dedicated to innovation and continuous progress, he is committed to aligning the company’s financial direction with its broader vision for expansion and impact in the healthcare sector.  ',
            quote:'“I believe in combining insight with action. At Cipco, we’re not just building a company—we’re building a future driven by smart growth, innovation, and purpose.”'
        }
    ];

    return (
        <section className={isMobile ? "min-h-screen mt-[120px] bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8" : "min-h-screen mt-[120px] mx-[100px] bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8"}>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#305d94] mb-4">
                        Meet Our <span className="text-blue-600">Expert Team</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        <Typewriter text="Dedicated professionals committed to excellence in pharmaceutical innovation and healthcare solutions." speed={0} />
                    </p>
                </div>

                {/* Team List */}
                <div className={isMobile?"space-y-8 grid grid-cols-1 gap-[20px] mb-[10px]":"space-y-8 grid grid-cols-3 mb-[30px] gap-[20px]"}>
                    {teams.map(team => {
                        const truncatedDetails = team.Details.length > 300 ? team.Details.substring(0, 300) + '...' : team.Details;

                        return (
                            <div
                                key={team.name}
                                className={isMobile?"bg-white p-[20px] bg-[#F3F4F6] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300 ":"bg-white p-[20px] bg-[#F3F4F6] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300"}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{team.name}</h2>
                                <p className="text-xl text-blue-600 mb-4 font-medium">{team.designation}</p>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    {truncatedDetails}
                                </p>
                                {team.Details.length > 300 && (
                                    <div
                                        onClick={() => {
                                            setSelectedTeam(team);
                                            setIsModalOpen(true);
                                        }}
                                        className="mt-4 px-[10px] py-[6px] bg-[#1C64F2] text-[white] inline-block cursor-pointer hover:text-[#1C64F2] hover:bg-[white] border-[2px] border-[#1C64F2] rounded-[20px] shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 font-medium"
                                    >
                                        Read More
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Modal */}
                {isModalOpen && selectedTeam && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 50
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '0.5rem',
                            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
                            maxWidth: isMobile?'':'56rem',
                            width: isMobile?'':'100%',
                            margin: isMobile?'0 1rem':'0 1rem',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row'
                            }}>
                                {/* Left: Skeleton Image */}
                                <div style={{
                                    width: isMobile ? '30%' : '33.333%',
                                    padding: isMobile?'4px':'1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        width: isMobile?'':'100%',
                                        height: isMobile?'':'16rem',
                                        backgroundColor: '#e5e7eb',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* Right: Details */}
                                <div style={{
                                    width: isMobile ? '85%' : '66.667%',
                                    padding: '1.5rem'
                                }}>
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-3xl font-bold text-[#111827]">{selectedTeam.name}</h2>
                                        <div
                                            onClick={() => setIsModalOpen(false)}
                                            className="text-[#6B7280] px-[8px] py-[2px] border-[2px] border-[#6B7280] hover:text-[white] text-[20px] rounded-[6px] bg-[white] hover:bg-[#6B7280]"
                                        >
                                            ✕
                                        </div>
                                    </div>
                                    <p className="text-xl text-[#5850EC] mb-4 font-medium">{selectedTeam.designation}</p>
                                    <blockquote className="text-lg italic text-[#374151] mb-6 border-l-4 border-blue-500 pl-[8px]">
                                        {selectedTeam.quote}
                                    </blockquote>
                                    <p className="text-[#374151] leading-relaxed text-justify">{selectedTeam.Details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
