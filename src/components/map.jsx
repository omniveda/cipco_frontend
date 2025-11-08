import map from '../assets/images/map.png';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Map(){
    const [hoveredLocation, setHoveredLocation] = useState(null);

    const locations = [
        {
            id: 1,
            name: "Indore Office",
            x: 71, // 30% from left
            y: 40, // 40% from top
            info: "Address: 123 Main St, Mumbai, India\nDescription: Our main office location handling operations and customer support."
        }
    ];

    return(
        <div className='p-[0px]' style={{ paddingLeft: '100px', paddingRight: '100px', position: 'relative' }}>
                <motion.h2 className='text-[30px] text-[#4a4f4e]'>Where We Are</motion.h2>
                <img src={map} style={{ opacity: 0.5, width: '100%', height: '100%' }} alt="" />
                {locations.map(location => (
                    <motion.div
                        key={location.id}
                        style={{
                            position: 'absolute',
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#675fe4ff',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            left: `${location.x}%`,
                            top: `${location.y}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.2 }
                        }}
                        onMouseEnter={() => setHoveredLocation(location)}
                        onMouseLeave={() => setHoveredLocation(null)}
                    />
                ))}
                {hoveredLocation && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            padding: '16px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                            zIndex: 10,
                            left: `${hoveredLocation.x}%`,
                            top: `${hoveredLocation.y}%`,
                            transform: 'translate(-50%, -100%) translateY(-10px)'
                        }}
                    >
                        <h3 style={{ fontWeight: 'bold' }}>{hoveredLocation.name}</h3>
                        <p style={{ fontSize: '14px', whiteSpace: 'pre-line' }}>{hoveredLocation.info}</p>
                    </motion.div>
                )}
            </div>
    );
}
