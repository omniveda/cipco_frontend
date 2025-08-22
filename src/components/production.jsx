import greentick from '../assets/element/green-tick.png';
import med from '../assets/element/med.png'
import tab from '../assets/element/tab.png';

const data = [
    {
        id:1,
        img:greentick,
        title:"Tablets Production",
        content:[
            {desc:"State-of-the-art machinery ensures precise tablet formulation and uniformity."},
            {desc:"Stringent quality control measures ensure accurate dosages and consistent quality."},
            {desc:"WHO-GMP compliant manufacturing standards."}  
        ]
    },
    {
        id:2,
        img:med,
        title:"Liquid Formulations",
        content:[
            {desc:"Advanced processes ensure precise blending of liquid components."},
            {desc:"Cutting-edge equipment supports consistent product quality."},
            {desc:"Stage-wise quality checks for safety and stability."}  
        ]
    },
    {
        id:3,
        img:tab,
        title:"Commitment to Compliance",
        content:[
            {desc:"Focused on environmental responsibility."},
            {desc:"Strong commitment to quality and GMP/GLP compliance."},
            {desc:"Recognized as a premier pharmaceutical manufacturer."}  
        ]
    }
];

export default function Production(){
    return (
    <div className="px-[100px] mt-[60px]">
      <h2 className="text-[40px] font-bold mb-8">Production Excellence</h2>
      <p className="text-[18px] mb-[50px]">
        We specialize in producing both tablets and liquid formulations to the highest standards.
      </p>
      
      <div className="flex gap-[50px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4 bg-[#f5fbf1] p-6 rounded-[10px] shadow-lg hover:shadow-xl transition-all ease-in-out relative"
          >
            {/* Image/Icon Section */}
            <div className=" rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2">
              <img src={item.img} alt={item.title} className="w-[100px] h-[100px] object-contain" />
            </div>
            
            <h3 className="text-xl font-[600] text-[#333] pt-[80px]">{item.title}</h3>
            <div className="space-y-2 px-[35px]">
              {item.content.map((desc, index) => (
                <p key={index} className="text-sm text-[#555]">{desc.desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}