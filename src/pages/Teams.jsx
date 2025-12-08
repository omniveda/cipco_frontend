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
    const [expanded, setExpanded] = useState({});

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
            designation: 'Managing Director, Cipco Limited',
            Details: 'Mr. Gaurav Jhawar serves as the Managing Director of Cipco Ltd., bringing over 25 years of rich experience and deep industry insight to the organization. A postgraduate in Commerce from Gujarati College, Indore, he has been an integral part of the company’s journey since its early days, contributing significantly to its evolution into a trusted name in the pharmaceutical sector. With a keen eye for operational excellence and a strong command over the intricacies of the business, Mr. Jhawar has played a pivotal role in strengthening Cipco’s foundation and scaling its growth across key verticals. His leadership has been central to streamlining internal processes, enhancing supply chain efficiencies, and fostering sustainable business practices that align with the company’s long-term goals. Known for his steady vision and people-centric approach, Mr. Jhawar emphasizes collaboration, accountability, and continuous improvement at every level of the organization. His ability to balance strategic thinking with hands-on management has helped Cipco navigate complex market dynamics while maintaining a consistent focus on quality, compliance, and customer satisfaction. “Success is built on strong fundamentals. At Cipco, we don’t just aim for growth—we build it on trust, performance, and a commitment to doing what’s right for our people, partners, and patients.”'
        },
        {
            name: 'Mr. Lakhan Lal Chouhan',
            designation: 'Director, Cipco Limited.',
            Details: 'Mr. Lakhan Lal Chouhan is a Director at Cipco Limited., bringing with him over 19 years of comprehensive experience in the pharmaceutical industry. He holds an MBA in Pharmaceutical Management from Eastern Institute, which has equipped him with a unique blend of scientific knowledge and strategic business acumen. Over the course of nearly two decades, Mr. Chouhan has played a pivotal role in steering operations, optimizing supply chains, and ensuring compliance with global regulatory standards. His deep industry insight and practical leadership have contributed significantly to the consistent growth and operational excellence of Cipco Limited. His core strengths lie in business process improvement, strategic planning, and cross-functional team leadership, all of which have been vital in expanding the company’s presence across competitive markets. Mr. Chouhan continues to drive initiatives that align with Cipco’s vision of delivering accessible and high-quality healthcare solutions. Passionate about organizational development, he advocates for a leadership style centered on accountability, collaboration, and sustainable progress. “Sustainable success in pharma lies in precision, purpose, and people. Every challenge is an opportunity to raise the standards of healthcare delivery—and that’s the commitment we work towards every day.”'
        },
        {
            name: 'Mr. Mahavir Birle',
            designation: 'Director, Cipco Ltd.',
            Details: 'Mr. Mahavir Birle serves as the Director of Cipco Ltd., bringing over 16 years of extensive experience in the pharmaceutical industry. A graduate in Bachelor of Pharmacy from RGPV University, Bhopal, and a Master’s in Pharmacy (Pharmaceutics) from VM University, Salem, his strong academic foundation is complemented by a deep understanding of the scientific and operational aspects of the pharma sector. Throughout his career, Mr. Birle has contributed significantly to product development, quality management, and regulatory compliance—key pillars of a successful pharmaceutical enterprise. His hands-on expertise and technical insight have been instrumental in strengthening Cipco’s manufacturing and product innovation capabilities. With a deep commitment to healthcare excellence, Mr. Birle focuses on ensuring the highest standards of product quality, safety, and efficacy. He plays a crucial role in driving the company’s efforts to meet global regulatory benchmarks and expand its footprint in both domestic and international markets. A firm believer in continuous improvement and collaborative growth, Mr. Birle fosters a work culture grounded in discipline, responsibility, and professional development. “Pharma is more than an industry—it s a commitment to life. Every formulation we deliver carries our responsibility to quality, ethics, and the wellbeing of people around the world.” '
        },
        {
            name: 'Mr. Keshav Jhawar',
            designation: 'Director, Cipco Ltd.',
            Details: 'Mr. Keshav Jhawar serves as the Director of Cipco Ltd. A business graduate from Daly College of Business Management and an alumnus of the Global Family Managed Business Program at SP Jain Institute of Management and Research, Mumbai, he brings a balanced approach rooted in both traditional business values and modern strategic thinking. With a strong focus on international business development, institutional supply, and government procurement, he has played a key role in expanding Cipco’s presence across domestic and global markets. His leadership continues to guide the company’s growth into regulated, semi-regulated, and emerging markets through structured strategies and long-term vision. Mr. Jhawar believes that true progress is measured not only by organizational achievements but also by the growth of individuals within it. He encourages a leadership culture based on transparency, innovation, and shared success.  “When the company grows, every individual should grow with it. I believe in delivering not just medicines, but a promise of quality healthcare—with innovation, integrity, and impact.” '
        },
        {
            name: 'Mr. Shripati Jhawar',
            designation: 'Chief Financial Officer & Director, Cipco Ltd.',
            Details: 'Mr. Shripati Jhawar is the CFO and Director of Cipco Limited., representing the next generation of leadership with a fresh perspective and forward-thinking approach. A BBA graduate from De Montfort University, London, he joined the business at a young age and brings a unique blend of global academic exposure and homegrown business understanding. With a focus on financial strategy and business insights, Mr. Jhawar plays a key role in identifying new growth opportunities and strengthening Cipco’s financial health. His enthusiasm, energy, and data-driven decision-making contribute to agile operations and long-term value creation. Dedicated to innovation and continuous progress, he is committed to aligning the company’s financial direction with its broader vision for expansion and impact in the healthcare sector. “I believe in combining insight with action. At Cipco, we’re not just building a company—we’re building a future driven by smart growth, innovation, and purpose.” '
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
                <div className="space-y-8 grid grid-cols-3 gap-[20px]">
                    {teams.map(team => {
                        const isExpanded = expanded[team.name];
                        const truncatedDetails = team.Details.length > 300 ? team.Details.substring(0, 300) + '...' : team.Details;

                        return (
                            <div
                                key={team.name}
                                className="bg-white p-[20px] bg-[#F3F4F6] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{team.name}</h2>
                                <p className="text-xl text-blue-600 mb-4 font-medium">{team.designation}</p>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    {isExpanded ? team.Details : truncatedDetails}
                                </p>
                                {team.Details.length > 300 && (
                                    <button
                                        onClick={() => setExpanded(prev => ({ ...prev, [team.name]: !prev[team.name] }))}
                                        className="mt-4 px-[10px] py-[6px] bg-[#1C64F2] text-[white] rounded-[20px] shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 font-medium"
                                    >
                                        {isExpanded ? 'Read Less ∧' : 'Read More ∨'} 
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
