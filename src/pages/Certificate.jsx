import cert1 from '../assets/product/cert1.png';
import cert2 from '../assets/product/cert2.png'; 
import cert3 from '../assets/product/cert3.png';
import cert4 from '../assets/product/cert4.png';

const data = [cert1, cert2, cert3, cert4];

export default function Certificate(){
    return(
        <section className='mt-[100px] px-[100px]'>
            <div>
                <div className="text-[40px] font-[600] ">Certificates</div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-[50px]">
  {data.map((item, index) => (
    <div key={index}>
      <img
        src={item}
        alt="Certificate"
        className="w-[600px] h-[700px] object-cover"
      />
    </div>
  ))}
</div>
        </section>
    );
}