import med1 from '../assets/product/med1-cip.png';
import med2 from '../assets/product/med2-cet.png';
import med3 from '../assets/product/med3-ana.png';
import med4 from '../assets/product/med4-vit.png';

const data=[
    {
        id:1,
        image:med1,
        name:"Cipcor 500 Tablets",},
    {
        id:2,
        image:med2,
        name:"Cipcet Tablets",},
    {        id:3,
        image:med3,
        name:"Anadol Tablets",},
    {        id:4,
        image:med4,
        name:"Vitiation Tablets",}
];

export default function Products() {
  return (
    <section className="mt-[100px] px-8 md:px-20">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-10">Our Products</h2>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-[200px] bg-[#f1f7eb] rounded-tl-xl rounded-bl-xl p-4">
          <ul className="space-y-6 font-medium text-[#1e5c0f]">
            <li className="font-bold text-black border-l-4 border-[#1e5c0f] pl-2">Tablets</li>
            <li>Liquid</li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-[6px] ml-6 w-full">
          {data.map((item) => (
            <div key={item.id} className="bg-[#f1f7eb] rounded-[10px] shadow-sm overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[180px] object-contain bg-[#a9bccf] p-4 rounded-t-[10px]"
              />
              <div className="text-center py-4 font-medium text-[14px] text-[#1e5c0f]">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}