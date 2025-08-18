import logo from '../assets/logo/footer-logo.png'; // Adjust the path as necessary
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='mt-[100px]' style={{ backgroundColor: '#101014', color: 'white', padding: '20px',paddingInline:'80px', textAlign: 'left' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
                <div className='flex gap-[100px]'>
                    <img src={logo} alt="Cipco Pharmaceuticals Logo" className='w-[350px] h-[100px] mt-[40px]' />
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <div className='mb-[20px] font-[600]'>Quick Links</div>
                        <li className='text-[#6B7280] mb-[13px]'>About Us</li>
                        <li className='text-[#6B7280] mb-[13px]'>Facilities</li>
                        <li className='text-[#6B7280] mb-[13px]'>Resources</li>
                        <li className='text-[#6B7280] mb-[13px]'>Careers</li>
                    </ul>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <h4></h4>
                        <li className='text-[#6B7280] mb-[13px] mt-[40px]'>News & Media</li>
                        <li className='text-[#6B7280] mb-[13px]'>Events</li>
                        <li className='text-[#6B7280] mb-[13px]'>Sustainability</li>
                        <li className='text-[#6B7280] mb-[13px]'>Contact Us</li>
                    </ul>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <h4></h4>
                        <li className='text-[#6B7280] mb-[13px] mt-[40px]'>Patient Centricity</li>
                        <li className='text-[#6B7280] mb-[13px]'>Specialized Offerings</li>
                        <li className='text-[#6B7280] mb-[13px]'>Nutrition Solutions</li>
                        <li className='text-[#6B7280] mb-[13px]'>Why Partner With Us?</li>
                    </ul>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <h4></h4>
                        <li className='text-[#6B7280] mb-[13px] mt-[40px]'>Drug Discovery</li>
                        <li className='text-[#6B7280] mb-[13px]'>Drug Substance</li>
                        <li className='text-[#6B7280] mb-[13px]'>Drug Product</li>
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
                <div className='cursor-pointer'>Privacy Policy</div>
                <div className='cursor-pointer'>Terms & Condition</div>
            </div>
            </div>
        </div>
    );
}
