import heroimg from '../assets/images/hero.png';

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
        </>
    );
}
