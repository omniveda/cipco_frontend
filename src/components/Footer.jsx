// import logo from '../assets/logo/footer-logo.png'; // Adjust the path as necessary
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo-nav.png";

export default function Footer() {
    return (
        <div style={{ backgroundColor: '#101014', color: 'white', padding: '20px',paddingInline:'80px', textAlign: 'left' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
                <div className='flex gap-[100px]'>
                    <img src={logo} alt="Cipco Pharmaceuticals Logo" className='w-[350px] h-[100px] mt-[40px]' style={{ borderTopLeftRadius: '20px', borderBottomRightRadius: '20px' }} />
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
            <div className='border border-[#374151] border-[0.8px]'></div>
                <div className='flex items-center gap-[70px] my-[20px]'>
                    <h4>Contact Us</h4>
                    <p className='items-center flex gap-[10px]'><MdPhone size={20} />0731 4020311, 0786 9920311</p>
                    <p className='items-center flex gap-[10px]'><MdEmail size={20}/>info@cipcopharma.com</p>
                    
                </div>
                <div className='border border-[#374151] border-[0.8px]'></div>
                <div className='flex justify-between items-center mt-[20px]'>
            <p>© 2025 Cipco Pharmaceuticals. All rights reserved.</p>
            <div className='flex gap-[20px]'>
                <div className='cursor-pointer'><Link to="/privacy-policy" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Privacy Policy</Link></div>
                <div className='cursor-pointer'><Link to="/terms" className='text-[#6B7280] block' style={{ textDecoration: 'none' }}>Terms & Condition</Link></div>
            </div>
            </div>
        </div>
    );
}
