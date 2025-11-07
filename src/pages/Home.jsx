import heroimg from '../assets/images/hero.png';
import Features from '../components/Features';
import mission from '../assets/images/mission.jpg';
import vision from '../assets/images/vission.jpg';
import whogmpcert from '../assets/images/whogmpcert.png';
import colon from '../assets/element/colon.png';
import about from '../assets/images/about.jpg';
import Map from '../components/map.jsx';
import Contact from '../components/Contact.jsx';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const heroVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: i * 0.2
    }
  })
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};


const data = [
    {
        img:mission,
        title:'Our Mission',
        content:"At CIPCO LTD, our mission is to deliver accessible, high-quality pharmaceutical solutions that heal and empower communities worldwide. Rooted in our founders value's, we foster innovation, integrity, and inclusivity, ensuring healthcare as a fundamental right through government partnerships and global exports.",
    },
    {
        img:vision,
        title:'Our Vision',
        content:'We envision CIPCO LTD as a global leader in equitable healthcare, conquering frontiers with cutting-edge technologies and sustainable growth. We aim to bridge health gaps, inspire generations, and build resilient societies worldwide.',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="21.45" height="15" fill="none" overflow="visible"><g><path d="M 10.725 12 C 11.975 12 13.038 11.563 13.913 10.688 C 14.788 9.813 15.225 8.75 15.225 7.5 C 15.225 6.25 14.788 5.188 13.913 4.313 C 13.038 3.438 11.975 3 10.725 3 C 9.475 3 8.412 3.438 7.537 4.313 C 6.662 5.188 6.225 6.25 6.225 7.5 C 6.225 8.75 6.662 9.813 7.537 10.688 C 8.412 11.563 9.475 12 10.725 12 Z M 10.725 10.2 C 9.975 10.2 9.338 9.938 8.813 9.413 C 8.287 8.888 8.025 8.25 8.025 7.5 C 8.025 6.75 8.287 6.113 8.813 5.588 C 9.338 5.063 9.975 4.8 10.725 4.8 C 11.475 4.8 12.113 5.063 12.638 5.588 C 13.163 6.113 13.425 6.75 13.425 7.5 C 13.425 8.25 13.163 8.888 12.638 9.413 C 12.113 9.938 11.475 10.2 10.725 10.2 Z M 10.725 15 C 8.492 15 6.454 14.4 4.612 13.2 C 2.771 12 1.317 10.417 0.25 8.45 C 0.167 8.3 0.104 8.146 0.063 7.988 C 0.021 7.829 0 7.667 0 7.5 C 0 7.333 0.021 7.171 0.063 7.012 C 0.104 6.854 0.167 6.7 0.25 6.55 C 1.317 4.583 2.771 3 4.612 1.8 C 6.454 0.6 8.492 0 10.725 0 C 12.958 0 14.996 0.6 16.838 1.8 C 18.679 3 20.133 4.583 21.2 6.55 C 21.283 6.7 21.346 6.854 21.388 7.012 C 21.429 7.171 21.45 7.333 21.45 7.5 C 21.45 7.667 21.429 7.829 21.388 7.988 C 21.346 8.146 21.283 8.3 21.2 8.45 C 20.133 10.417 18.679 12 16.838 13.2 C 14.996 14.4 12.958 15 10.725 15 Z" fill="rgb(0, 87, 160)"></path></g></svg>
    }
];

export default function Home() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(()=>{
      const handleResize = () =>{
        const mobile=window.innerWidth < 768;
        setIsMobile(mobile);
        if(!mobile){
          setIsMobile(false);
        }
      };
      window.addEventListener('resize',handleResize);
      return()=>window.removeEventListener('resize',handleResize);
    },[]);

    return (
        <>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          style={{ marginTop: '110px', marginLeft: isMobile?'0px': '100px', marginRight:isMobile?'0px': '100px', borderRadius: isMobile?'10px': '40px', overflow: 'hidden', position: 'relative', height: isMobile ? '500px' : '600px' }}
        >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>

               <img src={heroimg} alt="hero img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                {/* Content Overlaid */}
                <motion.div
                  variants={heroVariants}
                  style={{ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: isMobile ? '20px' : '20px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', zIndex: 20 }}
                >

                    <motion.div
                      variants={childVariants}
                      style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.4)', padding: '10px', borderRadius: '40px', border: '1px solid white', marginBottom: isMobile ? '20px' : '20px' }}
                    >
                        <svg style={{ marginRight: '8px' }} xmlns="http://www.w3.org/2000/svg" width="18.057" height="18" fill="none" overflow="visible"><g><path d="M 2.029 18 C 1.179 18 0.574 17.621 0.216 16.863 C -0.142 16.104 -0.055 15.4 0.479 14.75 L 6.029 8 L 6.029 2 L 5.029 2 C 4.745 2 4.508 1.904 4.316 1.713 C 4.124 1.521 4.029 1.283 4.029 1 C 4.029 0.717 4.124 0.479 4.316 0.288 C 4.508 0.096 4.745 0 5.029 0 L 13.028 0 C 13.312 0 13.549 0.096 13.741 0.288 C 13.933 0.479 14.028 0.717 14.028 1 C 14.028 1.283 13.933 1.521 13.741 1.713 C 13.549 1.904 13.312 2 13.028 2 L 12.028 2 L 12.028 8 L 17.578 14.75 C 18.112 15.4 18.199 16.104 17.841 16.863 C 17.483 17.621 16.878 18 16.028 18 Z M 4.029 15 L 14.028 15 L 10.628 11 L 7.428 11 Z" fill="rgb(255,255,255)"></path></g></svg>
                        Trusted Pharma Solutions
                    </motion.div>

                    <motion.h1
                      variants={childVariants}
                      style={{ fontSize: isMobile ? '30px' : '50px', fontWeight: 'bold', color: 'white', marginBottom: isMobile ? '10px' : '10px' }}
                    >Precision Formulations for Better Health</motion.h1>
                    <motion.p
                      variants={childVariants}
                      style={{ marginTop: '4px', fontSize: isMobile ? '16px' : '18px', color: 'white', marginBottom: isMobile ? '20px' : '20px' }}
                    >From essential generics to advanced therapeutics, our products are engineered for performance and trust. Quality, compliance, and care in every dose.</motion.p>
                    <motion.button
                      variants={childVariants}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => navigate('/products')}
                      style={{ border: '1px solid white', color: 'white', padding: '10px 12px', borderRadius: '40px', fontSize: '13px', backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.3s' }}
                      onMouseEnter={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'black'; }}
                      onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'; }}
                    >
                        View Products
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>

        {/*what we offer*/}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className={isMobile?'mt-[0px]':'mx-[100px] mt-[100px] '}
        >
            <motion.div variants={childVariants} className={isMobile?'w-0':'w-[60%] border border-[#98d2de] bg-[#e8f7fa] pl-[20px] py-[20px]  rounded-[20px]'}>
                <motion.p
                  variants={childVariants}
                  className='inline-block py-[10px] px-[8px] text-left text-[18px] border rounded-[10px]  text-[#4B5563] font-bold mt-10'
                >WHAT WE OFFER</motion.p>
                <motion.p
                  variants={childVariants}
                  className='text-left text-[19px] mt-4 font-[600]'
                >At Cipco Limited, we are committed to delivering more than just products—</motion.p>
                <motion.p
                  variants={childVariants}
                  className='text-[#4B5563] text-[17px]'
                >We deliver trust, quality, and care. Our offerings reflect our dedication to excellence in pharmaceutical manufacturing and customer satisfaction. Explore how we stand apart through our diverse product range, stringent quality standards, and personalized service.</motion.p>
            </motion.div>

        </motion.section>

        {/*Features*/}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className={isMobile?'mt-[10px]':'mx-[100px] mt-[80px]'}
        >
            <motion.div variants={childVariants}>
                <Features/>
            </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className={isMobile?'mt-[60px]':'mx-[100px] mt-[100px] px-[50px]'}
        >
            <motion.div variants={childVariants} className={isMobile?'flex flex-col justify-center items-center gap-[20px]':'flex justify-center items-center gap-[20px]'}>
                 
                    <motion.div variants={childVariants}>
                        <motion.img
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8 }}
                          src={whogmpcert}
                          alt="who gmp certificate"
                          className={isMobile?'w-[300px] h-[260px]':'w-[600px] h-[500px]'}
                        />
                    </motion.div>
                
                <motion.div variants={childVariants} className={isMobile ? 'w-full' : 'w-[50%] ml-[80px] pr-[4px]'}>
                <motion.p
                  variants={childVariants}
                  className='inline-block py-[10px] px-[8px] text-left text-[18px] border rounded-[10px] text-[#4B5563] font-bold'
                >WHAT WE ARE</motion.p>
                <motion.p
                  variants={childVariants}
                  className='text-left text-[40px] mt-[8px] font-[600]'
                >A WHO AND GMP CERTIFIED UNIT</motion.p>
                <motion.p
                  variants={childVariants}
                  className='text-[#4B5563] text-[20px]'
                >Our vision is to make pharma products more accessible, affordable, and assuring for patients. Our people are passionate, hard working, and committed to ensuring we deliver the highest level of care possible.</motion.p>
                <motion.div
                  variants={containerVariants}
                  className={isMobile?'grid grid-cols-2 gap-[0px] mt-[50px]':'grid grid-cols-2 gap-[20px] mt-[50px]'}
                >
                <motion.div variants={statVariants} className='flex flex-col '>
                    <motion.div
                      className={isMobile?'text-[30px]':'text-[50px]'}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >32+</motion.div>
                    <div className={isMobile?'text-[#4B5563] text-[16px] pr-[10px]':'text-[#4B5563] text-[20px] pr-[10px]'}>Years of Serving Excellence</div>
                </motion.div>
                <motion.div variants={statVariants} className='flex flex-col '>
                    <motion.div
                      className={isMobile?'text-[30px]':'text-[50px]'}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    >400+</motion.div>
                    <div className={isMobile?'text-[#4B5563] text-[16px]':'text-[#4B5563] text-[20px] pr-[80px]'}>High Quality Products For Life</div>
                </motion.div>
                <motion.div variants={statVariants} className='flex flex-col mt-[20px]'>
                    <motion.div
                      className={isMobile?'text-[30px]':'text-[50px]'}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >10,000+</motion.div>
                    <div className={isMobile?'text-[#4B5563] text-[16px] pr-[10px]':'text-[#4B5563] text-[20px] pr-[10px]'}>Orders Delivered</div>
                </motion.div>
                <motion.div variants={statVariants} className='mt-[20px]'>
                    <motion.div
                      className='flex text-center justify-center'
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.p
                        whileHover={{ scale: 1.05 }}
                        className={isMobile?'bg-[#305d94] text-[white] inline-block px-[8px] py-[20px] rounded-[40px] cursor-pointer':'bg-[#305d94] text-[white] inline-block px-[20px] py-[20px] rounded-[40px] cursor-pointer'}
                      >All Certificates</motion.p>
                      <motion.svg
                        whileHover={{ scale: 1.05, rotate: 360 }}
                        className='bg-[#305d94] p-[10px] my-[20px] rounded-full'
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="29"
                        fill="none"
                        transition={{ duration: 0.5 }}
                      >
                        <path d="M 3.311 14.292 L 25.598 14.292" fill="transparent" stroke-width="2.34608" stroke="rgb(255, 255, 255)" stroke-miterlimit="10" stroke-dasharray=""></path>
                        <path d="M 26.772 14.292 L 25.599 14.292 C 22.359 14.292 19.733 16.918 19.733 20.157 L 19.733 23.677" fill="transparent" stroke-width="2.34608" stroke="rgb(255, 255, 255)" stroke-miterlimit="10" stroke-dasharray=""></path>
                        <path d="M 26.772 14.292 L 25.599 14.292 C 22.359 14.292 19.733 11.666 19.733 8.427 L 19.733 4.908" fill="transparent" stroke-width="2.34608" stroke="rgb(255, 255, 255)" stroke-miterlimit="10" stroke-dasharray=""></path>
                      </motion.svg>
                    </motion.div>
                </motion.div>
                </motion.div>
            </motion.div>
            </motion.div>
        </motion.section>

        {/*about us*/}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className={isMobile?'mt-[10px]':'mx-[100px] mt-[100px]'}
        >
            <motion.div variants={childVariants} className={!isMobile&&'grid grid-cols-2 items-center'}>
                <motion.div variants={childVariants}>
                <motion.p
                  variants={childVariants}
                  className='inline-block py-[10px] px-[8px] text-left text-[18px] border rounded-[10px] text-[#4B5563] font-bold'
                >ABOUT US</motion.p>
                <motion.p
                  variants={childVariants}
                  className={isMobile?'text-left text-[30px] mt-[8px] font-[500]':'text-left text-[40px] mt-[8px] font-[500]'}
                >About Cipco Ltd: Our Commitment</motion.p>
                <motion.p
                  variants={childVariants}
                  className='text-[#4B5563] text-[20px] mt-[8px]'
                >Cipco Limited is dedicated to manufacturing and supplying high-quality medicines, focusing on general medicine, antibiotics, anti-inflammatories, and OTC products, ensuring global healthcare access.</motion.p>
                <motion.div
                  variants={childVariants}
                  className="border border-dashed border-[#4B5563]"
                  style={{
                    borderWidth: '1px',
                    borderImage: 'repeating-linear-gradient(to right, #6a7483ff, #6b6e72ff 4px, transparent 4px, transparent 12px) 1',
                  }}
                >
                  {/* Your content here */}
                </motion.div>
                <motion.p
                  variants={childVariants}
                  className='text-left text-[40px] mt-[30px] font-[500]'
                >Quality Medicines</motion.p>
                <motion.div
                  variants={containerVariants}
                  className='grid grid-cols-2 gap-[20px] mt-[8px]'
                >
                    <motion.div
                      variants={childVariants}
                      className={isMobile?'text-[#4B5563] text-[16px] flex items-center gap-[6px]':'text-[#4B5563] text-[23px] flex items-center gap-[6px]'}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.svg
                        whileHover={{ scale: 1.1 }}
                        className='bg-[#2A9CB6] p-[16px] rounded-full'
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.463"
                        height="11.225"
                        fill="none"
                        overflow="visible"
                      > <g><path d="M 5.288 8.775 L 13.763 0.3 C 13.963 0.1 14.196 0 14.463 0 C 14.73 0 14.963 0.1 15.163 0.3 C 15.363 0.5 15.463 0.738 15.463 1.012 C 15.463 1.287 15.363 1.525 15.163 1.725 L 5.988 10.925 C 5.788 11.125 5.555 11.225 5.288 11.225 C 5.021 11.225 4.788 11.125 4.588 10.925 L 0.288 6.625 C 0.088 6.425 -0.008 6.188 0 5.913 C 0.009 5.637 0.113 5.4 0.313 5.2 C 0.513 5 0.75 4.9 1.025 4.9 C 1.3 4.9 1.538 5 1.738 5.2 Z" fill="rgb(255,255,255)"></path></g>
                      </motion.svg>
                      General Medicine
                    </motion.div>
                    <motion.div
                      variants={childVariants}
                      className={isMobile?'text-[#4B5563] text-[16px] flex items-center gap-[6px]':'text-[#4B5563] text-[23px] flex items-center gap-[6px]'}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.svg
                        whileHover={{ scale: 1.1 }}
                        className='bg-[#2A9CB6] p-[16px] rounded-full'
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.463"
                        height="11.225"
                        fill="none"
                        overflow="visible"
                      >
                        <g><path d="M 5.288 8.775 L 13.763 0.3 C 13.963 0.1 14.196 0 14.463 0 C 14.73 0 14.963 0.1 15.163 0.3 C 15.363 0.5 15.463 0.738 15.463 1.012 C 15.463 1.287 15.363 1.525 15.163 1.725 L 5.988 10.925 C 5.788 11.125 5.555 11.225 5.288 11.225 C 5.021 11.225 4.788 11.125 4.588 10.925 L 0.288 6.625 C 0.088 6.425 -0.008 6.188 0 5.913 C 0.009 5.637 0.113 5.4 0.313 5.2 C 0.513 5 0.75 4.9 1.025 4.9 C 1.3 4.9 1.538 5 1.738 5.2 Z" fill="rgb(255,255,255)"></path></g>
                      </motion.svg>
                      Anti-Inflammatories
                    </motion.div>
                    <motion.div
                      variants={childVariants}
                      className={isMobile?'text-[#4B5563] text-[16px] flex items-center gap-[6px]':'text-[#4B5563] text-[23px] flex items-center gap-[6px]'}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.svg
                        whileHover={{ scale: 1.1 }}
                        className='bg-[#2A9CB6] p-[16px] rounded-full'
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.463"
                        height="11.225"
                        fill="none"
                        overflow="visible"
                      >
                        <g><path d="M 5.288 8.775 L 13.763 0.3 C 13.963 0.1 14.196 0 14.463 0 C 14.73 0 14.963 0.1 15.163 0.3 C 15.363 0.5 15.463 0.738 15.463 1.012 C 15.463 1.287 15.363 1.525 15.163 1.725 L 5.988 10.925 C 5.788 11.125 5.555 11.225 5.288 11.225 C 5.021 11.225 4.788 11.125 4.588 10.925 L 0.288 6.625 C 0.088 6.425 -0.008 6.188 0 5.913 C 0.009 5.637 0.113 5.4 0.313 5.2 C 0.513 5 0.75 4.9 1.025 4.9 C 1.3 4.9 1.538 5 1.738 5.2 Z" fill="rgb(255,255,255)"></path></g>
                      </motion.svg>
                      Antibiotics Range
                    </motion.div>
                    <motion.div
                      variants={childVariants}
                      className={isMobile?'text-[#4B5563] text-[16px] flex items-center gap-[6px]':'text-[#4B5563] text-[23px] flex items-center gap-[6px]'}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.svg
                        whileHover={{ scale: 1.1 }}
                        className='bg-[#2A9CB6] p-[16px] rounded-full'
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.463"
                        height="11.225"
                        fill="none"
                        overflow="visible"
                      >
                        <g><path d="M 5.288 8.775 L 13.763 0.3 C 13.963 0.1 14.196 0 14.463 0 C 14.73 0 14.963 0.1 15.163 0.3 C 15.363 0.5 15.463 0.738 15.463 1.012 C 15.463 1.287 15.363 1.525 15.163 1.725 L 5.988 10.925 C 5.788 11.125 5.555 11.225 5.288 11.225 C 5.021 11.225 4.788 11.125 4.588 10.925 L 0.288 6.625 C 0.088 6.425 -0.008 6.188 0 5.913 C 0.009 5.637 0.113 5.4 0.313 5.2 C 0.513 5 0.75 4.9 1.025 4.9 C 1.3 4.9 1.538 5 1.738 5.2 Z" fill="rgb(255,255,255)"></path></g>
                      </motion.svg>
                      OTC Products
                    </motion.div>
                </motion.div>
                </motion.div>
               {!isMobile &&  <motion.div
                  variants={childVariants}
                  className="flex ml-[60px] gap-[40px] justify-center items-start flex-wrap"
                >
{data.map((item, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      custom={index}
      className="w-[275px] rounded-[30px] bg-[#F3F4F6] overflow-hidden relative shadow-md"
      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
    >
      {/* Top Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={item.img}
        alt="image"
        className="w-full h-[250px] object-cover"
      />

      {/* Overlapping Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-[220px] left-1/2 transform -translate-x-1/2 z-10 bg-[white] rounded-[10px] pl-[14px] pr-[12px] py-[15px] shadow flex items-center gap-2 shadow"
      >
        {item.svg}
        <span className="text-[#1F2937] ml-[6px] font-semibold text-[16px]">{item.title}</span>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="pt-[20px] pb-[20px] px-[20px] text-[16px] text-[#4B5563] font-medium"
      >
        {item.content}
      </motion.div>
    </motion.div>
))}
</motion.div>}

            </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className=' mt-[100px]'
        >
            <motion.div variants={childVariants} className={isMobile?'flex flex-row bg-[#F3F4F6] pb-[10px] rounded-[40px]':'flex flex-row bg-[#F3F4F6] p-[80px] rounded-[40px]'}>
                <motion.div variants={childVariants}>
                    {!isMobile&&<motion.img
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      src={about}
                      className='w-[500px] h-[500px]'
                      alt="hello is this is about"
                    />}
                </motion.div>
                <motion.div variants={childVariants} className={isMobile?'text-center':'w-[50%] ml-[80px] pr-[4px]'}>
                <motion.p
                  variants={childVariants}
                  className='inline-block py-[10px] px-[8px] text-left text-[18px] border rounded-[10px] text-[#4B5563] font-bold'
                >ABOUT US</motion.p>
                <motion.p
                  variants={childVariants}
                  className={isMobile?'text-center text-[30px] mt-[8px] font-[600]':'text-left text-[40px] mt-[8px] font-[600]'}
                >Committed to Quality Healthcare Since 1989</motion.p>
                <motion.p
                  variants={childVariants}
                  className={isMobile?'text-[#4B5563] text-[20px] text-justify px-[10px]':'text-[#4B5563] text-[20px] '}
                >At Cipco Limited, we’ve spent over three decades building a reputation for excellence in pharmaceutical manufacturing. Founded with a vision to make quality healthcare accessible, we specialize in WHO-GMP and ISO-certified formulations trusted by clients across the globe.</motion.p>
                <motion.p
                  variants={childVariants}
                  className='text-[#4B5563] text-[20px]'
                >Our experienced team, cutting-edge facility, and customer-first approach allow us to consistently deliver safe, effective, and reliable products that meet the highest industry standards.</motion.p>
                {isMobile&&<motion.div
                  variants={childVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/contact-us')}
                  className='bg-[#2A9CB6] p-[15px] px-[20px] text-[white] cursor-pointer text-[20px] font-[600] rounded-[40px] inline-block'
                >Contact Us</motion.div>}
                </motion.div>

            </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className='mt-[100px]'
        >
            <motion.div variants={childVariants} className={isMobile?'flex flex-col bg-[#0057A0] p-[0px] rounded-[40px]  items-center':'flex flex-row bg-[#0057A0] p-[80px] rounded-[40px] pl-[120px] items-center'}>
                <motion.div variants={childVariants} className={isMobile?'w-[90%]':'w-[60%]'}>
                {!isMobile&&<motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={colon}
                  alt="''"
                />}
                <motion.h2
                  variants={childVariants}
                  className={isMobile?'text-[white] font-[700] text-[40px]':'text-[white] font-[700] text-[50px] pr-[100px]'}
                >Partner With a Trusted Pharmaceutical Manufacturer Today</motion.h2>
                <motion.p
                  variants={childVariants}
                  className='font-[500] text-[white] text-[20px]'
                >Join 10,000+ clients who rely on Cipco for certified, high-quality healthcare solutions.</motion.p>
                </motion.div>
                <motion.div
                  variants={childVariants}
                  className={isMobile?'relative w-[0px] h-[100px] flex items-center justify-center':'relative w-[600px] h-[300px] flex items-center justify-center'}
                >
                    {!isMobile&&<div className='absolute inset-0 flex justify-between'>
                    <motion.svg
                      initial={{ opacity: 0, x: -50 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      width="187"
                      height="300"
                      viewBox="0 0 187 300"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M163.4 257.511C109.078 218.139 52.5349 157.448 46.7696 101.324C42.1147 67.1162 78.4147 33.1857 110.53 51.6447C130.068 55.678 155.734 99.5743 179.692 77.1673C214.027 37.7951 102.159 -10.3051 73.3968 1.944C-79.704 58.4735 39.4242 231.647 136.537 295.176C160.73 313.209 188.425 275.266 163.421 257.575V257.533L163.4 257.511Z" fill="white" fill-opacity="0.2"/>
                    </motion.svg>
                    <motion.svg
                      initial={{ opacity: 0, x: 50 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5
                      }}
                      width="185"
                      height="296"
                      viewBox="0 0 185 296"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M61.7701 7.60766C42.9253 16.4078 -17.1863 39.8534 7.10963 72.2918C29.5317 96.2727 57.8095 53.985 77.5485 51.1801C111.363 34.8859 144.389 71.0714 137.83 105.03C128.44 160.914 68.4562 217.912 11.7942 253.947C1.2752 260.756 -2.36598 274.438 3.53232 285.079C25.7202 327.067 107.828 235.34 122.563 222.472C158.698 182.732 178.054 147.639 183.42 112.01C195.834 48.6321 130.165 -22.5397 61.7701 7.62908V7.58626V7.60766Z" fill="white" fill-opacity="0.2"/>
                    </motion.svg>
                    </div>}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onClick={() => navigate('/contact-us')}
                      className='bg-[white] text-[#0057A0] rounded-[40px] p-[15px] px-[20px] text-[20px] font-[600] relative z-10'
                      style={{ whiteSpace: 'nowrap' }}
                    >Contact Us</motion.div>


                </motion.div>
            </motion.div>
        </motion.section>

        {!isMobile&&<motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className='mt-[100px] mx-[100px]'
        >
            <motion.div variants={childVariants}>
                <Map/>
            </motion.div>
        </motion.section>}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className={isMobile?'mt-[20px] mx-[0px]':'mt-[100px] mx-[100px]'}
        >
            <motion.div variants={childVariants}>
                <Contact/>
            </motion.div>
        </motion.section>
        </>
    );
}
