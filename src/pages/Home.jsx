import heroimg from '../assets/images/hero.png';
import Features from '../components/Features';
import mission from '../assets/images/mission.jpg';
import vision from '../assets/images/vission.jpg';
import whogmpcert from '../assets/images/whogmpcert.png';
import colon from '../assets/element/colon.png';
import about from '../assets/images/about.jpg';
import Map from '../components/map.jsx';
import Contact from '../components/Contact.jsx';


const data = [
    {
        img:mission,
        title:'Our Mission',
        content:'To provide affordable, high-quality medicines, improving global health outcomes and patient well-being through innovative pharmaceutical solutions.',
        svg:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" overflow="visible"><g><path d="M 10 20 C 8.617 20 7.317 19.738 6.1 19.212 C 4.883 18.688 3.825 17.975 2.925 17.075 C 2.025 16.175 1.313 15.117 0.788 13.9 C 0.263 12.683 0 11.383 0 10 C 0 8.617 0.263 7.317 0.788 6.1 C 1.313 4.883 2.025 3.825 2.925 2.925 C 3.825 2.025 4.883 1.313 6.1 0.788 C 7.317 0.263 8.617 0 10 0 C 11.383 0 12.683 0.263 13.9 0.788 C 15.117 1.313 16.175 2.025 17.075 2.925 C 17.975 3.825 18.688 4.883 19.212 6.1 C 19.738 7.317 20 8.617 20 10 C 20 11.383 19.738 12.683 19.212 13.9 C 18.688 15.117 17.975 16.175 17.075 17.075 C 16.175 17.975 15.117 18.688 13.9 19.212 C 12.683 19.738 11.383 20 10 20 Z M 10 18 C 12.233 18 14.125 17.225 15.675 15.675 C 17.225 14.125 18 12.233 18 10 C 18 7.767 17.225 5.875 15.675 4.325 C 14.125 2.775 12.233 2 10 2 C 7.767 2 5.875 2.775 4.325 4.325 C 2.775 5.875 2 7.767 2 10 C 2 12.233 2.775 14.125 4.325 15.675 C 5.875 17.225 7.767 18 10 18 Z M 10 16 C 8.333 16 6.917 15.417 5.75 14.25 C 4.583 13.083 4 11.667 4 10 C 4 8.333 4.583 6.917 5.75 5.75 C 6.917 4.583 8.333 4 10 4 C 11.667 4 13.083 4.583 14.25 5.75 C 15.417 6.917 16 8.333 16 10 C 16 11.667 15.417 13.083 14.25 14.25 C 13.083 15.417 11.667 16 10 16 Z M 10 14 C 11.1 14 12.042 13.608 12.825 12.825 C 13.608 12.042 14 11.1 14 10 C 14 8.9 13.608 7.958 12.825 7.175 C 12.042 6.392 11.1 6 10 6 C 8.9 6 7.958 6.392 7.175 7.175 C 6.392 7.958 6 8.9 6 10 C 6 11.1 6.392 12.042 7.175 12.825 C 7.958 13.608 8.9 14 10 14 Z M 10 12 C 9.45 12 8.979 11.804 8.588 11.412 C 8.196 11.021 8 10.55 8 10 C 8 9.45 8.196 8.979 8.588 8.588 C 8.979 8.196 9.45 8 10 8 C 10.55 8 11.021 8.196 11.412 8.588 C 11.804 8.979 12 9.45 12 10 C 12 10.55 11.804 11.021 11.412 11.412 C 11.021 11.804 10.55 12 10 12 Z" fill="rgb(0, 87, 160)"></path></g></svg>
    },
    {
        img:vision,
        title:'Our Vision',
        content:'To be a leading pharmaceutical company, recognized for innovation, quality, and commitment to global healthcare accessibility and affordability.',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="21.45" height="15" fill="none" overflow="visible"><g><path d="M 10.725 12 C 11.975 12 13.038 11.563 13.913 10.688 C 14.788 9.813 15.225 8.75 15.225 7.5 C 15.225 6.25 14.788 5.188 13.913 4.313 C 13.038 3.438 11.975 3 10.725 3 C 9.475 3 8.412 3.438 7.537 4.313 C 6.662 5.188 6.225 6.25 6.225 7.5 C 6.225 8.75 6.662 9.813 7.537 10.688 C 8.412 11.563 9.475 12 10.725 12 Z M 10.725 10.2 C 9.975 10.2 9.338 9.938 8.813 9.413 C 8.287 8.888 8.025 8.25 8.025 7.5 C 8.025 6.75 8.287 6.113 8.813 5.588 C 9.338 5.063 9.975 4.8 10.725 4.8 C 11.475 4.8 12.113 5.063 12.638 5.588 C 13.163 6.113 13.425 6.75 13.425 7.5 C 13.425 8.25 13.163 8.888 12.638 9.413 C 12.113 9.938 11.475 10.2 10.725 10.2 Z M 10.725 15 C 8.492 15 6.454 14.4 4.612 13.2 C 2.771 12 1.317 10.417 0.25 8.45 C 0.167 8.3 0.104 8.146 0.063 7.988 C 0.021 7.829 0 7.667 0 7.5 C 0 7.333 0.021 7.171 0.063 7.012 C 0.104 6.854 0.167 6.7 0.25 6.55 C 1.317 4.583 2.771 3 4.612 1.8 C 6.454 0.6 8.492 0 10.725 0 C 12.958 0 14.996 0.6 16.838 1.8 C 18.679 3 20.133 4.583 21.2 6.55 C 21.283 6.7 21.346 6.854 21.388 7.012 C 21.429 7.171 21.45 7.333 21.45 7.5 C 21.45 7.667 21.429 7.829 21.388 7.988 C 21.346 8.146 21.283 8.3 21.2 8.45 C 20.133 10.417 18.679 12 16.838 13.2 C 14.996 14.4 12.958 15 10.725 15 Z" fill="rgb(0, 87, 160)"></path></g></svg>
    }
];

export default function Home() {
    return (
        <>
        <section style={{ marginTop: '110px', marginLeft: '100px', marginRight: '100px', borderRadius: '40px', overflow: 'hidden', position: 'relative', height: '600px' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                
                

                <img src={heroimg} alt="hero img" className="w-full h-auto object-cover" />


                {/* Content Overlaid */}
                <div style={{ position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end', padding: '2rem', color: 'white', zIndex: 20, paddingLeft: '48rem', textAlign: 'right' }}>

                    <div className='flex justify-center bg-[rgba(255,255,255,0.4)] p-[10px] rounded-[40px]'>
                        <svg className='pr-[8px]' xmlns="http://www.w3.org/2000/svg" width="18.057" height="18" fill="none" overflow="visible"><g><path d="M 2.029 18 C 1.179 18 0.574 17.621 0.216 16.863 C -0.142 16.104 -0.055 15.4 0.479 14.75 L 6.029 8 L 6.029 2 L 5.029 2 C 4.745 2 4.508 1.904 4.316 1.713 C 4.124 1.521 4.029 1.283 4.029 1 C 4.029 0.717 4.124 0.479 4.316 0.288 C 4.508 0.096 4.745 0 5.029 0 L 13.028 0 C 13.312 0 13.549 0.096 13.741 0.288 C 13.933 0.479 14.028 0.717 14.028 1 C 14.028 1.283 13.933 1.521 13.741 1.713 C 13.549 1.904 13.312 2 13.028 2 L 12.028 2 L 12.028 8 L 17.578 14.75 C 18.112 15.4 18.199 16.104 17.841 16.863 C 17.483 17.621 16.878 18 16.028 18 Z M 4.029 15 L 14.028 15 L 10.628 11 L 7.428 11 Z" fill="rgb(255,255,255)"></path></g></svg>
                        Trusted Pharma Solutions 
                    </div>

                    <h1 className='text-[50px] font-bold'>Precision Formulations for Better Health</h1>
                    <p className='mt-4 text-[18px] pl-[4rem]'>From essential generics to advanced therapeutics, our products are engineered for performance and trust. Quality, compliance, and care in every dose.</p>
                    <button className="mt-[8px] border border-[#76A9FA] text-[#2A9CB6] px-[6px] py-2 rounded-[40px] text-[13px] p-[10px] px-[12px] hover:bg-gray-50 text-sm font-semibold transition-colors">
                        View Products
                    </button>
                </div>
            </div>
        </section>

        {/*what we offer*/}
        <section className='mx-[100px] mt-[100px]'>
            <div className='w-[60%]'>
                <p className='inline-block py-[10px] px-[8px] text-left text-[18px] border rounded-[10px] text-[#4B5563] font-bold mt-10'>WHAT WE OFFER</p>
                <p className='text-left text-[19px] mt-4 font-[600]'>At Cipco Pharmaceuticals, we are committed to delivering more than just products—</p>
                <p className='text-[#4B5563] text-[17px]'>We deliver trust, quality, and care. Our offerings reflect our dedication to excellence in pharmaceutical manufacturing and customer satisfaction. Explore how we stand apart through our diverse product range, stringent quality standards, and personalized service.</p>
            </div>

        </section>

        {/*Features*/}
        <section className='mx-[100px] mt-[80px]'>
            <Features/>
        </section>

        <section className='mx-[100px] mt-[100px] px-[50px]'>
            <div className='flex justify-center items-center gap-[20px]'>
                <div>
                    <img src={whogmpcert} alt="who gmp certificate" className='w-[600px] h-[500px]' />
                </div>
                <div className='w-[50%] ml-[80px] pr-[4px]'>
                <p className='inline-block py-[10px] px-[8px] text-left text-[18px] border rounded-[10px] text-[#4B5563] font-bold'>WHAT WE ARE</p>
                <p className='text-left text-[40px] mt-[8px] font-[600]'>A WHO AND GMP CERTIFIED UNIT</p>
                <p className='text-[#4B5563] text-[20px]'>Our vision is to make pharma products more accessible, affordable, and assuring for patients. Our people are passionate, hard working, and committed to ensuring we deliver the highest level of care possible.</p>
                <div className='grid grid-cols-2 gap-[20px] mt-[50px]'>
                <div className='flex flex-col '>
                    <div className='text-[50px]'>32+</div>
                    <div className='text-[#4B5563] text-[20px] pr-[10px]'>Years of Serving Excellence</div>
                </div>
                <div className='flex flex-col '>
                    <div className='text-[50px]'>400+</div>
                    <div className='text-[#4B5563] text-[20px] pr-[80px]'>High Quality Products For Life</div>
                </div>
                <div className='flex flex-col mt-[20px]'>
                    <div className='text-[50px]'>10,000+</div>
                    <div className='text-[#4B5563] text-[20px]'>Orders Delivered</div>
                </div>
                <div className='mt-[20px]'>
                    <div className='flex text-center justify-center'> <p className='bg-[#1C64F2] text-[white] inline-block px-[20px] py-[20px] rounded-[40px] cursor-pointer'>All Certificates</p>
                    <svg className='bg-[#1C64F2] p-[10px] my-[20px] rounded-full' xmlns="http://www.w3.org/2000/svg" width="30" height="29" fill="none"><path d="M 3.311 14.292 L 25.598 14.292" fill="transparent" stroke-width="2.34608" stroke="rgb(255, 255, 255)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 26.772 14.292 L 25.599 14.292 C 22.359 14.292 19.733 16.918 19.733 20.157 L 19.733 23.677" fill="transparent" stroke-width="2.34608" stroke="rgb(255, 255, 255)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 26.772 14.292 L 25.599 14.292 C 22.359 14.292 19.733 11.666 19.733 8.427 L 19.733 4.908" fill="transparent" stroke-width="2.34608" stroke="rgb(255, 255, 255)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/*about us*/}
        <section className='mx-[100px] mt-[100px]'>
            <div className='grid grid-cols-2 items-center'>
                <div>
<p className='inline-block py-[10px] px-[8px] text-left text-[18px] border rounded-[10px] text-[#4B5563] font-bold'>ABOUT US</p>
                <p className='text-left text-[40px] mt-[8px] font-[500]'>About Cipco Pharma: Our Commitment</p>
                <p className='text-[#4B5563] text-[20px] mt-[8px]'>Cipco Pharma is dedicated to manufacturing and supplying high-quality medicines, focusing on general medicine, antibiotics, anti-inflammatories, and OTC products, ensuring global healthcare access.</p>
                <div
  className="border border-dashed border-[#4B5563]"
  style={{
    borderWidth: '1px',
    borderImage: 'repeating-linear-gradient(to right, #6a7483ff, #6b6e72ff 4px, transparent 4px, transparent 12px) 1',
  }}
>
  {/* Your content here */}
</div>
<p className='text-left text-[40px] mt-[30px] font-[500]'>Quality Medicines</p>
<div className='grid grid-cols-2 gap-[20px] mt-[8px]'>
    <div className='text-[#4B5563] text-[23px] flex items-center gap-[6px]'><svg className='bg-[#2A9CB6] p-[16px] rounded-full' xmlns="http://www.w3.org/2000/svg" width="15.463" height="11.225" fill="none" overflow="visible"><g><path d="M 5.288 8.775 L 13.763 0.3 C 13.963 0.1 14.196 0 14.463 0 C 14.73 0 14.963 0.1 15.163 0.3 C 15.363 0.5 15.463 0.738 15.463 1.012 C 15.463 1.287 15.363 1.525 15.163 1.725 L 5.988 10.925 C 5.788 11.125 5.555 11.225 5.288 11.225 C 5.021 11.225 4.788 11.125 4.588 10.925 L 0.288 6.625 C 0.088 6.425 -0.008 6.188 0 5.913 C 0.009 5.637 0.113 5.4 0.313 5.2 C 0.513 5 0.75 4.9 1.025 4.9 C 1.3 4.9 1.538 5 1.738 5.2 Z" fill="rgb(255,255,255)"></path></g></svg> General Medicine</div>
    <div className='text-[#4B5563] text-[23px] flex items-center gap-[6px]'><svg className='bg-[#2A9CB6] p-[16px] rounded-full' xmlns="http://www.w3.org/2000/svg" width="15.463" height="11.225" fill="none" overflow="visible"><g><path d="M 5.288 8.775 L 13.763 0.3 C 13.963 0.1 14.196 0 14.463 0 C 14.73 0 14.963 0.1 15.163 0.3 C 15.363 0.5 15.463 0.738 15.463 1.012 C 15.463 1.287 15.363 1.525 15.163 1.725 L 5.988 10.925 C 5.788 11.125 5.555 11.225 5.288 11.225 C 5.021 11.225 4.788 11.125 4.588 10.925 L 0.288 6.625 C 0.088 6.425 -0.008 6.188 0 5.913 C 0.009 5.637 0.113 5.4 0.313 5.2 C 0.513 5 0.75 4.9 1.025 4.9 C 1.3 4.9 1.538 5 1.738 5.2 Z" fill="rgb(255,255,255)"></path></g></svg>Anti-Inflammatories</div>
    <div className='text-[#4B5563] text-[23px] flex items-center gap-[6px]'><svg className='bg-[#2A9CB6] p-[16px] rounded-full' xmlns="http://www.w3.org/2000/svg" width="15.463" height="11.225" fill="none" overflow="visible"><g><path d="M 5.288 8.775 L 13.763 0.3 C 13.963 0.1 14.196 0 14.463 0 C 14.73 0 14.963 0.1 15.163 0.3 C 15.363 0.5 15.463 0.738 15.463 1.012 C 15.463 1.287 15.363 1.525 15.163 1.725 L 5.988 10.925 C 5.788 11.125 5.555 11.225 5.288 11.225 C 5.021 11.225 4.788 11.125 4.588 10.925 L 0.288 6.625 C 0.088 6.425 -0.008 6.188 0 5.913 C 0.009 5.637 0.113 5.4 0.313 5.2 C 0.513 5 0.75 4.9 1.025 4.9 C 1.3 4.9 1.538 5 1.738 5.2 Z" fill="rgb(255,255,255)"></path></g></svg>Antibiotics Range</div>
    <div className='text-[#4B5563] text-[23px] flex items-center gap-[6px]'><svg className='bg-[#2A9CB6] p-[16px] rounded-full' xmlns="http://www.w3.org/2000/svg" width="15.463" height="11.225" fill="none" overflow="visible"><g><path d="M 5.288 8.775 L 13.763 0.3 C 13.963 0.1 14.196 0 14.463 0 C 14.73 0 14.963 0.1 15.163 0.3 C 15.363 0.5 15.463 0.738 15.463 1.012 C 15.463 1.287 15.363 1.525 15.163 1.725 L 5.988 10.925 C 5.788 11.125 5.555 11.225 5.288 11.225 C 5.021 11.225 4.788 11.125 4.588 10.925 L 0.288 6.625 C 0.088 6.425 -0.008 6.188 0 5.913 C 0.009 5.637 0.113 5.4 0.313 5.2 C 0.513 5 0.75 4.9 1.025 4.9 C 1.3 4.9 1.538 5 1.738 5.2 Z" fill="rgb(255,255,255)"></path></g></svg>OTC Products</div>
</div>
                </div>
                <div className="flex ml-[60px] gap-[40px] justify-center items-start flex-wrap">
  {data.map((item, index) => (
    <div key={index} className="w-[275px] rounded-[30px] bg-[#F3F4F6] overflow-hidden relative shadow-md">
      {/* Top Image */}
      <img
        src={item.img}
        alt="image"
        className="w-full h-[250px] object-cover"
      />

      {/* Overlapping Label */}
      <div className="absolute top-[220px] left-1/2 transform -translate-x-1/2 z-10 bg-[white] rounded-[10px] pl-[14px] pr-[12px] py-[15px] shadow flex items-center gap-2 shadow">
        {item.svg}
        <span className="text-[#1F2937] ml-[6px] font-semibold text-[16px]">{item.title}</span>
      </div>

      {/* Text Content */}
      <div className="pt-[20px] pb-[20px] px-[20px] text-[16px] text-[#4B5563] font-medium">
        {item.content}
      </div>
    </div>
  ))}
</div>

            </div>
        </section>

        <section className=' mt-[100px]'>
            <div className='flex flex-row bg-[#F3F4F6] p-[80px] rounded-[40px]'>
                <div>
                    <img src={about} className='w-[500px] h-[500px]' alt="hello is this is about" />
                </div>
                <div className='w-[50%] ml-[80px] pr-[4px]'>
                <p className='inline-block py-[10px] px-[8px] text-left text-[18px] border rounded-[10px] text-[#4B5563] font-bold'>ABOUT US</p>
                <p className='text-left text-[40px] mt-[8px] font-[600]'>Committed to Quality Healthcare Since 1989</p>
                <p className='text-[#4B5563] text-[20px]'>At Cipco Pharmaceuticals, we’ve spent over three decades building a reputation for excellence in pharmaceutical manufacturing. Founded with a vision to make quality healthcare accessible, we specialize in WHO-GMP and ISO-certified formulations trusted by clients across the globe.

</p>
<p className='text-[#4B5563] text-[20px]'>Our experienced team, cutting-edge facility, and customer-first approach allow us to consistently deliver safe, effective, and reliable products that meet the highest industry standards.</p>
                <div className='bg-[#2A9CB6] p-[15px] px-[20px] text-[white] cursor-pointer text-[20px] font-[600] rounded-[40px] inline-block'>Contact Us</div> 
                </div>

                
            </div>
        </section>

        <section className='mt-[100px]'>
            <div className='flex flex-row bg-[#0057A0] p-[80px] rounded-[40px] pl-[120px] items-center'>
                <div className='w-[60%]'>
                <img src={colon} alt="''" />
                <h2 className='text-[white] font-[700] text-[50px] pr-[100px]'>Partner With a Trusted Pharmaceutical Manufacturer Today</h2>
                <p className='font-[500] text-[white] text-[20px]'>Join 10,000+ clients who rely on Cipco for certified, high-quality healthcare solutions.</p>
                </div>
                <div className='relative w-[600px] h-[300px] flex items-center justify-center'>
                    <div className='absolute insert-0'>
                    <svg width="187" height="300" viewBox="0 0 187 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M163.4 257.511C109.078 218.139 52.5349 157.448 46.7696 101.324C42.1147 67.1162 78.4147 33.1857 110.53 51.6447C130.068 55.678 155.734 99.5743 179.692 77.1673C214.027 37.7951 102.159 -10.3051 73.3968 1.944C-79.704 58.4735 39.4242 231.647 136.537 295.176C160.73 313.209 188.425 275.266 163.421 257.575V257.533L163.4 257.511Z" fill="white" fill-opacity="0.2"/>
                    </svg>
                    <svg width="185" height="296" viewBox="0 0 185 296" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61.7701 7.60766C42.9253 16.4078 -17.1863 39.8534 7.10963 72.2918C29.5317 96.2727 57.8095 53.985 77.5485 51.1801C111.363 34.8859 144.389 71.0714 137.83 105.03C128.44 160.914 68.4562 217.912 11.7942 253.947C1.2752 260.756 -2.36598 274.438 3.53232 285.079C25.7202 327.067 107.828 235.34 122.563 222.472C158.698 182.732 178.054 147.639 183.42 112.01C195.834 48.6321 130.165 -22.5397 61.7701 7.62908V7.58626V7.60766Z" fill="white" fill-opacity="0.2"/>
                    </svg>
                    </div>
                    <div className='bg-[white] text-[#0057A0] rounded-[40px] p-[15px] text-[20px] font-[600]'>Contact Us</div>


                </div>
            </div>
        </section>

        <section className='mt-[100px] mx-[100px]'>
            <Map/>
        </section>

        <section className='mt-[100px] mx-[100px]'>
            <Contact/>
        </section>
        </>
    );
}
