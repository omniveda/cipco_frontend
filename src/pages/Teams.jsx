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
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/teams');
            if (response.ok) {
                const data = await response.json();
                setTeams(data);
            } else {
                setError('Failed to fetch teams');
            }
        } catch (err) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading our amazing team...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <p className="text-red-600 font-medium">{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen mt-[120px] mx-[100px] bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#305d94] mb-4">
                        Meet Our <span className="text-blue-600">Expert Team</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        <Typewriter text="Dedicated professionals committed to excellence in pharmaceutical innovation and healthcare solutions." speed={30} />
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-3 xl:grid-cols-4 gap-[100px]">
                    {teams.map(team => (
                        <div
                            key={team._id}
                            className="bg-[#F3F4F6] p-[20px] rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                                {team.image ? (
                                    <img
                                        src={team.image}
                                        alt={team.name}
                                        className="w-[200px] h-[200px] rounded-full object-cover  border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-[250px] h-[250px] rounded-full bg-gray-300 flex items-center justify-center border-4 border-white shadow-lg">
                                        <span className="text-4xl font-bold text-gray-600">
                                            {team.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                )}
                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full opacity-60"></div>
                                <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400 rounded-full opacity-60"></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {team.name}
                                </h3>
                                <p className="text-blue-600 inline-block px-[10px] text-[white] rounded-[20px] py-[2px] bg-[#8CA9FF] font-medium text-lg mb-4">
                                    {team.designation}
                                </p>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {teams.length === 0 && (
                    <div className="text-center py-16">
                        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Team Members Yet</h3>
                            <p className="text-gray-600">We're working on building our amazing team. Check back soon!</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
