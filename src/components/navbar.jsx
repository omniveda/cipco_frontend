import logo from "../assets/logo/logo-nav.png";

export default function Navbar() {

    const topMenuItems = [
        { name: 'About Us' , path: '/about-us'},
        { name: 'Products', path: '/products' },
        { name: 'Manufacturing',path: '/manufacturing' },        
        { name: 'Media', path: '/media' },
        { name: 'Certificate', path: '/certificates' },
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'Blog', path: '/blog' },     
    ];

    const bottomMenuItems = [
        { name: 'R&D and Innovation', path: '/rnd-innovation'},
        { name: 'PCD & Franchise Business', path: '/pcd-franchise' },   
        { name: 'Investor Relations', path: '/investor-relations' },     
    ];

    return (
        <header
        className="fixed top-[0]  left-[0] right-[0] w-full bg-[white] z-50"
        style={{
          boxShadow: '0 4px 6px -4px rgba(0, 0, 0, 0.2)', // Bottom-only shadow
          borderBottom: '1px solid #e5e7eb'
        }}
      >
        {/* Top Navigation Row */}
        <div className="flex items-center mx-[180px] justify-center px-4 py-4 gap-[100px]">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="CIPCO LIMITED" className="h-[60px] w-[180px]" onClick={() => window.location.href = ("/")} />
          </div>
  
          {/* Top Navigation Links */}
          <div>
          <nav className="flex space-x-6">
            {topMenuItems.map((item, index) => (
              <div 
                key={index}
                href="#" 
                // style={{color: '#374151'}} 
                className="hover:text-gray-700 cursor-pointer text-[14px] my-[10px] mx-[18px] font-[400]"
                onClick={() => window.location.href = item.path} // Navigate on click
              >
                {item.name}
              </div>
            ))}
          </nav>

          <div style={{borderTop: '2px solid #A4CAFE'}} className="mx-8"></div>

          <div className="flex items-center justify-between px-8">
          {/* Bottom Navigation Links */}
          <nav className="flex space-x-8">
            {bottomMenuItems.map((item, index) => (
              <div
                key={index}
                href="#" 
                // style={{color: '#1e40af'}} 
                // style={{fontWeight: 'semibold'}}
                className="hover:text-blue-600 mx-[20px] my-[16px] text-[14px] font-[600] cursor-pointer"
                onClick={() => window.location.href = item.path}
              >
                {item.name}
              </div>
            ))}
          {/* CTA Button */}
<button style={{borderRadius:"6px"}} className="border border-[#76A9FA] bg-[white] text-[#3F83F8] px-[12px] my-[8px] rounded-xl hover:bg-gray-50 text-sm font-semibold transition-colors">
            Why partner with us?
          </button>
          </nav>
  
        </div>
          </div>
        </div>

        {/* Separator Line */}
        
  
        {/* Bottom Navigation Row */}
        
      </header>
    );
  }