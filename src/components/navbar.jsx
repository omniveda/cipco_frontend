import logo from "../assets/logo/logo-nav.png";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showPoliciesDropdown, setShowPoliciesDropdown] = useState(false);
    const [showAboutDropdown, setShowAboutDropdown]=useState(false);
    const [showMobileAboutDropdown, setShowMobileAboutDropdown] = useState(false);
    const [showMobileInvestorDropdown, setShowMobileInvestorDropdown] = useState(false);
    const [showMobilePoliciesDropdown, setShowMobilePoliciesDropdown] = useState(false);

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

    const topMenuItems = [
        { name: 'About' , path:''},
        { name: 'Products', path: '/products' },
        { name: 'Manufacturing',path: '/manufacturing' },
        { name: 'Media', path: '/media' },
        // { name: 'Certificate', path: '/certificates' },
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'Blog', path: '/blog' },
    ];

    const aboutBottomMenuItems = [
        {name: "About us", path:'/about-us'},
        {name: "Teams", path:'/teams'},
    ];

    const bottomMenuItems = [
        { name: 'Investor Relation', path: '' },
    ];

    const superbottomMenuItems = [
        { name: 'RTA Details & Compliance officer details', path: '/rta-details-compliance-officer' },
        { name: 'Shareholding Pattern', path: '/Shareholding-Pattern' },
        { name: 'Policies', path: '/policies' },
    ];

    

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            style={{
                position: 'fixed',
                top: [0],
                left: [0],
                right: [0],
                width: '100%',
                backgroundColor: 'white',
                zIndex: 50,
                boxShadow: '0 4px 6px -4px rgba(0, 0, 0, 0.2)',
                borderBottom: '1px solid #e5e7eb'
            }}
        >
            {/* Desktop Layout */}
            {!isMobile && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '[180px]',
                    marginRight: '[180px]',
                    justifyContent: 'center',
                    gap: '100px'
                }}>
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/" onClick={closeMenu}>
                            <img src={logo} alt="CIPCO LIMITED" style={{ height: '60px', width: '180px' }} />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div>
                        <nav style={{ display: 'flex'}}>
                            {topMenuItems.map((item, index) => (
                                item.name === 'About' ? (
                                    <div
                                        key={index}
                                        style={{ position: 'relative', margin: '10px 18px' }}
                                        onMouseEnter={() => setShowAboutDropdown(true)}
                                        onMouseLeave={() => setShowAboutDropdown(false)}
                                    >
                                        <Link
                                            to={item.path}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#374151',
                                                fontSize: '14px',
                                                // margin: '10px 18px',
                                                fontWeight: 400,
                                                cursor: 'pointer'
                                            }}
                                            onMouseOver={(e) => e.target.style.color = '#374151'}
                                            onMouseOut={(e) => e.target.style.color = '#374151'}
                                        >
                                            {item.name}
                                        </Link>
                                        {showAboutDropdown && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    backgroundColor: '#F3F4F6',
                                                    boxShadow: '0 4px 6px -4px rgba(0, 0, 0, 0.2)',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '4px',
                                                    zIndex: 60,
                                                    minWidth: '200px'
                                                }}
                                            >
                                                {aboutBottomMenuItems.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={subItem.path}
                                                        style={{
                                                            display: 'block',
                                                            textDecoration: 'none',
                                                            color: '#374151',
                                                            fontSize: '14px',
                                                            padding: '10px 16px',
                                                            fontWeight: 400,
                                                            borderBottom: subIndex < aboutBottomMenuItems.length - 1 ? '1px solid #e5e7eb' : 'none'
                                                        }}
                                                        onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                                                        onMouseOut={(e) => e.target.style.backgroundColor = '#F3F4F6'}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        style={{
                                            textDecoration: 'none',
                                            color: '#374151',
                                            fontSize: '14px',
                                            margin: '10px 18px',
                                            fontWeight: 400,
                                            cursor: 'pointer'
                                        }}
                                        onMouseOver={(e) => e.target.style.color = '#374151'}
                                        onMouseOut={(e) => e.target.style.color = '#374151'}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </nav>

                        <div style={{ borderTop: '2px solid #A4CAFE', margin: '0 32px' }}></div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}>
                            <nav style={{ display: 'flex', position: 'relative' }}>
                                {bottomMenuItems.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{ position: 'relative' }}
                                        onMouseEnter={() => item.name === 'Investor Relation' && setShowDropdown(true)}
                                        onMouseLeave={() => item.name === 'Investor Relation' && setShowDropdown(false)}
                                    >
                                        <Link
                                            to={item.path}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#305d94',
                                                fontSize: '14px',
                                                margin: '16px 20px',
                                                fontWeight: 600,
                                                cursor: 'pointer'
                                            }}
                                            onMouseOver={(e) => e.target.style.color = '#1d4ed8'}
                                            onMouseOut={(e) => e.target.style.color = '#1e40af'}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.name === 'Investor Relation' && showDropdown && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    backgroundColor: '#F3F4F6',
                                                    boxShadow: '0 4px 6px -4px rgba(0, 0, 0, 0.2)',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '4px',
                                                    zIndex: 60,
                                                    minWidth: '300px'
                                                }}
                                            >
                                                {superbottomMenuItems.map((subItem, subIndex) => (
                                                    <div
                                                        key={subIndex}
                                                        style={{ position: 'relative' }}
                                                        
                                                    >
                                                        <Link
                                                            to={subItem.path}
                                                            style={{
                                                                display: 'block',
                                                                textDecoration: 'none',
                                                                color: '#374151',
                                                                fontSize: '14px',
                                                                padding: '10px 16px',
                                                                fontWeight: 400,
                                                                borderBottom: subIndex < superbottomMenuItems.length - 1 ? '1px solid #e5e7eb' : 'none'
                                                            }}
                                                            onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                                                            onMouseOut={(e) => e.target.style.backgroundColor = '#F3F4F6'}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>
                            <Link to="/why-partner-with-us" onClick={closeMenu}>
                                <button style={{
                                    border: '1px solid #76A9FA',
                                    backgroundColor: 'white',
                                    color: '#3F83F8',
                                    padding: '6px 12px',
                                    margin: '8px',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                                onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                                >
                                    Why partner with us?
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Layout */}
            {isMobile && (
                <motion.div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/" onClick={closeMenu}>
                            <img src={logo} alt="CIPCO LIMITED" style={{ height: '50px', width: '150px' }} />
                        </Link>
                    </div>

                    {/* Hamburger Menu */}
                    <motion.div
                        onClick={toggleMenu}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            padding: '8px',
                            borderRadius: '4px'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            style={{
                                width: '25px',
                                height: '3px',
                                backgroundColor: '#374151',
                                borderRadius: '2px'
                            }}
                            animate={{
                                rotate: menuOpen ? 45 : 0,
                                y: menuOpen ? 8 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        ></motion.span>
                        <motion.span
                            style={{
                                width: '25px',
                                height: '3px',
                                backgroundColor: '#374151',
                                borderRadius: '2px'
                            }}
                            animate={{
                                opacity: menuOpen ? 0 : 1
                            }}
                            transition={{ duration: 0.3 }}
                        ></motion.span>
                        <motion.span
                            style={{
                                width: '25px',
                                height: '3px',
                                backgroundColor: '#374151',
                                borderRadius: '2px'
                            }}
                            animate={{
                                rotate: menuOpen ? -45 : 0,
                                y: menuOpen ? -8 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        ></motion.span>
                    </motion.div>
                </motion.div>
            )}

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobile && menuOpen && (
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '90%',
                            backgroundColor: 'white',
                            boxShadow: '0 4px 6px -4px rgba(0, 0, 0, 0.2)',
                            zIndex: 40,
                            padding: '20px',
                            maxHeight: 'calc(100vh - 100px)',
                            overflowY: 'auto'
                        }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <motion.nav
                            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                        >
                            {topMenuItems.map((item, index) => (
                                item.name === 'About' ? (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                    >
                                        <div
                                            onClick={() => setShowMobileAboutDropdown(!showMobileAboutDropdown)}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#374151',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                                padding: '8px 0',
                                                display: 'block',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {item.name}
                                            <span style={{ marginLeft: '8px' }}>
                                                {showMobileAboutDropdown ? '▲' : '▼'}
                                            </span>
                                        </div>
                                        <AnimatePresence>
                                            {showMobileAboutDropdown && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{
                                                        backgroundColor: '#F3F4F6',
                                                        borderRadius: '4px',
                                                        marginTop: '8px',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    {aboutBottomMenuItems.map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.path}
                                                            onClick={closeMenu}
                                                            style={{
                                                                display: 'block',
                                                                textDecoration: 'none',
                                                                color: '#374151',
                                                                fontSize: '16px',
                                                                padding: '10px 16px',
                                                                fontWeight: 400,
                                                                borderBottom: subIndex < aboutBottomMenuItems.length - 1 ? '1px solid #e5e7eb' : 'none'
                                                            }}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={closeMenu}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#374151',
                                                fontSize: '16px',
                                                fontWeight: 400,
                                                padding: '8px 0',
                                                display: 'block'
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                )
                            ))}
                            <motion.div
                                style={{ borderTop: '1px solid #e5e7eb', margin: '8px 0' }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            ></motion.div>
                            {bottomMenuItems.map((item, index) => (
                                item.name === 'Investor Relation' ? (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (topMenuItems.length + index) * 0.05, duration: 0.3 }}
                                    >
                                        <div
                                            onClick={() => setShowMobileInvestorDropdown(!showMobileInvestorDropdown)}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#1e40af',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                padding: '8px 0',
                                                display: 'block',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {item.name}
                                            <span style={{ marginLeft: '8px' }}>
                                                {showMobileInvestorDropdown ? '▲' : '▼'}
                                            </span>
                                        </div>
                                        <AnimatePresence>
                                            {showMobileInvestorDropdown && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{
                                                        backgroundColor: '#F3F4F6',
                                                        borderRadius: '4px',
                                                        marginTop: '8px',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    {superbottomMenuItems.map((subItem, subIndex) => (
                                                        subItem.name === 'Policies' ? (
                                                            <div
                                                                key={subIndex}
                                                                style={{ position: 'relative' }}
                                                            >
                                                                <div
                                                                    onClick={() => setShowMobilePoliciesDropdown(!showMobilePoliciesDropdown)}
                                                                    style={{
                                                                        display: 'block',
                                                                        textDecoration: 'none',
                                                                        color: '#374151',
                                                                        fontSize: '16px',
                                                                        padding: '10px 16px',
                                                                        fontWeight: 400,
                                                                        cursor: 'pointer',
                                                                        borderBottom: subIndex < superbottomMenuItems.length - 1 ? '1px solid #e5e7eb' : 'none'
                                                                    }}
                                                                >
                                                                    {subItem.name}
                                                                    <span style={{ marginLeft: '8px' }}>
                                                                        {showMobilePoliciesDropdown ? '▲' : '▼'}
                                                                    </span>
                                                                </div>
                                                                <AnimatePresence>
                                                                    {showMobilePoliciesDropdown && (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, height: 0 }}
                                                                            animate={{ opacity: 1, height: 'auto' }}
                                                                            exit={{ opacity: 0, height: 0 }}
                                                                            transition={{ duration: 0.3 }}
                                                                            style={{
                                                                                backgroundColor: '#e1e2e4ff',
                                                                                borderRadius: '4px',
                                                                                marginTop: '4px',
                                                                                overflow: 'hidden'
                                                                            }}
                                                                        >
                                                                            {policyItems.map((policyItem, policyIndex) => (
                                                                                <Link
                                                                                    key={policyIndex}
                                                                                    to={policyItem.path}
                                                                                    onClick={closeMenu}
                                                                                    style={{
                                                                                        display: 'block',
                                                                                        textDecoration: 'none',
                                                                                        color: '#374151',
                                                                                        fontSize: '16px',
                                                                                        padding: '10px 20px',
                                                                                        fontWeight: 400,
                                                                                        borderBottom: policyIndex < policyItems.length - 1 ? '1px solid #e5e7eb' : 'none'
                                                                                    }}
                                                                                >
                                                                                    {policyItem.name}
                                                                                </Link>
                                                                            ))}
                                                                        </motion.div>
                                                                    )}
                                                                </AnimatePresence>
                                                            </div>
                                                        ) : (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.path}
                                                                onClick={closeMenu}
                                                                style={{
                                                                    display: 'block',
                                                                    textDecoration: 'none',
                                                                    color: '#374151',
                                                                    fontSize: '16px',
                                                                    padding: '10px 16px',
                                                                    fontWeight: 400,
                                                                    borderBottom: subIndex < superbottomMenuItems.length - 1 ? '1px solid #e5e7eb' : 'none'
                                                                }}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        )
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (topMenuItems.length + index) * 0.05, duration: 0.3 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={closeMenu}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#1e40af',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                padding: '8px 0',
                                                display: 'block'
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                )
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                            >
                                <Link to="/why-partner-with-us" onClick={closeMenu}>
                                    <button style={{
                                        border: '1px solid #76A9FA',
                                        backgroundColor: 'white',
                                        color: '#3F83F8',
                                        padding: '10px 16px',
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        width: '100%',
                                        marginTop: '16px'
                                    }}>
                                        Why partner with us?
                                    </button>
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
