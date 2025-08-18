import med1 from '../assets/product/med1-cip.png';
import med2 from '../assets/product/med2-cet.png';
import med3 from '../assets/product/med3-ana.png';
import med4 from '../assets/product/med4-vit.png';

const data = [
    { id: 1, image: med1, name: "Cipcor 500 Tablets" },
    { id: 2, image: med2, name: "Cipcet Tablets" },
    { id: 3, image: med3, name: "Anadol Tablets" },
    { id: 4, image: med4, name: "Vitiation Tablets" }
];

export default function Products() {
    return (
        <section className="mt-[100px] px-8 md:px-20">
            {/* Title */}

            <div className="flex">
                {/* Clean Sidebar matching the image */}
                <div className="w-[180px] bg-[#F3F9EF] p-0 mr-8">
                    <div className="space-y-0 mt-[20px]">
                        
                            <div className="px-[20px] py-[14px] text-[#4a7c59] font-medium text-base hover:bg-[white] cursor-pointer transition-colors duration-200">
                                Tablets
                            </div>
                        
                            <div className="px-[20px] py-[14px] text-[#4a7c59] font-medium text-base hover:bg-[white] cursor-pointer transition-colors duration-200">
                                Liquid
                            </div>
                      
                    </div>
                </div>

                {/* Product Grid matching the image layout */}
                <div className="flex-1">
            <h2 className="text-[35px] font-bold mb-12 pl-[20px] text-black">Our Products</h2>
                    <div className="grid grid-cols-4 gap-[40px] mx-[40px]">
                        {data.map((item) => (
                            <div key={item.id} className="bg-white rounded-[20px] border border-[#D1D5DB] overflow-hidden hover:shadow-[30px] transition-shadow duration-300">
                                <div className="bg-[#b8c9d4] p-6 flex items-center justify-center h-[200px]">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 bg-white">
                                    <h4 className="text-[#4a7c59] font-medium text-sm text-center leading-relaxed">
                                        {item.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}