// import logo from '../assets/logo/footer-logo.png'; // Adjust the path as necessary
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/logo/logo-nav.png";

export default function Footer() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ backgroundColor: '#101014', color: 'white', padding: '20px', paddingInline: isMobile ? '20px' : '80px', textAlign: 'left' }}>
            {/* Desktop Layout */}
            {!isMobile && (
                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <div className='flex gap-[100px]'>
                        <img src={logo} alt="Cipco Limited Logo" className='w-[350px] h-[100px] mt-[40px]' style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }} />
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <div className='mb-[20px] font-[600]'>Quick Links</div>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/about-us" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>About Us</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/manufacturing" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Facilities</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/products" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Resources</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Careers</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/rnd-innovation" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Drug Discovery</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/manufacturing" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Drug Substance</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/manufacturing" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Drug Product</Link></li>
                        </ul>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <h4></h4>
                            <li className='text-[#6B7280] mb-[13px] mt-[40px]'><Link to="/media" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>News & Media</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/blog" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Events</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Sustainability</Link></li>
                            <li className='text-[#6B7280] mb-[13px]'><Link to="/contact-us" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                        </ul>
                        {/* <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <h4></h4>
                            <li className='text-[#6B7280] mb-[13px] mt-[40px]'>Patient Centricity</li>
                            <li className='text-[#6B7280] mb-[13px]'>Specialized Offerings</li>
                            <li className='text-[#6B7280] mb-[13px]'>Nutrition Solutions</li>
                            <li className='text-[#6B7280] mb-[13px]'>Why Partner With Us?</li>
                        </ul> */}
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <div className='mb-[15px] font-[600]'>Policies</div>
                            <li className='mb-[15px]'><Link to="/code-of-business-conduct-ethics" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Code of Business Conduct & Ethics</Link></li>
                            <li className='mb-[15px]'><Link to="/corporate-social-responsibility-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Corporate Social Responsibility Policy</Link></li>
                            <li className='mb-[15px]'><Link to="/criteria-for-making-payments-to-non-executive-directors" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Criteria For Making Payments To Non-Executive Directors</Link></li>
                            <li className='mb-[15px]'><Link to="/familiarization-programme-for-independent-directors" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Familiarization Programme For Independent Directors</Link></li>
                            <li className='mb-[15px]'><Link to="/nomination-and-remuneration-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Nomination and Remuneration Policy</Link></li>
                            <li className='mb-[15px]'><Link to="/policy-for-preservation-of-documents-and-archival-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Policy For Preservation Of Documents And Archival Policy</Link></li>
                            <li className='mb-[15px]'><Link to="/policy-on-determining-material-subsidiaries" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Policy On Determining Material Subsidiaries</Link></li>
                            <li className='mb-[15px]'><Link to="/posh-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>POSH policy</Link></li>
                            <li className='mb-[15px]'><Link to="/related-party-transaction-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Related Party Transaction Policy</Link></li>
                            <li className='mb-[15px]'><Link to="/risk-management-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Risk Management Policy</Link></li>
                            <li className='mb-[15px]'><Link to="/whistle-blower-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Whistle Blower Policy</Link></li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Mobile Layout */}
            {isMobile && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={logo} alt="Cipco Limited Logo" style={{ width: '150px', height: '50px', marginBottom: '20px', borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <div className='mb-[10px] font-[600]'>Quick Links</div>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/about-us" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>About Us</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/manufacturing" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Facilities</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/products" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Resources</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Careers</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/rnd-innovation" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Drug Discovery</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/manufacturing" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Drug Substance</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/manufacturing" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Drug Product</Link></li>
                        </ul>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/media" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>News & Media</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/blog" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Events</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Sustainability</Link></li>
                            <li className='text-[#6B7280] mb-[8px]'><Link to="/contact-us" className='text-[#6B7280] hover:text-white' style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                        </ul>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <div className='mb-[10px] font-[600]'>Policies</div>
                            <li className='mb-[8px]'><Link to="/code-of-business-conduct-ethics" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Code of Business Conduct & Ethics</Link></li>
                            <li className='mb-[8px]'><Link to="/corporate-social-responsibility-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Corporate Social Responsibility Policy</Link></li>
                            <li className='mb-[8px]'><Link to="/criteria-for-making-payments-to-non-executive-directors" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Criteria For Making Payments To Non-Executive Directors</Link></li>
                            <li className='mb-[8px]'><Link to="/familiarization-programme-for-independent-directors" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Familiarization Programme For Independent Directors</Link></li>
                            <li className='mb-[8px]'><Link to="/nomination-and-remuneration-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Nomination and Remuneration Policy</Link></li>
                            <li className='mb-[8px]'><Link to="/policy-for-preservation-of-documents-and-archival-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Policy For Preservation Of Documents And Archival Policy</Link></li>
                            <li className='mb-[8px]'><Link to="/policy-on-determining-material-subsidiaries" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Policy On Determining Material Subsidiaries</Link></li>
                            <li className='mb-[8px]'><Link to="/posh-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>POSH policy</Link></li>
                            <li className='mb-[8px]'><Link to="/related-party-transaction-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Related Party Transaction Policy</Link></li>
                            <li className='mb-[8px]'><Link to="/risk-management-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Risk Management Policy</Link></li>
                            <li className='mb-[8px]'><Link to="/whistle-blower-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Whistle Blower Policy</Link></li>
                        </ul>
                    </div>
                </div>
            )}

            <div className='border border-[#374151] border-[0.8px]'></div>
            <div className={`flex ${isMobile ? 'flex-col items-start gap-[10px]' : 'items-center gap-[70px]'} my-[20px]`}>
                <h4>Contact Us</h4>
                <p className='items-center flex gap-[10px]'><MdPhone size={20} />0731 4020311, 0786 9920311</p>
                <p className='items-center flex gap-[10px]'><MdEmail size={20} />info@cipcopharma.com</p>
                
              <a href="#" className="hover:opacity-80">
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24.002" fill="none" overflow="visible"><path d="M 7.03 0.085 C 5.753 0.145 4.881 0.349 4.12 0.648 C 3.32 0.951 2.595 1.424 1.996 2.036 C 1.387 2.636 0.916 3.362 0.616 4.163 C 0.321 4.927 0.12 5.801 0.064 7.077 C 0.008 8.355 -0.005 8.765 0.001 12.024 C 0.008 15.283 0.022 15.691 0.084 16.971 C 0.145 18.248 0.348 19.12 0.647 19.882 C 0.955 20.671 1.367 21.339 2.035 22.005 C 2.636 22.615 3.363 23.086 4.164 23.385 C 4.927 23.68 5.8 23.881 7.077 23.937 C 8.355 23.993 8.766 24.006 12.024 24 C 15.281 23.993 15.692 23.979 16.971 23.918 C 18.251 23.858 19.118 23.653 19.881 23.355 C 20.682 23.052 21.406 22.579 22.004 21.967 C 22.614 21.366 23.085 20.64 23.384 19.838 C 23.679 19.075 23.88 18.202 23.935 16.926 C 23.991 15.646 24.005 15.236 23.998 11.978 C 23.992 8.72 23.978 8.311 23.917 7.031 C 23.857 5.751 23.653 4.883 23.353 4.12 C 23.051 3.32 22.577 2.596 21.966 1.997 C 21.366 1.387 20.64 0.916 19.838 0.617 C 19.074 0.323 18.202 0.121 16.924 0.067 C 15.647 0.01 15.236 -0.005 11.977 0.001 C 8.718 0.009 8.31 0.022 7.03 0.085 M 7.17 21.778 C 6 21.728 5.365 21.533 4.942 21.37 C 4.421 21.178 3.949 20.873 3.56 20.475 C 3.161 20.089 2.853 19.618 2.66 19.097 C 2.495 18.674 2.297 18.039 2.243 16.869 C 2.183 15.605 2.171 15.225 2.163 12.021 C 2.157 8.817 2.169 8.438 2.224 7.173 C 2.274 6.004 2.47 5.368 2.632 4.945 C 2.848 4.384 3.109 3.985 3.527 3.563 C 3.914 3.164 4.385 2.856 4.906 2.663 C 5.329 2.498 5.963 2.302 7.133 2.246 C 8.398 2.186 8.777 2.174 11.981 2.166 C 15.184 2.16 15.564 2.172 16.831 2.228 C 17.999 2.278 18.635 2.472 19.058 2.636 C 19.618 2.852 20.018 3.111 20.44 3.531 C 20.861 3.951 21.121 4.348 21.34 4.909 C 21.505 5.331 21.702 5.965 21.757 7.136 C 21.817 8.401 21.831 8.781 21.837 11.984 C 21.842 15.187 21.831 15.567 21.776 16.832 C 21.725 18.002 21.531 18.637 21.368 19.062 C 21.152 19.622 20.891 20.022 20.472 20.442 C 20.086 20.842 19.615 21.149 19.094 21.342 C 18.672 21.507 18.036 21.704 16.868 21.76 C 15.602 21.82 15.223 21.832 12.018 21.839 C 8.814 21.846 8.436 21.833 7.17 21.779 M 16.953 5.587 C 16.954 6.17 17.306 6.694 17.844 6.916 C 18.383 7.139 19.002 7.014 19.413 6.602 C 19.825 6.189 19.947 5.569 19.723 5.032 C 19.499 4.494 18.973 4.144 18.39 4.145 C 17.595 4.147 16.952 4.792 16.953 5.587 M 5.839 12.013 C 5.846 15.416 8.61 18.169 12.013 18.163 C 15.416 18.156 18.169 15.392 18.162 11.989 C 18.113 8.617 15.362 5.91 11.989 5.917 C 8.616 5.923 5.875 8.64 5.839 12.013 M 8 12.009 C 7.996 9.8 9.783 8.006 11.992 8.001 C 14.201 7.997 15.996 9.784 16 11.993 C 16.005 14.202 14.217 15.997 12.008 16.001 C 10.947 16.003 9.929 15.584 9.178 14.835 C 8.426 14.087 8.002 13.07 8 12.009" fill="rgba(255, 255, 255, 1)"></path></svg>
              </a>

              <a href="#" className="hover:opacity-80">
                {/* X (Twitter) icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className={isMobile?"":"pl-[20px]"} width="18" height="18" fill="none" overflow="visible"><path d="M 0 18 L 7.548 10.452 M 18 0 L 10.452 7.548 M 10.452 7.548 L 5 0 L 0 0 L 7.548 10.452 M 10.452 7.548 L 18 18 L 13 18 L 7.548 10.452" fill="transparent" stroke-width="1.5" stroke="rgba(255, 255, 255, 1)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>
              </a>

              <a href="https://www.linkedin.com/company/81879518/admin/dashboard/" className="hover:opacity-80">
                {/* LinkedIn icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className={isMobile?'':'pl-[20px]'} width="24" height="24" fill="rgba(255, 255, 255, 1)" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            
            </div>
            <div className='border border-[#374151] border-[0.8px]'></div>
            <div className={`flex ${isMobile ? 'flex-col items-start gap-[10px]' : 'justify-between items-center'} mt-[20px]`}>
                <p>© 2025 Cipco Limited. All rights reserved.</p>
                <div className={`flex ${isMobile ? 'flex-col gap-[10px]' : 'gap-[20px]'}`}>
                    <div className='cursor-pointer'><Link to="/privacy-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Privacy Policy</Link></div>
                    <div className='cursor-pointer'><Link to="/terms" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Terms & Condition</Link></div>
                </div>
            </div>
            <div className='text-[12px] flex text-right justify-between'>
                <div className='flex gap-[3px]'>
                <p className='text-[#6B7280]'>Developed by </p>
                <p className='text-[#fe1981] cursor-pointer' onClick={()=>window.open("https://cybite.in/","_blank")}> Cybite</p>
                </div>
                <div className='flex gap-[3px]'>
                    <p className='text-[#6B7280]'>Marketing by </p>
                <p className='text-[#FFAF00] cursor-pointer' onClick={() => window.open("https://www.goldengallopm.com/", "_blank")}> GoldenGallop</p>
                </div>
            </div>
        </div>
    );
}
